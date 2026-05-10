// playwright.config.js
module.exports = {
  use: {
    baseURL: 'http://localhost:8080',
  },
  webServer: {
    command: 'npm start',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
};
