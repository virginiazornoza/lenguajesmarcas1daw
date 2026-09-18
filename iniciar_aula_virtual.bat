@echo off
title Aula Virtual LMSGI - 1º DAW (CIFP Carlos III)
echo =========================================================================
echo      AULA VIRTUAL: LENGUAJES DE MARCAS Y SISTEMAS DE INFORMACION
echo              1º DAW - FP Grado Superior (2026/2027)
echo =========================================================================
echo.
echo Iniciando servidor local y abriendo en el navegador predeterminado...
echo Pulsa Ctrl+C en esta ventana cuando desees cerrar el servidor.
echo.

start http://localhost:8080
python -m http.server 8080
pause
