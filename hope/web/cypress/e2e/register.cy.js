import data from '../fixtures/orphanages.json'

import { generator } from '../support/factory'

    before(() => {
        cy.dropCollection('orphanages')
    })

describe('Cadastro de orfanatos', () => {
    
    it('deve cadastrar um novo orfanato', () => {
       const orphanage = generator()

        cy.gotoCreate(orphanage.position)
        cy.createOrphanage(orphanage)
        cy.popupHaveText('Orfanato cadastrado com sucesso')
    })

    it('não deve cadastrar orfanato quando o nome é duplicado', () => {
        const orphanage = generator()

        cy.postOrphanage(orphanage)

        cy.gotoCreate(orphanage.position)
        cy.createOrphanage(orphanage)
        cy.popupHaveText('Já existe um cadastro com o nome: ' + orphanage.name)
       
    })

    context('Campos obrigatórios' , () => {
        it('não deve cadastrar se o campo nome não for preenchido', () => {

            let orphanage = generator()
    
            delete orphanage.name
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
    
            //label[contains(text(), "Nome")]/..//small
    
            cy.alertHaveText('Nome', 'Campo obrigatório')
            
        })
    
        it('não deve cadastrar se o sobre não for preenchido', () => {
    
            let orphanage = generator()
    
            delete orphanage.description
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
    
            //label[contains(text(), "Nome")]/..//small
    
            cy.alertHaveText('Sobre', 'Campo obrigatório')
            
        })
    
        it('não deve cadastrar se não anexar a imagem', () => {
    
            let orphanage = generator()
    
            delete orphanage.image
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
    
            //label[contains(text(), "Nome")]/..//small
    
            cy.alertHaveText('Fotos' , 'Envie pelo menos uma foto')
    
            
        })
    
        it('não deve cadastrar se o horário de atendimento não for informado', () => {
    
            let orphanage = generator()
    
            delete orphanage.opening_hours
    
            cy.log(JSON.stringify(orphanage))
    
            cy.gotoCreate(orphanage.position)
            cy.createOrphanage(orphanage)
    
            //label[contains(text(), "Nome")]/..//small
    
            cy.alertHaveText('Nome', 'Campo obrigatório')
            cy.alertHaveText('Sobre', 'Campo obrigatório')
            cy.alertHaveText('Fotos' , 'Envie pelo menos uma foto')
            cy.alertHaveText('Horário', 'Campo obrigatório')
            
        })
    
        it('não deve cadastrar se os campos obrigatórios não forem preenchidos', () => {
    })
        let orphanage = generator()

        delete orphanage.name
        delete orphanage.description
        delete orphanage.image
        delete orphanage.opening_hours

        cy.log(JSON.stringify(orphanage))

        cy.gotoCreate(orphanage.position)
        cy.createOrphanage(orphanage)

        //label[contains(text(), "Nome")]/..//small

        cy.alertHaveText('Nome', 'Campo obrigatório')
        cy.alertHaveText('Sobre', 'Campo obrigatório')
        cy.alertHaveText('Fotos' , 'Envie pelo menos uma foto')
        cy.alertHaveText('Horário', 'Campo obrigatório')
        
    })

}) 