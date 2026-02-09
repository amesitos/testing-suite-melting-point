// ***********************************************************
// Archivo de soporte principal de Cypress para Melting Point
// Este archivo se ejecuta antes de cada spec file
// ***********************************************************

// Importar comandos personalizados
import './commands'

// Configuración global
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevenir que Cypress falle en errores no capturados de Next.js
  // Retornar false solo para errores conocidos de hidratación de React
  if (err.message.includes('Hydration') || err.message.includes('hydrating')) {
    return false
  }
  // Permitir que otros errores fallen las pruebas
  return true
})

// Opcional: Configurar viewport por defecto
beforeEach(() => {
  // Puedes agregar configuración global aquí si es necesario
})
