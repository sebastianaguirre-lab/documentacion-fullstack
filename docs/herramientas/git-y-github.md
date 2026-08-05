# Instructivo rápido de Git y GitHub

Guía práctica para trabajar con Git, GitHub y Pull Requests. El objetivo es seguir siempre el mismo flujo de trabajo y dejar los casos especiales para el final.

## Contenidos

1. [Conceptos clave](#1-conceptos-clave)
2. [Flujo de trabajo diario](#2-flujo-de-trabajo-diario)
3. [Continuar una rama existente](#3-continuar-una-rama-existente)
4. [Pull Request en GitHub](#4-pull-request-en-github)
5. [Operaciones iniciales](#5-operaciones-iniciales)
6. [Casos especiales](#6-casos-especiales)
7. [Flujo específico de ARCA](#7-flujo-especifico-de-arca)
8. [Caso práctico: Auto-import Caribe](#8-caso-practico-auto-import-caribe)
9. [Referencia rápida](#9-referencia-rapida)

---

## 1. Conceptos clave

- **Repositorio:** proyecto versionado.
- **Rama:** línea de desarrollo independiente.
- **Commit:** fotografía local de los cambios.
- **Push:** envío de commits a GitHub.
- **Pull Request:** solicitud para integrar una rama en otra.

```text
develop
   │
git switch -c mi-rama
   │
Editar → add → commit → push
   │
Pull Request
   │
develop
```

---

## 2. Flujo de trabajo diario ⭐

### Crear una tarea nueva

```bash
git status
git switch develop
git pull --ff-only origin develop
git switch -c nombre-del-cambio
```

### Levantar el proyecto (ARCA)

Backend:

```bash
docker compose up -d
```

Frontend:

```bash
cd frontend
pnpm dev
```

Si no usas pnpm:

```bash
npm run dev
```

!!! warning "Validación del entorno completo"
    Usa `docker compose --profile full-stack up -d --build` solo para validar el entorno completo. No lo ejecutes al mismo tiempo que `pnpm dev` o `npm run dev`.

### Antes del commit

```bash
git status
git diff
```

### Guardar cambios

```bash
git add archivo1 archivo2
git diff --staged
git commit -m "mensaje claro"
```

### Publicar

Primera vez:

```bash
git push -u origin nombre-del-cambio
```

Siguientes veces:

```bash
git push
```

!!! success "Siguiente paso"
    Finalmente abre un Pull Request hacia `develop`.

---

## 3. Continuar una rama existente

```bash
git switch nombre-del-cambio
git fetch origin
git merge origin/develop
```

Si existen conflictos:

```bash
git merge --abort
```

---

## 4. Pull Request en GitHub

1. Abrir GitHub.
2. `Compare & pull request`.
3. Base: `develop`.
4. Compare: tu rama.
5. Escribir título y descripción.
6. Crear Pull Request.

---

## 5. Operaciones iniciales

### Clonar un repositorio

```bash
git clone URL_DEL_REPOSITORIO
cd nombre-del-repositorio
```

### Conectar un proyecto nuevo

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

### Cambiar de main a develop

```bash
git fetch origin
git switch --track origin/develop
```

---

## 6. Casos especiales

### Trabajar con un fork

```bash
git push -u fork nombre-rama
```

### Publicar con otro nombre remoto

```bash
git push -u fork rama-local:nombre-remoto
```

### Ver remotos

```bash
git remote -v
```

---

## 7. Flujo específico de ARCA

- Siempre partir desde `develop`.
- Crear una rama por tarea.
- Trabajar con Docker para el backend.
- Usar `pnpm dev` (o `npm run dev`) durante el desarrollo.
- Reservar `full-stack` para validaciones similares a producción.

---

## 8. Caso práctico: Auto-import Caribe

Rama:

```bash
auto-import-clean
```

Archivos:

```bash
git add apps/data/transactions/api/views.py
git add apps/data/transactions/tasks.py
git add apps/data/transactions/services/transaction_import_service.py
git add apps/data/transactions/services/vault_archive_transaction_import_service.py
git add apps/data/transactions/tests/test_vault_archive_transaction_import_service.py
```

Commit:

```bash
git commit -m "Add Caribe monthly vault auto-import"
```

Push:

```bash
git push -u fork auto-import-clean:sebastian/auto-import-clean
```

---

## 9. Referencia rápida

### Comandos frecuentes

| Acción | Comando |
|--------|---------|
| Estado | `git status` |
| Cambiar rama | `git switch nombre-rama` |
| Nueva rama | `git switch -c nombre-rama` |
| Ver ramas | `git branch` |
| Ver remotos | `git remote -v` |
| Ver diferencias | `git diff` |
| Ver cambios preparados | `git diff --staged` |

### Checklist antes del commit

- ☐ `git status`
- ☐ `git diff`
- ☐ `git diff --staged`
- ☐ Sin archivos temporales
- ☐ Commit con mensaje claro
- ☐ Validaciones o tests ejecutados
