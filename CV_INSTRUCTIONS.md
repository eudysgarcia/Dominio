# 📄 Instrucciones para CV Bilingüe

## 🌐 Sistema de CV Multi-idioma Implementado

Tu portafolio ahora cambia automáticamente el enlace del CV según el idioma seleccionado.

### ✅ Ya Configurado:

**Español (ES):**
- Enlace actual: `https://drive.google.com/file/d/1XiTlMT6ivNmmfX4Q2OhIDBQS9Y9oXp_O/view?usp=drive_link`

**Inglés (EN):**
- Enlace actual: `https://drive.google.com/file/d/1XiTlMT6ivNmmfX4Q2OhIDBQS9Y9oXp_O/view?usp=drive_link`
- ⚠️ **ACCIÓN REQUERIDA**: Necesitas subir tu CV en inglés a Google Drive

### 📝 Cómo Agregar el CV en Inglés:

1. **Crea tu CV en inglés**
   - Traduce todo el contenido de tu CV actual
   - Guárdalo como PDF

2. **Sube a Google Drive**
   - Ve a Google Drive
   - Sube tu CV en inglés
   - Haz clic derecho → "Obtener enlace"
   - Cambia a "Cualquier persona con el enlace puede ver"
   - Copia el enlace

3. **Actualiza el archivo `data.tsx`**
   - Busca la sección `cvLinks` en `personalInfo`
   - Reemplaza el enlace `en` con tu nuevo enlace

```typescript
cvLinks: {
    es: "https://drive.google.com/file/d/1XiTlMT6ivNmmfX4Q2OhIDBQS9Y9oXp_O/view?usp=drive_link",
    en: "TU_NUEVO_ENLACE_AQUI"  // ← Actualiza esto
}
```

### 🎯 Ubicaciones donde se usa:

El enlace del CV se muestra en:
1. **Página de inicio** - Botón "Ver CV" / "View CV"
2. **Sección "Sobre Mí"** - Botón "Ver CV Completo" / "View Full CV"

### ✨ Cómo Funciona:

Cuando el usuario cambia el idioma:
- 🇪🇸 **Español** → Muestra el CV en español
- 🇬🇧 **Inglés** → Muestra el CV en inglés

Todo es automático, solo necesitas agregar el enlace del CV en inglés.

---

**¿Necesitas ayuda con la traducción?** Usa herramientas como DeepL o Google Translate para traducir tu CV al inglés de manera profesional.
