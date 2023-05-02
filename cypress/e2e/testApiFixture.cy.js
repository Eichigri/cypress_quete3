let tokenAuth;

describe("Tests API avec Fixtures", () => {
        it.skip("Création du compte", () => {
                cy.fixture("dataApi").then( user => {
                        cy.request({
                                method: 'POST',
                                url: 'https://practice.expandtesting.com/notes/api/users/register',
                                body: {
                                        'name': user.username,
                                        'email': user.usermail,
                                        'password': user.userpass
                                }
                        }).then( (response) => {
                                expect(response.status).to.eq(201);
                        }
                        );
                })
        });

        it('Connexion au compte',() => {
                cy.fixture("dataApi").then( user => {
                        cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/login', {email: user.usermail, password: user.userpass}).then((response) => {
                                expect(response.status).to.eq(200);
                                tokenAuth = response.body.data.token;
                        })
                });
               
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