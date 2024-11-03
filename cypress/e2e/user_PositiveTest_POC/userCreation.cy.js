import { login } from '../../../../../support/commands';
import {   addUserScreen  } from '../../support/actions/user/addUserScreen';

const firstName = 'firstName';
const lastName = 'lastName';
const userName = 'userName';
const group  = 'group';
const email = 'email@sharklasers.com';

describe('Positive test case User Creation', () => {

    
    beforeEach(() => {
        cy.login(); 
   
    });

    it('Create a user successfully', () => {
        addUserScreen.insertFistName(firstName);
        addUserScreen.insertLastName(lastName);
        addUserScreen.insertUserName(userName);
        addUserScreen.insertEmail(email);
        addUserScreen.searchGroup(group);
        addUserScreen.checkGroup();
        addUserScreen.clickButtonAddGroup();
        addUserScreen.clickButtonSave();
        addUserScreen.userCreatedSuccessfullyMessage();
    });

   
});





