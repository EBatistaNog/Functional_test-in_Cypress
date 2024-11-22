

//www.test.com/user/addUser

export const addUserScreen = {
    // [1.0] Método de inserção de dados
    insertFistName: (firstName) => {
        cy.get('auth .ft-field-first-name') 
            .type(firstName);
    },
    insertLastName: (lastName) => {
        cy.get('auth .ft-field-last-name')
            .type(lastName);
    },
    insertUserName: (userName) => {
        cy.get('auth .ft-field-username')
            .type(userName);
    },
    insertEmail: (email) => {
        cy.get('auth .ft-field-email')
            .type(email);
    },

    // [2.0] Search
    searchGroup: (group) => {

        cy.get('.input-small')
            .clear()
            .type(group);
    },

    // [3.0] Clicks
    clickButtonAddGroup: () => {
        
        cy.get('auth .ft-btn-add-group')
            .click();
    },
    clickButtonSave: () => {
       
        cy.get('auth .ft-btn-save')
            .click();
        
    },
    clickButtonRefresh: () => {
       
        cy.get('.refresh')
            .click();
      
    },

    // [7.0] Check
    checkAllGroup: () => {
       
        cy.get('.ft-checkbox-all-groups')
            .check();
    },
    checkGroup: () => {
        cy.get('.ft-checkbox-group')
            .check();
    },

    // [8.0] Test
    userCreatedSuccessfullyMessage: () => {  
        cy.get('auth .notification', { timeout: 3000})
            .should('be.visible') 
            .and('contain', 'User created successfully'); 
    }
};
