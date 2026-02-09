// ***********************************************
// Comandos personalizados de Cypress para Melting Point
// ***********************************************

/**
 * Comando para hacer una predicción de SMILES
 * @example cy.predictSmiles('CCO')
 */
Cypress.Commands.add('predictSmiles', (smiles) => {
  cy.get('input[placeholder*="SMILES"], input[type="text"]').first()
    .clear()
    .type(smiles)
  
  cy.contains(/predecir|predict|calcular/i).click()
})

/**
 * Comando para limpiar el formulario
 * @example cy.clearForm()
 */
Cypress.Commands.add('clearForm', () => {
  cy.get('button').contains(/limpiar|clear|reset/i).click()
})

/**
 * Comando para verificar que el backend esté disponible
 * @example cy.checkBackendHealth()
 */
Cypress.Commands.add('checkBackendHealth', () => {
  return cy.request({
    url: 'http://localhost:8000/health',
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.status).to.eq('ok')
  })
})
