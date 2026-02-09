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
npx cypress run
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
npx cypress open
```

Esto permite:
- ✅ Ver las pruebas en tiempo real
- ✅ Inspeccionar el DOM en cada paso
- ✅ Time-travel debugging
- ✅ Ver snapshots de cada acción

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
    video: false,  // Cambiar a true para grabar videos
  }
}
```

---

## ✅ Checklist Pre-Pruebas

Antes de ejecutar las pruebas, verifica:

- [ ] Backend corriendo en `http://localhost:8000`
- [ ] Frontend corriendo en `http://localhost:3000`
- [ ] Base de datos accesible (Supabase)
- [ ] Modelos ML cargados
- [ ] Cypress instalado (`npm install --save-dev cypress`)
- [ ] Usuario de prueba creado en Supabase

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
✅ **Solución:** Verifica que el backend responda rápido
```powershell
curl http://localhost:8000/health
```

### Cannot find spec file
✅ **Solución:** Ejecuta desde la carpeta del proyecto
```powershell
cd C:\Users\Lottie\melting-point\Melting-Point-Presentation
npx cypress open
```

### Error en login de usuario
✅ **Solución:** Verifica que el usuario de prueba exista en Supabase y las credenciales sean correctas

---

## 📝 Estructura del Proyecto

```
Melting-Point-Presentation/
├── cypress/
│   ├── e2e/
│   │   └── melting-point.cy.js      ← Archivo principal (10 pruebas E2E)
│   ├── support/
│   │   └── commands.js               ← Comandos personalizados
│   └── README.md                     ← Esta guía
├── cypress.config.js                 ← Configuración de Cypress
└── package.json                      ← Scripts npm
```

---

## 🎯 Cobertura de Pruebas

### Autenticación (30%)
- ✅ Login con credenciales válidas
- ✅ Logout de sesión
- ✅ Redirección después de login

### Funcionalidad (30%)
- ✅ Predicción de puntos de fusión
- ✅ Agregar compuestos personalizados
- ✅ Editar perfil de usuario

### Navegación (20%)
- ✅ Navegación entre páginas
- ✅ Enlaces externos (Kaggle)
- ✅ Validación de rutas

### Performance (10%)
- ✅ Tiempo de carga < 5s en todas las páginas

### UI/UX (10%)
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Visualización correcta de contenido

---

## 🎓 Recursos Adicionales

- [Documentación oficial de Cypress](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [API Reference](https://docs.cypress.io/api/table-of-contents)
- [Ejemplos de tests](https://github.com/cypress-io/cypress-example-recipes)

---

**Creado para:** Melting Point Prediction System  
**Fecha:** Febrero 2026  
**Versión:** 2.0 - Actualizado con pruebas E2E completas
