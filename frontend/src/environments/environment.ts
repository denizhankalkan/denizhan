/** Production settings. `ng build` uses this file. */
export const environment = {
  production: true,
  /** The Java backend. Same origin in production, because Spring Boot also serves the site. */
  apiUrl: '/api',
};
