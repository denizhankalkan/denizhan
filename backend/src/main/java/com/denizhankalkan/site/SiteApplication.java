package com.denizhankalkan.site;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

/**
 * Starts the backend. It has two jobs: receive contact notes under /api,
 * and serve the built Angular site from src/main/resources/static.
 */
@SpringBootApplication
@ConfigurationPropertiesScan
public class SiteApplication {

  public static void main(String[] args) {
    SpringApplication.run(SiteApplication.class, args);
  }
}
