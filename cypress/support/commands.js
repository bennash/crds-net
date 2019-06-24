/* eslint-disable no-console */
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// import { AddCommand } from 'crds-cypress-tools';
import { Formatter } from './Formatter';

// AddCommand.crdsLogin();

// Cypress.Commands.add('stayLoggedIn', () => {
//   Cypress.Cookies.preserveOnce(`${Cypress.env('CRDS_ENV')}sessionId`, `${Cypress.env('CRDS_ENV')}refreshToken`, 'userId');
// });

Cypress.Commands.add('normalizedText', { prevSubject: 'element' }, (subject) => {
  return cy.wrap(subject).should('have.prop', 'textContent').then(elementText => Formatter.normalizeText(elementText));
});

Cypress.Commands.add('text', { prevSubject: 'element' }, (subject) => {
  return cy.wrap(subject).should('have.prop', 'textContent');
});

//Here for convenience but use sparingly - we usually want these to be thrown
Cypress.Commands.add('ignoreUncaughtException', (expectedMessage) => {
  cy.on('uncaught:exception', (err) => {
    expect(err.message).to.include(expectedMessage);
    return false;
  });
});

//If the shared header is blocking click events, hide it with this
Cypress.Commands.add('hideSharedHeader', () => {
  cy.get('shared-header').as('sharedHeader');
  cy.get('@sharedHeader').invoke('attr', 'class').then(($classValues) => {
    const newClass = `${$classValues} hide`;
    cy.get('@sharedHeader').invoke('attr', 'class', newClass);
  });
});