package com.denizhankalkan.site.contact;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class ContactControllerTest {

  @TempDir static Path folder;

  @DynamicPropertySource
  static void useTemporaryFile(DynamicPropertyRegistry registry) {
    registry.add("site.messages-file", () -> folder.resolve("messages.jsonl").toString());
  }

  @Autowired MockMvc mvc;

  @Test
  void savesAValidNote() throws Exception {
    mvc.perform(
            post("/api/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    """
                    {"name":"Ada","email":"ada@example.com","message":"Hello from the test.","website":""}
                    """))
        .andExpect(status().isNoContent());

    assertThat(Files.readString(folder.resolve("messages.jsonl")))
        .contains("ada@example.com")
        .contains("Hello from the test.");
  }

  @Test
  void rejectsANoteWithoutAnEmail() throws Exception {
    mvc.perform(
            post("/api/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    """
                    {"name":"Ada","email":"","message":"Hello","website":""}
                    """))
        .andExpect(status().isBadRequest());
  }

  @Test
  void dropsANoteThatFillsTheTrapField() throws Exception {
    mvc.perform(
            post("/api/contact")
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    """
                    {"name":"Bot","email":"bot@example.com","message":"Buy now","website":"http://spam.example"}
                    """))
        .andExpect(status().isNoContent());

    Path file = folder.resolve("messages.jsonl");
    assertThat(Files.exists(file) ? Files.readString(file) : "").doesNotContain("bot@example.com");
  }
}
