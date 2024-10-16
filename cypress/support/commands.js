// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
require('cypress-xpath');
// commands.js
require('chai');  // Make sure chai is required

// If using chai plugins, include them as well
require('chai-dom'); // Example for chai-dom plugin


// cypress/support/commands.js

Cypress.Commands.add('login', () => {
    // Define credentials and base URL inside the custom command
    const loginCredentials = {
      username: 'pasal',  // Replace with actual username
      password: 'st@123'   // Replace with actual password
    };
  
    const baseURL = 'https://qa.st.xgencredit.com';  // Replace with actual base URL
  
    // Visit the base URL
    cy.visit(baseURL);
  
    // Verify the page is loaded
    cy.get('.mui-1tb6yvl').contains('Welcome Back');
  
    // Perform the login using the credentials
    cy.get('#username').type(loginCredentials.username);
    cy.get('#password').type(loginCredentials.password);
  
    // Handle the button click with conditional visibility
    cy.get('.MuiButtonBase-root[tabindex="0"]')
      .click()
      .then($button => {
        if ($button.is(':visible')) {
          cy.wrap($button).click();
          cy.wait(3000);
          cy.xpath('/html/body/main/div/div[2]/div[2]/div/div/div[3]/div/button').click();
        } else {
          cy.log('Button not visible, continuing with the test.');
        }
      });
  });
  


