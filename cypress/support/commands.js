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

//Commande pour créer une note Home :
Cypress.Commands.add('createNoteHome', (token, title, text) => {
        cy.request({
                method:'POST',
                url: 'https://practice.expandtesting.com/notes/api/notes',
                headers: {
                        "x-auth-token": token
                },
                body: {
                        "title": title,
                        "description": text,
                        "category": "Home"
                }
        });
});

//Commande pour créer une note Personal :
Cypress.Commands.add('createNotePersonal', (token, title, text) => {
        cy.request({
                method:'POST',
                url: 'https://practice.expandtesting.com/notes/api/notes',
                headers: {
                        "x-auth-token": token
                },
                body: {
                        "title": title,
                        "description": text,
                        "category": "Personal"
                }
        });
});

//Commande pour créer une note Work :
Cypress.Commands.add('createNoteWork', (token, title, text) => {
        cy.request({
                method:'POST',
                url: 'https://practice.expandtesting.com/notes/api/notes',
                headers: {
                        "x-auth-token": token
                },
                body: {
                        "title": title,
                        "description": text,
                        "category": "Work"
                }
        });
});

//Commande pour récupérer les notes :
Cypress.Commands.add('getAllNotes', (token) => {
        cy.request({
                method:'GET',
                url: 'https://practice.expandtesting.com/notes/api/notes',
                headers: {
                        "x-auth-token": token
                }
        })
});