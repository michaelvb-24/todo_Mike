const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jj19ad",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});