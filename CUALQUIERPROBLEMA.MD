Buenas!
No sé como exportar la base de datos.
La api está conectada a una base MYSQL
Angular debe iniciarse con ng serve --proxy-config src/proxy.conf.json
Ya que teniamos el problema de "Access to XMLHttpRequest at 'localhost:3001/register' from origin 'http://localhost:4200' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted."
Asi que usamos un proxy para conectar localhost:4100 a localhost:3001 y que la primera haga solicitudes a la segunda. Espero puedan correr todo, si no.
Me hablan

NOTA: COMPONENTE FORMS NO HAN DE TENERSE EN CUENTA. NO ESTÁN NI ESTARÁN IMPLEMENTADOS. 

:love:
