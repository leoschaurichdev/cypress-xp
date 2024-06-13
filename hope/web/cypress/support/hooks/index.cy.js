describe('Setup' , () =>{

    before(() => {
        cy.dropCollection('orphanages')
    })

    it('drop sucessfully' , () => {
        cy.log('Drop sucessfully')
    })
})