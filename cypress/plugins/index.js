/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
/*const extensionLoader = require('cypress-browser-extension-plugin/loader');
module.exports = (on) => {
   on('before:browser:launch', extensionLoader.load(''));
 }
 
}*/

/*Apagado*/
//module.exports = (on, config) => {
   //on('before:browser:launch', (browser, launchOptions) => {
     // supply the absolute path to an unpacked extension's folder
     // NOTE: extensions cannot be loaded in headless Chrome
     //launchOptions.extensions.push('C:\Users\2105091187\Documents\Cypress_Plugin')
 
    // return launchOptions
  // })
 //}

 const path = require('path')
module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    console.log('launching browser %o', browser)

    // only load React DevTools extension
    // when opening Chrome in interactive mode
    if (browser.family === 'chromium') {
      // we could also restrict the extension
      // to only load when "browser.isHeaded" is true
      const extensionFolder = path.resolve(__dirname, '..', '..', '4.2.1_0')

      console.log('adding React DevTools extension from', extensionFolder)
      launchOptions.args.push(`--load-extension=${extensionFolder}`)

      return launchOptions
    }
  })
}


 

  



