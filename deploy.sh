#!/usr/bin/env bash

# Detener ejecución si hay errores
set -e

# Construir el proyecto para producción
echo "🔨 Construyendo el proyecto..."
npm run build

# Navegar al directorio de salida
cd dist

# Inicializar un nuevo repo Git en la carpeta dist
echo "🚀 Desplegando a GitHub Pages..."
git init
git checkout -b main   # 🔥 ESTA LÍNEA ES CLAVE
git add -A
git commit -m "deploy"

# Forzar push a la rama gh-pages
git push -f https://github.com/Dvrklex/dvrklex.github.io.git main:gh-pages

# Volver al directorio anterior
cd -

echo "✅ Deploy completado."
