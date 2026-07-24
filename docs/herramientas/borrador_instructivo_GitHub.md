# Instructivo rapido GitHub

Guia corta para trabajar con Git, GitHub y Pull Requests.

## Conceptos clave

- `git status`: muestra en que rama estas y que archivos cambiaron.
- `git add`: prepara archivos para el commit.
- `git commit`: guarda una foto local de tus cambios.
- `git push`: sube tus commits a GitHub.
- Pull Request: solicitud para que otra persona revise e incorpore tus cambios.

Regla practica:

- Push directo a `develop` cambia una rama compartida.
- Push a una rama propia permite abrir Pull Request con calma.

## Pull Request rapido

Usa esto cuando ya estas en tu rama de trabajo.

```bash
git status
git add archivo-1 archivo-2 archivo-3
git commit -m "mensaje claro del cambio"
git push
```

Luego abre el Pull Request en GitHub.

Si la rama aun no existe en GitHub:

```bash
git push -u origin nombre-de-tu-rama
```

Si trabajas con fork:

```bash
git push -u fork nombre-de-tu-rama
```

## Agregar archivos

Recomendado: agregar archivos especificos.

```bash
git status
git add ruta/del/archivo.py
git add otra/ruta/del/archivo.py
```

Mas rapido, pero con mas cuidado:

```bash
git add .
```

Antes de usar `git add .`, revisa bien `git status` para no subir archivos temporales, logs, caches o cambios no relacionados.

## Actualizar el repo en tu PC

Si estas en la rama que quieres actualizar:

```bash
git pull
```

Para actualizar `develop` explicitamente:

```bash
git switch develop
git pull origin develop
```

## Clonar un repo de GitHub a tu PC

```bash
git clone URL_DEL_REPOSITORIO
cd nombre-del-repositorio
```

Ejemplo:

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
```

## Conectar un repo local a GitHub

Cuando tienes una carpeta local y quieres subirla a GitHub por primera vez:

```bash
git init
git status
git add .
git commit -m "Initial commit"
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

Si tu rama principal se llama `master`:

```bash
git push -u origin master
```

## Flujo recomendado para ARCA

### 1. Partir desde develop actualizado

```bash
git switch develop
git pull origin develop
```

### 2. Crear una rama propia

```bash
git switch -c sebastian/nombre-del-cambio
```

Ejemplo:

```bash
git switch -c sebastian/auto-import
```

Si la rama ya existe, no la crees de nuevo. Solo confirma donde estas:

```bash
git status
```

### 3. Trabajar y revisar cambios

```bash
git status
```

### 4. Agregar archivos especificos

```bash
git add apps/data/transactions/api/views.py
git add apps/data/transactions/tasks.py
git add apps/data/transactions/services/transaction_import_service.py
```

Agrega tambien archivos nuevos si corresponden:

```bash
git add apps/data/transactions/services/vault_archive_transaction_import_service.py
git add apps/data/transactions/tests/test_vault_archive_transaction_import_service.py
```

### 5. Crear commit

```bash
git commit -m "Add Caribe monthly vault auto-import"
```

### 6. Subir rama

Si tienes permisos en el repo principal:

```bash
git push -u origin sebastian/nombre-del-cambio
```

Si no tienes permisos y usas fork:

```bash
git push -u fork sebastian/nombre-del-cambio
```

Si tu rama local se llama distinto y quieres subirla con otro nombre remoto:

```bash
git push -u fork rama-local:nombre-remoto
```

Ejemplo:

```bash
git push -u fork auto-import-clean:sebastian/auto-import-clean
```

### 7. Abrir Pull Request

En GitHub:

1. Entra al repo.
2. Busca el aviso de la rama recien subida.
3. Haz clic en `Compare & pull request`.
4. Base: `develop`.
5. Compare: tu rama.
6. Escribe titulo y descripcion.
7. Crea el Pull Request.

## Caso actual: auto-import Caribe

Rama local actual:

```bash
auto-import-clean
```

Archivos a agregar:

```bash
git add apps/data/transactions/api/views.py
git add apps/data/transactions/services/transaction_import_service.py
git add apps/data/transactions/tasks.py
git add apps/data/transactions/services/vault_archive_transaction_import_service.py
git add apps/data/transactions/tests/test_vault_archive_transaction_import_service.py
```

Commit sugerido:

```bash
git commit -m "Add Caribe monthly vault auto-import"
```

Push simple al fork:

```bash
git push -u fork auto-import-clean
```

Push al fork usando nombre remoto con prefijo:

```bash
git push -u fork auto-import-clean:sebastian/auto-import-clean
```

## Comandos utiles

Ver rama actual y cambios:

```bash
git status
```

Ver ramas locales:

```bash
git branch
```

Cambiar de rama:

```bash
git switch nombre-rama
```

Crear y cambiar a una rama nueva:

```bash
git switch -c nombre-rama
```

Ver remotes:

```bash
git remote -v
```

Ver cambios antes de commitear:

```bash
git diff
```

Ver archivos preparados para commit:

```bash
git diff --staged
```

## Checklist antes del commit

```bash
git status
git diff
git diff --staged
```

Revisa:

- Que no haya archivos temporales.
- Que no haya logs o caches.
- Que no haya cambios no relacionados.
- Que los tests o validaciones posibles hayan sido ejecutados.

