# Instructivo rápido de Git y GitHub

Guía corta para trabajar con Git, GitHub y Pull Requests. Está pensada como una referencia práctica para consultar comandos y flujos de trabajo durante el día a día.

## Contenidos

- [Conceptos clave](#conceptos-clave)
- [Pull Request rápido](#pull-request-rapido)
- [Agregar archivos](#agregar-archivos)
- [Actualizar el repositorio en tu PC](#actualizar-el-repositorio-en-tu-pc)
- [Clonar un repositorio de GitHub](#clonar-un-repositorio-de-github-a-tu-pc)
- [Conectar un repositorio local a GitHub](#conectar-un-repositorio-local-a-github)
- [Flujo recomendado para ARCA](#flujo-recomendado-para-arca)
- [Caso actual: auto-import Caribe](#caso-actual-auto-import-caribe)
- [Comandos útiles](#comandos-utiles)
- [Checklist antes del commit](#checklist-antes-del-commit)

!!! tip "Uso rápido"
    Si ya estás trabajando en una rama propia, puedes ir directamente a [Pull Request rápido](#pull-request-rapido). Para iniciar una tarea desde `develop`, consulta el [flujo recomendado para ARCA](#flujo-recomendado-para-arca).


## Conceptos clave

- `git status`: muestra en qué rama estás y qué archivos cambiaron.
- `git add`: prepara archivos para el commit.
- `git commit`: guarda una foto local de tus cambios.
- `git push`: sube tus commits a GitHub.
- Pull Request: solicitud para que otra persona revise e incorpore tus cambios.

!!! warning "Ramas compartidas"
    - Un *push* directo a `develop` cambia una rama compartida.
    - Un *push* a una rama propia permite abrir un Pull Request con calma.

## Pull Request rápido

Usa esto cuando ya estás en tu rama de trabajo.

```bash
git status
git add archivo-1 archivo-2 archivo-3
git commit -m "mensaje claro del cambio"
git push
```

Luego abre el Pull Request en GitHub.

Si la rama aún no existe en GitHub:

```bash
git push -u origin nombre-de-tu-rama
```

La opción `-u` vincula la rama local con la rama remota. Después de este primer envío normalmente bastará con ejecutar `git push`.

Si trabajas con fork:

```bash
git push -u fork nombre-de-tu-rama
```

En estos ejemplos, `origin` representa el repositorio principal y `fork` el remoto configurado para tu copia personal. Confirma los nombres disponibles con `git remote -v`.

## Agregar archivos

Recomendado: agregar archivos específicos.

```bash
git status
git add ruta/del/archivo.py
git add otra/ruta/del/archivo.py
```

Más rápido, pero con más cuidado:

```bash
git add .
```

!!! warning "Revisa antes de agregar todo"
    Antes de usar `git add .`, revisa bien `git status` para no subir archivos temporales, logs, cachés o cambios no relacionados.

## Actualizar el repositorio en tu PC

Si estás en la rama que quieres actualizar:

```bash
git pull
```

Para actualizar `develop` explícitamente:

```bash
git switch develop
git pull origin develop
```

## Clonar un repositorio de GitHub a tu PC

```bash
git clone URL_DEL_REPOSITORIO
cd nombre-del-repositorio
```

Ejemplo:

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
```

## Conectar un repositorio local a GitHub

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

!!! note
    Usa `main` o `master` según el nombre real de la rama principal del repositorio. Puedes comprobarlo con `git branch`.

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

Si la rama ya existe, no la crees de nuevo. Solo confirma dónde estás:

```bash
git status
```

### 3. Trabajar y revisar cambios

```bash
git status
```

### 4. Agregar archivos específicos

```bash
git add apps/data/transactions/api/views.py
git add apps/data/transactions/tasks.py
git add apps/data/transactions/services/transaction_import_service.py
```

Agrega también archivos nuevos si corresponden:

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

La sintaxis `rama-local:nombre-remoto` indica explícitamente qué rama local se envía y con qué nombre quedará publicada en el remoto.

Ejemplo:

```bash
git push -u fork auto-import-clean:sebastian/auto-import-clean
```

### 7. Abrir Pull Request

En GitHub:

1. Entra al repo.
2. Busca el aviso de la rama recién subida.
3. Haz clic en `Compare & pull request`.
4. Base: `develop`.
5. Compare: tu rama.
6. Escribe título y descripción.
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

## Comandos útiles

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
- Que no haya logs o cachés.
- Que no haya cambios no relacionados.
- Que los tests o validaciones posibles hayan sido ejecutados.
