@echo off
echo [#] - Kodlamaio Etiya 4. Donem
echo [!] - Bilgisayarinizda NodeJS kurulu olduğundan emin olunuz: https://nodejs.org/en/download/
echo [i] - Kurulum Kontrol Ediliyor...
call npm install
call cd ./kodlamaio-etiya-telco-json-server/
call npm install
call cd ../
echo [i] - Kurulum Hazir.
echo [i] - Proje Baslatiliyor...
echo [i] - [0]: frontend calisma ortami, [1]: fake backend calisma ortami
echo.
call npx concurrently "ng serve -o" "cd kodlamaio-etiya-telco-json-server && npm start"