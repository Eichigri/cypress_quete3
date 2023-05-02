import { faker } from '@faker-js/faker';
const userName = faker.name.firstName();
const userMail = faker.internet.email();
const userPass = faker.internet.password(8);
let tokenAuth;

describe('tests Api', () => {
        it('Creation du compte', () => {
                cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/register', {name: userName, email: userMail,password: userPass}).then( (response) => {
                        expect(response.status).to.eq(201);
                        cy.log("Compte créé : ",response);
                }
                );
        });
        it('Connexion au compte',() => {
                cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/login', {email: userMail, password: userPass}).then((response) => {
                        expect(response.status).to.eq(200);
                        tokenAuth = response.body.data.token;
                })
        });

        it("Création d'une note Home", () => {
                cy.createNoteHome(tokenAuth,"Nettoyer ma chambre", "Passer l'aspirateur et changer mon lit").then((response) => {
                        expect(response.status).to.eq(200);
                })
        });

        it("Création d'une note Personal", () => {
                cy.createNotePersonal(tokenAuth,"Regarder moins d'infos", "Moins regarder les journeaux tv pour moins déprimer").then((response) => {
                        expect(response.status).to.eq(200);
                })
        });

        it("Création d'une note Work", () => {
                cy.createNoteWork(tokenAuth, "Dire bonjour", "Saluer les collègues pour être plus agréable").then((response) => {
                        expect(response.status).to.eq(200);
                });
        });

        it("Récupérer les notes", () => {
                cy.getAllNotes(tokenAuth).then((response) => 
                expect(response.status).to.eq(200));
        });

        it('Déconnexion du compte',() => {
                cy.request({
                        method:'DELETE',
                        url: 'https://practice.expandtesting.com/notes/api/users/logout',
                        headers: {
                                "x-auth-token": tokenAuth
                        }
                }).then((response) => {
                        expect(response.status).to.eq(200);
                });
        });
});