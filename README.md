# Test Suite - Melting Point

Suite de pruebas automatizadas para la aplicación de predicción de puntos de fusión. Este conjunto incluye pruebas de API, End-to-End y de navegación web utilizando múltiples herramientas de testing.

## 📋 Descripción General

Este repositorio contiene pruebas automatizadas para validar el funcionamiento completo del sistema Melting Point, que predice puntos de fusión de compuestos químicos basándose en notación SMILES.

### Herramientas Utilizadas

- **Cypress**: Pruebas End-to-End (E2E)
- **Postman**: Pruebas de API REST
- **Katalon**: Pruebas de navegación web grabadas

## 🗂️ Estructura del Proyecto

```
test-suite-melting-point/
│
├── Cypress/                 # Pruebas E2E con Cypress
│   ├── cypress.config.js    # Configuración de Cypress
│   └── cypress/
│       ├── e2e/
│       │   └── melting-point.cy.js  # Suite principal E2E
│       └── support/         # Comandos y configuraciones
│
├── Postman/                 # Colecciones de pruebas API
│   └── Melting Point API - Test Suite.postman_collection.json
│
└── Katalon/                 # Grabaciones de navegación
    ├── NavegaciNEntrePGinas.json
    ├── EntrarYRedirigirALaCompetenciaKaggle.json
    └── BSquedaDePrediccionesYAnalTicasPorTrainTestYUser.json
```

## 🚀 Requisitos Previos

### Aplicación en Ejecución

Antes de ejecutar las pruebas, asegúrate de tener los siguientes servicios corriendo:

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:8000`

### Software Necesario

- **Node.js** (v14 o superior)
- **npm** o **yarn**
- **Postman** (para pruebas de API)
- **Katalon Recorder** (extensión de navegador, para ejecutar pruebas Katalon)

## 📦 Instalación

### Cypress

```bash
cd Cypress
npm install
```

## ▶️ Ejecución de Pruebas

### 🔵 Cypress - Pruebas E2E

#### Modo Interactivo (recomendado para desarrollo)
```bash
cd Cypress
npx cypress open
```

#### Modo Headless (para CI/CD)
```bash
cd Cypress
npx cypress run
```

#### Ejecutar un archivo específico
```bash
cd Cypress
npx cypress run --spec cypress/e2e/melting-point.cy.js
```

### 📮 Postman - Pruebas de API

1. Abre Postman
2. Importa la colección desde `Postman/Melting Point API - Test Suite.postman_collection.json`
3. Ejecuta la colección completa usando Collection Runner
4. O ejecuta requests individuales manualmente

#### Usando Newman (CLI de Postman)
```bash
npm install -g newman
newman run "Postman/Melting Point API - Test Suite.postman_collection.json"
```

### 🟣 Katalon - Pruebas de Navegación

1. Instala **Katalon Recorder** como extensión en tu navegador
2. Abre la extensión Katalon Recorder
3. Importa los archivos JSON desde la carpeta `Katalon/`
4. Ejecuta las pruebas desde la interfaz de Katalon Recorder

## 📊 Cobertura de Pruebas

### Cypress E2E

La suite de Cypress incluye las siguientes categorías de pruebas:

1. **Carga de Página Principal**
   - Verificación de carga correcta de la aplicación

2. **Navegación entre Páginas**
   - Analytics
   - Acerca de
   - Predicciones

3. **Autenticación de Usuario**
   - Login con credenciales válidas
   - Verificación de perfil de usuario

4. **Funcionalidad de Predicción**
   - Predicción con SMILES válidos
   - Manejo de SMILES inválidos
   - Validación de resultados

5. **Analytics y Visualización**
   - Verificación de estadísticas
   - Análisis por método (Train/Test)
   - Análisis por usuario

6. **Integración con Kaggle**
   - Redirección a competencia de Kaggle

### Postman API

Las pruebas de API cubren:

- Verificación de información del API (Root)
- Endpoints de predicción
- Validación de respuestas
- Verificación de estructura de datos
- Pruebas de rendimiento

### Katalon

Las pruebas grabadas de Katalon incluyen:

- Navegación entre páginas
- Búsqueda de predicciones por Train/Test y usuario
- Flujo de redirección a Kaggle

## 🛠️ Configuración

### Cypress Configuration

El archivo `cypress.config.js` incluye:

- **Base URL**: `http://localhost:3000`
- **Viewport**: 1280x720
- **Timeouts**: 10 segundos
- **Reintentos**: 2 en modo headless, 0 en modo interactivo
- **Screenshots**: Activados en caso de fallo

### Variables de Entorno

Para pruebas con usuarios reales, puedes configurar variables de entorno:

```javascript
// En cypress.config.js
env: {
  TEST_USER_EMAIL: 'tu-email@ejemplo.com',
  TEST_USER_PASSWORD: 'tu-password'
}
```

## 📝 Mejores Prácticas

1. **Antes de ejecutar pruebas**:
   - Asegúrate de que frontend y backend estén corriendo
   - Verifica que la base de datos esté accesible
   - Limpia el estado de la aplicación si es necesario

2. **Durante el desarrollo**:
   - Usa Cypress en modo interactivo para debugging
   - Revisa los screenshots en caso de fallos
   - Mantén los datos de prueba actualizados

3. **Para CI/CD**:
   - Ejecuta Cypress en modo headless
   - Usa Newman para pruebas de API automatizadas
   - Configura reintentos para pruebas flaky

## 🐛 Troubleshooting

### Los servicios no están disponibles
```
Error: connect ECONNREFUSED 127.0.0.1:3000
```
**Solución**: Verifica que frontend y backend estén corriendo

### Timeouts en pruebas
**Solución**: Aumenta los timeouts en `cypress.config.js` o verifica el rendimiento del servidor

### Pruebas de autenticación fallan
**Solución**: Verifica que las credenciales de prueba sean válidas y que el usuario exista en la base de datos

## 📄 Licencia

Este proyecto es parte del sistema Melting Point desarrollado por el equipo de QA Automation.

