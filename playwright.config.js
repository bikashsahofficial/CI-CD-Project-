/* eslint-env node */

// playwright.config.js
module.exports = {
  use: {
    baseURL: 'http://localhost:8080',
  },
  webServer: {
    command: 'npm run start-prod',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
}
