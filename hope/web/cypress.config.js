// const { defineConfig } = require("cypress");
// const { configurePlugin } = require ('cypress-mongodb');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       configurePlugin(on);
     
//       },
//     env: {  
//       mongodb: {
//         uri: 'mongodb+srv://qax:xperience@cluster0.k1pegro.mongodb.net/HopeDB?retryWrites=true&w=majority&appName=Cluster0',
//         database: 'HopeDB'
//       }
//       }

//     }
   
// });
require('dotenv').config()

const { defineConfig } = require("cypress");
const { configurePlugin } = require('cypress-mongodb');

const { configureAllureAdapterPlugins } = require ('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      configurePlugin(on);
      
      return config;
    },
    specPattern:[
      './cypress/support/hooks/index.cy.js',
      './cypress/e2e/**'
    ],
  baseUrl: process.env.BASE_URL,
  env: {
    allure: true,
    baseApi:process.env.BASE_API,
    mongodb: {
      uri: process.env.MONGO.URI,
      database: process.env.DATABASE_NAME,
            }
        }
    }
  
});