# Electivo-SuperRecetas
Progressive Web App (PWA) con React

## Introducción

Para el segundo electivo tomaré un curso desde cero para crear una Progressive Web App.

Para entender que es una PWA hay que verlo desde el panorama actual.

La web hoy en día no funciona muy bien en mobile y 50% (incluso más) 
de nuestros usuarios está en Mobile.

Hay malas conexiones en dispositivos móviles no son confiables. Esto genera que un sitio tarde hasta 14 segundos en cargar en mobile.

La UX no es solo el diseño de la app sino que también tiene que ver con lo rápido que funciona en el mundo real, con un teléfono que tiene mala conexión.

Las PWA están en medio de una aplicación nativa y una aplicación web que mediante el uso de Service Workers y otras tecnologías se pueden comportar como aplicaciones nativas y aplicaciones web al mismo tiempo.

## Proceso

Recrearé el proceso con lo que propone el curso hacer para hacer que una aplicación web también pueda verse en un móvil.

Utilizamos la API MealDB para mostrar recetas con instrucciones. Algunas de las features que manejamos son las siguientes:

* Soporte Offline con Workbox
* Estrategias de Red Apropiadas para cada recurso
* Add to Home Screen
* Web Share API
* Creado con [Create React App](https://github.com/facebookincubator/create-react-app)

## Scripts

* `npm install` para instalar las dependencias
* `npm run dev `para entorno de desarrollo
* `npm run buil && npm run start `para producción

El resultado fue el siguiente:

![Captura de App](readme-static/captura.png)


## Licencia

MIT 

