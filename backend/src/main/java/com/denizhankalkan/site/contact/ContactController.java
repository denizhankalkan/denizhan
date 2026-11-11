package com.denizhankalkan.site.contact;

import jakarta.validation.Valid;
import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** POST /api/contact: checks the note and saves it. */
@RestController
@RequestMapping("/api/contact")
public class ContactController {

  private static final Logger log = LoggerFactory.getLogger(ContactController.class);

  private final MessageStore store;

  public ContactController(MessageStore store) {
    this.store = store;
  }

  @PostMapping
  public ResponseEntity<Void> receive(@Valid @RequestBody ContactRequest request)
      throws IOException {
    if (request.looksLikeBot()) {
      // Answer as if it worked, so the bot learns nothing, but keep nothing.
      return ResponseEntity.noContent().build();
    }
    store.save(request);
    log.info("New contact note from {}", request.name());
    return ResponseEntity.noContent().build();
  }
}
