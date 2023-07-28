import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import SearchLocators from "../../PageObjects/SearchLocators";
const searchLocators = new SearchLocators();
Given('the user has navigated to the URL {string}', (url) => {
    cy.visit(url);
});
When('the user searches for {string}', (ID) => {
    searchLocators.getSearchField().type(ID).type('{enter}');
});
And('the user clicks on the first result', () => {
    searchLocators.getFirstResult().click();
});
Then('the id {string} is present under the title', (ID) => {
    searchLocators.getDetailPageId().should('have.text', ID);
});