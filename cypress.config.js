const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    retries: {
      runMode: 1,
      openMode: 0
    }
  },

  env: {
    testEmail: 'test@example.com',
    testPassword: 'Password123!'
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/json',
    overwrite: false,
    html: false,
    json: true,
    quiet: true
  },

  video: false,
  screenshotOnRunFailure: true
})
