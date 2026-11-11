package com.denizhankalkan.site.contact;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * What the contact form sends. The limits match the Angular form.
 *
 * @param website hidden trap field; a real visitor leaves it empty
 */
public record ContactRequest(
    @NotBlank @Size(max = 80) String name,
    @NotBlank @Email @Size(max = 160) String email,
    @NotBlank @Size(max = 2000) String message,
    String website) {

  boolean looksLikeBot() {
    return website != null && !website.isBlank();
  }
}
