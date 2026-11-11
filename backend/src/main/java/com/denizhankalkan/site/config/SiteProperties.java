package com.denizhankalkan.site.config;

import java.util.List;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Settings read from application.properties, all under the "site." prefix.
 *
 * @param messagesFile   file that contact notes are appended to, one JSON object per line
 * @param allowedOrigins web addresses allowed to call the API from a browser
 */
@ConfigurationProperties(prefix = "site")
public record SiteProperties(String messagesFile, List<String> allowedOrigins) {}
