class SearchLocators{
    getSearchField(){
        return cy.get('.mat-form-field-flex', {timeout:20000})
    }
    getIdOnResult(){
        return cy.get('span', {timeout:20000})
    }
    getFirstResult(){
        return cy.get('.mat-card-title.si-card__title.si-state--chiplisted')
    }
    getDetailPageId(){
        return cy.get('[title="Product Code"]')
    }
}
export default SearchLocators;