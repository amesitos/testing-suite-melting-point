const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Deshabilitar warning de Cypress.env()
    env: {},
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  // Configuraciones adicionales
  retries: {
    runMode: 2,    // Reintentar 2 veces en modo headless
    openMode: 0    // No reintentar en modo interactivo
  },
})
