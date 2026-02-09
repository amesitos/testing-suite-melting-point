# Guía de Pruebas E2E con Cypress - Melting Point

## 🚀 Inicio Rápido

### Paso 1: Instalar Cypress (si no está instalado)

```powershell
npm install --save-dev cypress
```

### Paso 2: Iniciar el Backend y Frontend

**Terminal 1 - Backend:**
```powershell
cd C:\Users\Lottie\melting-point\Melting-Point\backend
uvicorn app.main:app --reload --port 8000
```

**Terminal 2 - Frontend:**
```powershell
cd C:\Users\Lottie\melting-point\Melting-Point-Presentation
npm run dev
```

### Paso 3: Ejecutar Cypress

**Modo Interactivo (Recomendado para desarrollo):**
```powershell
npx cypress open
```

**Modo Headless (Para CI/CD):**
```powershell
npx cypress run
```

---

## 📋 Suite de Pruebas E2E

### Archivo único: `melting-point.cy.js`

Contiene **10 pruebas E2E completas** que validan la interfaz web del sistema:

| # | Escenario de Prueba | Tipo | Descripción |
|---|---------------------|------|-------------|
| **1** | Carga de Página Principal | Funcional | Verifica que la home page cargue correctamente con contenido visible |
| **2** | Navegación entre Páginas | Navegación | Valida navegación a Analytics, About y Predictions |
| **3** | Login de Usuario | Autenticación | Prueba login exitoso con credenciales válidas y redirección |
| **4** | Predicción con SMILES Válido | Funcional | Verifica predicciones con Benzamida y Anilina |
| **5** | Agregar Compuesto Nuevo | Mantenimiento | Permite agregar compuestos personalizados (Acetaminofén) |
| **6** | Editar Perfil de Usuario | Funcional | Actualiza biografía del perfil de usuario |
| **7** | Cerrar Sesión (Logout) | Autenticación | Verifica logout exitoso y redirección |
| **8** | Rendimiento de Carga | Performance | Valida tiempos de carga < 5s en todas las páginas |
| **9** | Enlace a Competencia Kaggle | UI | Verifica enlace externo a Kaggle en navbar |
| **10** | Diseño Responsive | UI | Valida visualización en móvil (iPhone X), tablet (iPad) y desktop |

---

## 🎯 Datos de Prueba

### Usuario de Prueba:
- **Email:** `acain2387@cristorey.edu.ec`
- **Password:** `Toyfoxica@123`

### SMILES Válidos:
- **Etanol:** `CCO`
- **Benceno:** `c1ccccc1`
- **Ácido Acético:** `CC(=O)O`
- **Agua:** `O`
- **Benzamida:** `O=C(N)c1ccccc1`
- **Anilina:** `Nc1ccccc1`
- **Acetaminofén:** `CC(=O)Nc1ccc(cc1)O`

---

## 🛠️ Comandos Útiles

### Ejecutar todas las pruebas
```powershell
npm run test:e2e
```

### Ejecutar con navegador específico
```powershell
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

### Ejecutar en modo interactivo (recomendado)
```powershell
npx cypress open
```

### Generar videos
```powershell
npx cypress run --config video=true
```

---

## 🔍 Debugging

### Abrir Cypress Test Runner
```powershell
npm run cypress
```

Permite:
- ✅ Ver las pruebas en tiempo real
- ✅ Inspeccionar el DOM en cada paso
- ✅ Time-travel debugging
- ✅ Ver snapshots de cada acción

### Ver logs
```javascript
cy.log('Mi mensaje de debug')
console.log('También funciona')
```

---

## 📊 Ejecutar y Ver Resultados

```powershell
# Ejecutar todo en headless
npm run test:e2e

# Ver reportes
# Los videos y screenshots se guardan en:
# - cypress/videos/
# - cypress/screenshots/
```

---

## ✅ Checklist Pre-Pruebas

Antes de ejecutar las pruebas, verifica:

- [ ] Backend corriendo en `http://localhost:8000`
- [ ] Frontend corriendo en `http://localhost:3000`
- [ ] Modelos ML cargados
- [ ] Cypress instalado (`npm install --save-dev cypress`)

### Verificación rápida:
```powershell
# Desde PowerShell
curl http://localhost:8000/health
curl http://localhost:3000
```

Si ambos responden, estás listo para ejecutar las pruebas.

---

## 🐛 Solución de Problemas Comunes

### Error: "baseUrl not responding"
✅ **Solución:** Verifica que el frontend esté corriendo
```powershell
cd C:\Users\Lottie\melting-point\Melting-Point-Presentation
npm run dev
```

### Tests fallan con timeout
✅ **Solución:** El backend puede estar lento. Verifica que esté corriendo:
```powershell
curl http://localhost:8000/health
```

### Cannot find spec file
✅ **Solución:** Ejecuta desde la carpeta del proyecto:
```powershell
cd C:\Users\Lottie\melting-point\Melting-Point-Presentation
npx cypress open
```

---

## 📝 Estructura del Proyecto

```
Melting-Point-Presentation/
├── cypress/
│   ├── e2e/
│   │   └── melting-point.cy.js      ← Archivo principal (10 pruebas)
│   ├── support/
│   │   └── commands.js               ← Comandos personalizados
│   └── README.md                     ← Esta guía
├── cypress.config.js                 ← Configuración
└── package.json                      ← Scripts npm
```

---

## 🎓 Recursos Adicionales

- [Documentación oficial de Cypress](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [API Reference](https://docs.cypress.io/api/table-of-contents)

---

**Creado para:** Melting Point Prediction System  
**Fecha:** Febrero 2026  
**Versión:** 2.0 (Simplificada)

---

## 🎯 Cobertura de Pruebas

### Funcionalidad (40%)
- ✅ Formulario de predicción
- ✅ Validación de SMILES
- ✅ Visualización de resultados
- ✅ Navegación

### Performance (20%)
- ✅ Tiempo de carga < 3s
- ✅ Respuesta de API < 2s
- ✅ Optimización de recursos

### UI/UX (20%)
- ✅ Interacciones del DOM
- ✅ Estados hover/focus
- ✅ Feedback visual
- ✅ Responsive design

### Manejo de Errores (20%)
- ✅ Errores 400, 404, 500
- ✅ Network errors
- ✅ Timeout
- ✅ Validación

---

## 🛠️ Comandos Útiles

### Ejecutar una prueba específica
```powershell
npx cypress run --spec "cypress/e2e/01-home-page.cy.js"
```

### Ejecutar con navegador específico
```powershell
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

### Generar videos y screenshots
```powershell
npx cypress run --config video=true
```

### Ver reportes
Los videos y screenshots se guardan en:
- `cypress/videos/`
- `cypress/screenshots/`

---

## 🔍 Debugging

### Abrir Cypress Test Runner
```powershell
npm run cypress
```

Esto abre una interfaz gráfica donde puedes:
- Ver las pruebas en tiempo real
- Inspeccionar el DOM
- Ver snapshots de cada paso
- Debuggear con DevTools

### Agregar breakpoints
```javascript
cy.get('input').then(($input) => {
  debugger  // Pausa la ejecución aquí
})
```

### Ver logs en consola
```javascript
cy.log('Mi mensaje de debug')
console.log('También funciona')
```

---

## ⚙️ Configuración

Editar `cypress.config.js` para cambiar:

```javascript
{
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    video: false,  // Cambiar a true para grabar
  }
}
```

---

## 📊 Ejecutar Todas las Pruebas y Ver Resultados

```powershell
# Ejecutar todo
npm run test:e2e

# Ver resumen
npx cypress run --reporter json --reporter-options output=results.json
```

---

## ✅ Checklist Pre-Pruebas

Antes de ejecutar las pruebas, verifica:

- [ ] Backend corriendo en `http://localhost:8000`
- [ ] Frontend corriendo en `http://localhost:3000`
- [ ] Base de datos accesible (Supabase)
- [ ] Modelos ML cargados
- [ ] Cypress instalado

### Verificación rápida:
```powershell
# Desde PowerShell
curl http://localhost:8000/health
curl http://localhost:3000
```

---

## 🐛 Solución de Problemas Comunes

### Error: "Cypress cannot find your spec file"
- Verifica que estés en la carpeta correcta
- Ejecuta: `npx cypress verify`

### Error: "baseUrl not responding"
- Verifica que el frontend esté corriendo: `npm run dev`
- Prueba abrir manualmente: `http://localhost:3000`

### Tests fallan con timeout
- Aumenta el timeout en `cypress.config.js`
- Verifica que el backend responda rápido

### No se muestran resultados
- Verifica que el backend esté disponible
- Revisa la consola del navegador en Cypress UI

---

## 📝 Notas Importantes

1. **No ejecutes Cypress si el frontend/backend no están corriendo**
2. **Las pruebas usan interceptors para mockear respuestas** - esto es normal
3. **Los tests son independientes** - cada uno limpia su estado
4. **Puedes ejecutar tests en paralelo** si tienes licencia comercial

---

## 🎓 Recursos

- [Documentación oficial de Cypress](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Ejemplos de tests](https://github.com/cypress-io/cypress-example-recipes)

---

**Creado para:** Melting Point Prediction System  
**Fecha:** Febrero 2026  
**Autor:** Lottie
