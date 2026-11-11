package com.denizhankalkan.site.contact;

import com.denizhankalkan.site.config.SiteProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.stereotype.Component;

/**
 * Keeps contact notes in a plain text file, one JSON object per line.
 * No database to run: open the file to read your notes.
 */
@Component
public class MessageStore {

  private final Path file;
  private final ObjectMapper json;

  public MessageStore(SiteProperties properties, ObjectMapper json) {
    this.file = Path.of(properties.messagesFile());
    this.json = json;
  }

  public synchronized void save(ContactRequest request) throws IOException {
    Map<String, String> line = new LinkedHashMap<>();
    line.put("receivedAt", Instant.now().toString());
    line.put("name", request.name().strip());
    line.put("email", request.email().strip());
    line.put("message", request.message().strip());

    if (file.getParent() != null) {
      Files.createDirectories(file.getParent());
    }
    Files.writeString(
        file,
        json.writeValueAsString(line) + System.lineSeparator(),
        StandardCharsets.UTF_8,
        StandardOpenOption.CREATE,
        StandardOpenOption.APPEND);
  }
}
