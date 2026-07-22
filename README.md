# Fullstack Python Interactivo

Sitio de documentación educativa construido con MkDocs y Material for MkDocs. Incluye una guía introductoria de Python y una estructura preparada para incorporar frontend, backend y proyectos.

## Vista local

```bash
python -m venv .venv
pip install -r requirements.txt
mkdocs serve
```

Abre `http://127.0.0.1:8000` en el navegador.

## Publicación en GitHub Pages

1. Crea un repositorio y sube este proyecto a la rama `main`.
2. En **Settings → Pages**, selecciona **Deploy from a branch**.
3. Elige la rama `gh-pages` y la carpeta raíz `/ (root)`.

Cada cambio enviado a `main` activará el flujo de publicación. Ajusta `site_url` y `repo_url` en `mkdocs.yml` si el repositorio usa otro nombre.

## Contenido futuro

Agrega nuevas páginas dentro de `docs/` y regístralas en la sección `nav` de `mkdocs.yml`.
