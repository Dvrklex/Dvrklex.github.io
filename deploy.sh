#!/bin/bash

echo "🚀 Iniciando deploy para GitHub Pages..."

# Verificamos que estemos en la rama main
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "❌ Tenés que ejecutar este script desde la rama main. Estás en: $CURRENT_BRANCH"
  exit 1
fi

echo "🔨 Generando build de producción con Vite..."
npm run build || { echo "❌ Falló el build"; exit 1; }

echo "🗃️ Guardando build en carpeta temporal..."
TEMP_DIR=$(mktemp -d)
cp -R dist/* "$TEMP_DIR"

echo "📦 Guardando cambios locales antes de cambiar de rama..."
git stash push -m "stash-deploy"

echo "📦 Cambiando a rama gh-pages..."
git checkout gh-pages || { echo "❌ No se pudo cambiar a gh-pages"; exit 1; }

echo "🧹 Limpiando rama gh-pages..."
git rm -rf . > /dev/null
cp -R "$TEMP_DIR"/* .

echo "📤 Subiendo cambios a gh-pages..."
git add .
git commit -m "🚀 Deploy actualizado desde dist/"
git push origin gh-pages

echo "🧹 Eliminando carpeta temporal..."
rm -rf "$TEMP_DIR"

echo "🔙 Volviendo a rama main..."
git checkout main

echo "♻️ Restaurando cambios locales guardados..."
git stash pop stash@{0}

echo "✅ Deploy exitoso 🚀"
