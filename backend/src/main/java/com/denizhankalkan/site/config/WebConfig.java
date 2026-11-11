package com.denizhankalkan.site.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Lets the addresses listed in site.allowed-origins call the API from a browser.
 * Only needed when the frontend is hosted on a different address than this backend.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

  private final SiteProperties properties;

  public WebConfig(SiteProperties properties) {
    this.properties = properties;
  }

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry
        .addMapping("/api/**")
        .allowedOrigins(properties.allowedOrigins().toArray(String[]::new))
        .allowedMethods("GET", "POST");
  }
}
