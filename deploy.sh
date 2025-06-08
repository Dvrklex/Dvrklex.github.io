#!/bin/bash

echo "🚀 Compilando proyecto..."
npm run build || { echo "❌ Falló el build"; exit 1; }

echo "📦 Cambiando a rama gh-pages..."
git checkout gh-pages

echo "🧹 Limpiando rama gh-pages..."
rm -rf *

echo "📁 Copiando build..."
cp -r dist/* .

echo "📤 Subiendo cambios a gh-pages..."
git add .
git commit -m "Deploy desde main"
git push

echo "🔙 Volviendo a rama main..."
git checkout main

echo "✅ Deploy exitoso"
