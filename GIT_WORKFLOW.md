# Guía de Flujo de Trabajo con Git — Grupo Andrey, Felipe y Neita

## Estructura de Ramas

```
main / master   ← producción (no tocar directamente)
  └── dev       ← desarrollo / integración
       ├── feature/neita   ← rama de pruebas de Neita
       ├── feature/andrey  ← rama de pruebas de Andrey
       └── feature/felipe  ← rama de pruebas de Felipe
```

> Todas las ramas personales **siempre** se crean desde `dev`.

---

## 1. Crear tu rama personal desde `dev`

```bash
# Asegúrate de estar en dev y actualizado
git checkout dev
git pull origin dev

# Crea tu rama (reemplaza <nombre> con tu nombre)
git checkout -b feature/<nombre>
# Ejemplo: git checkout -b feature/andrey
```

---

## 2. Crear tu archivo HTML de prueba

Crea un archivo en `src/pruebas/<tu-nombre>.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba - Tu Nombre</title>
</head>
<body>
    <h1>Hola mundo — Tu Nombre</h1>
</body>
</html>
```

---

## 3. Guardar cambios (add + commit + push)

```bash
# Ver qué archivos cambiaron
git status

# Agregar archivos al staging
git add src/pruebas/<tu-nombre>.html

# Hacer commit con un mensaje descriptivo
git commit -m "feat: agregar archivo de prueba de <tu-nombre>"

# Subir tu rama al repositorio remoto
git push origin feature/<nombre>
```

---

## 4. Deshacer cambios

### Descartar cambios locales (aún NO has hecho commit)

```bash
# Descartar cambios en un archivo específico
git restore src/pruebas/<tu-nombre>.html

# Descartar TODOS los cambios no guardados
git restore .
```

### Quitar un archivo del staging (después de `git add`, antes de commit)

```bash
git restore --staged src/pruebas/<tu-nombre>.html
```

### Deshacer el último commit (manteniendo los cambios en tus archivos)

```bash
git reset --soft HEAD~1
```

### Deshacer el último commit (descartando los cambios por completo)

```bash
git reset --hard HEAD~1
```

### Revertir un commit ya subido al remoto (crea un commit inverso)

```bash
git revert HEAD
```

---

## 5. Sincronizar tu rama con `dev`

Es importante mantener tu rama actualizada con los cambios de `dev`:

```bash
# Desde tu rama personal
git checkout feature/<nombre>

# Traer los últimos cambios de dev
git pull origin dev

# Resolver conflictos si los hay, luego:
git add .
git commit -m "merge: sincronizar con dev"
```

**Alternativa con rebase** (historial más limpio):

```bash
git checkout feature/<nombre>
git fetch origin
git rebase origin/dev

# Si hay conflictos, resolverlos y continuar:
git add .
git rebase --continue
```

---

## 6. Integrar tu trabajo a `dev` (Pull Request)

1. Sube tu rama: `git push origin feature/<nombre>`
2. Ve a GitHub → repositorio → **Pull Requests** → **New Pull Request**
3. Base: `dev` ← Compare: `feature/<nombre>`
4. Escribe una descripción de tus cambios
5. Solicita revisión de un compañero
6. Una vez aprobado, haz **Merge**

---

## Comandos de referencia rápida

| Acción | Comando |
|---|---|
| Ver rama actual | `git branch` |
| Cambiar de rama | `git checkout <rama>` |
| Ver estado de archivos | `git status` |
| Ver historial de commits | `git log --oneline -10` |
| Ver diferencias | `git diff` |
| Traer cambios remotos sin merge | `git fetch origin` |
| Clonar el repositorio | `git clone <url-del-repo>` |
