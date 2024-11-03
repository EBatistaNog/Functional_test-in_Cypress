
const { defineConfig } = require('cypress');


module.exports = defineConfig({
  e2e: {
    
    reporter: 'cypress-allure-reporter',
  
    setupNodeEvents(on, config) {
      require('cypress-allure-reporter/plugin')(on);

  
      return config;
    },
  },

});
