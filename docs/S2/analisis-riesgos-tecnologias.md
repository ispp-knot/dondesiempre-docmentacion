---
sidebar_position: 9
---


# Análisis de Riesgos de las Tecnologías

## Resumen Ejecutivo

Se ha decidido usar **Spring Boot**, con **NextJS** usando **TypeScript** y la biblioteca **Serwist** para facilitar el desarrollo de las funcionalidades de PWA.  
La base de datos será **PostgreSQL** ya que es la más soportada en las plataformas de despliegue.

## Consideraciones Previas

Previo al análisis de las tecnologías se han tenido que valorar las características de estas mismas por separado, entendiendo que ninguna de ellas es buena o mala por sí misma, sino que su conveniencia depende del contexto y de las necesidades específicas del proyecto.

* Preferimos lenguajes con **tipado estático** sobre lenguajes con tipado dinámico ya que en proyectos con muchas personas, los lenguajes estáticamente tipados detectan errores en compilación y hacen el código más predecible y mantenible.  
* Preferimos lenguajes con **tipado fuerte** sobre lenguajes con tipado débil ya que el tipado fuerte evita conversiones implícitas peligrosas y comportamientos inesperados, reduciendo errores sutiles.  
* Preferimos frameworks con **arquitectura clara** sobre frameworks con arquitectura flexible porque imponen convenciones consistentes que reducen la complejidad, evitan decisiones ambiguas y facilitan el trabajo coordinado en equipos grandes.  
* Preferimos frameworks con **dependencias claras** frente a aquellos donde debes seleccionarlas por tu cuenta porque reducen la fragmentación, evitan incompatibilidades y además nos liberan del esfuerzo y riesgo de tener que evaluarlas y decidirlas individualmente.

## Backend

El backend es la tecnología más complicada a decidir ya que existen varias tecnologías muy fuertes.

Se considera que todos somos familiares a las tecnologías que se han listado ya que todas han sido usadas a lo largo de la carrera.

Tras la encuesta de preferencia de tecnologías, estos han sido los resultados.  
![Encuesta](/img/s2-grafico-barras-backend.png)
Teniendo como preferido a Spring Boot y siendo el segundo preferido Django, dejando a Flask como “poco aceptado” y a Express como “no aceptado”.

### Spring Boot

#### Ventajas

* **Arquitectura bien definida** y coherente, que facilita la comprensión y la organización del proyecto.  
* Lenguaje con **tipado estático fuerte**, lo que contribuye a una mayor predictibilidad y detección temprana de errores.  
* Ecosistema de **testing muy maduro**, con buenas herramientas para todo tipo de tests.  
* Soporta de forma robusta aspectos clave como **seguridad**, **transacciones** y **concurrencia**.  
* Uso de **Gradle y Maven** como gestores de dependencias potentes y ampliamente utilizados.  
* Es el **preferido** por el **equipo**

#### Desventajas

* Curva de entrada y **sobreesfuerzo inicial** debido a que es un framework relativamente pesado.  
* **Configuración inicial extensa**, que puede requerir más tiempo para poner en marcha un proyecto.  
* **Lento para prototipos** y pruebas de concepto cuando se compara con soluciones más ligeras.

### Django

#### Ventajas

* **Arquitectura definida**, aunque no tan explícita como en otros frameworks.  
* Permite **iteración rápida**, facilitando el desarrollo ágil y prototipos funcionales en poco tiempo.  
* Lenguaje con **tipado fuerte**.  
* Sistema de **autenticación incluido**  
* **Segundo más apoyado** por el equipo de desarrollo.

#### Desventajas

* Lenguaje con **tipado dinámico**, lo que puede dificultar la detección temprana de errores en proyectos grandes.  
* **Gestión de dependencias limitada** y menos robusta, lo que puede generar problemas de compatibilidad o fragmentación.  
* Malo en escenarios de **concurrencia**, siendo menos adecuado para aplicaciones con alta carga simultánea.

### Flask

#### Ventajas

* **Muy flexible**, al ser un micro framework, permite un control total sobre la estructura y el diseño del proyecto.  
* Lenguaje con **tipado fuerte**, lo que ayuda a mantener consistencia y detectabilidad de errores en ciertas partes del código.

#### Desventajas

* La arquitectura depende completamente del equipo, ya que el framework **no impone una arquitectura predeterminada.**  
* Es necesario **seleccionar muchas dependencias** (ORM, autenticación, etc.), lo que incrementa la carga de decisiones y el riesgo de incompatibilidades.  
* Lenguaje con **tipado dinámico**, que puede dificultar la detección temprana de errores.  
* **Gestión de dependencias limitada**, con riesgo de fragmentación y problemas de compatibilidad.  
* **Poco apoyado** por el equipo de desarrollo

### Express.js

#### Ventajas

* **Muy flexible**, permitiendo adaptar el framework a las necesidades específicas del proyecto.  
* Posibilidad de mantener **todo el proyecto en un solo lenguaje** (JavaScript) tanto en frontend como en backend.  
* Uso de **NPM como gestor de dependencias**, muy potente y ampliamente soportado.

#### Desventajas

* Lenguaje con **tipado dinámico y débil**, lo que puede dificultar la detección temprana de errores y generar comportamientos inesperados.  
* No impone una arquitectura específica, lo que puede provocar **inconsistencias en el diseño del proyecto**.  
* Es necesario **seleccionar muchas dependencias** (ORM, autenticación, etc.), lo que aumenta la carga de decisiones y el riesgo de incompatibilidades.  
* No es **nada aceptado** por el equipo de desarrollo.

| Feature / Framework | Spring Boot | Django | Flask | Express.js |
| ----- | ----- | ----- | ----- | ----- |
| Arquitectura definida |  Muy clara. |  Definida pero poco explícita | No impuesta |  No impuesta |
| Flexibilidad |  Media | Media |  Muy alta |  Muy alta |
| Iteración rápida | Lento | Muy rápida |  Rápida |  Rápida |
| Tipado |  Estático fuerte | Dinámico fuerte | Dinámico fuerte | Dinámico débil |
| Testing | Ecosistema muy robusto | Flexible | Flexible | Poco estructurado |
| Seguridad | Muy buena | Incluida por defecto | Depende de libs | Depende de libs |
| Concurrencia | Muy buena | Muy mala | Muy mala | Media |
| Gestión de dependencias | Muy potente  | Muy mala | Muy mala | Muy potente |
| Complejidad inicial | Alta | Media | Baja | Media |
| Decisiones manuales  | Pocas | Pocas | Muchas | Muchas |
| Aceptación del equipo | Muy aceptado | Aceptado | No aceptado | No aceptado |

## Frontend

A la hora de elegir la tecnología frontend se han tenido que tomar 3 decisiones, el framework a utilizar, la manera de implementar las funcionalidades de una PWA y el uso o no de TypeScript frente a JavaScript.

Estos son los resultados de la encuesta sobre los frameworks a utilizar. Siendo Next JS el claro ganador.  
![Encuesta](/img/s2-grafico-barras-frontend.png)
También hemos encuestado sobre el uso de TypeScript  

![Encuesta](/img/s2-grafico-sectores-frontend.png)

En cuanto al conocimiento de las tecnologías listadas ambas se basan en React, una biblioteca que todo el equipo conoce aunque somos conscientes de que gran parte del equipo no tiene experiencia con Next JS.

### React solo (create-react-app)

#### Ventajas

* **Simple** y fácil de entender para comenzar un proyecto.  
* Permite iniciar proyectos rápidamente, **ideal para prototipos** o aplicaciones de tamaño pequeño/mediano.

#### Desventajas

* **No ofrece** Server-Side Rendering (**SSR**) de manera nativa, lo que puede limitar SEO y rendimiento en ciertos casos.  
* **Arquitectura menos definida**, dejando muchas decisiones estructurales al equipo.  
* **No aceptado** en la encuesta.

### NextJS

#### Ventajas

* Soporta **Server-Side Rendering (SSR)** de manera nativa, mejorando SEO y tiempos de carga inicial.  
* Ofrece **muy buen rendimiento** en aplicaciones web modernas.  
* Posee una **arquitectura clara**, que facilita la organización del proyecto y la colaboración en equipo.  
* Framework **moderno**, con herramientas y ecosistema actualizados.  
* **Preferido en la encuesta.**

#### Desventajas

* Introduce **cierta complejidad**, especialmente comparado con soluciones más simples como Create React App.  
* **No todo el equipo está acostumbrado** a su flujo y convenciones, lo que puede requerir capacitación inicial.

También se ha analizado las distintas maneras de implementar las características de una PWA, para ello se han estudiado las siguientes alternativas. Nadie del equipo tiene experiencia en ninguna de ellas.

### PWA “a mano”

Esta opción implica utilizar la API de Service Workers de manera directa sin ninguna capa de abstracción.

#### Ventajas

* Permite tener **mucho nivel de control**

#### Desventajas

* Introduce **mucha complejidad** de desarrollo

### Next-pwa

Es un add-on de NextJS que prepara al framework para su uso en PWA. 

#### Ventajas

* Es muy **completa** conteniendo muchísimas funcionalidades.

#### Desventajas 

* Lleva 3 años **sin** ningún **mantenimiento**.  
* No existe una única fuente del código ya que existen varios forks que han intentado continuar el soporte.

### Next-pwa-pack

Es una biblioteca muy pequeña especializada en PWA para el ecosistema de NextJS 

#### Ventajas

* Parece ser muy **completa** conteniendo muchas funcionalidades.  
* Aún está en mantenimiento **activo**.

#### Desventajas

* No ha sido **apenas usada** en entornos reales, tiene muy pocas descargas en NPM  
* **Apenas existe comunidad** alrededor de la herramienta.  


### Serwist

Serwist funciona como una capa de abstracción sobre la API de Service Worker.

#### Ventajas

* En activo, con un **desarrollo continuo** y muchos contribuidores.  
* Tiene una biblioteca **especializada en NextJS**.  
* Standard y **recomendada por NextJS**.

#### Desventajas

* Introduce **cierto nivel de complejidad**

| Feature / Tecnología | PWA a mano | next-pwa | next-pwa-pack | Serwist |
| ----- | ----- | ----- | ----- | ----- |
| Nivel de control | Muy alto | Medio | Medio | Alto |
| Complejidad | Muy alta | Simple | Simple | Media |
| Estado del proyecto |  | Abandonado (3 años) | Activo | Muy actualizado |
| Uso en producción |  | Usado históricamente | Extremadamente poco | Creciente |
| Comunidad |  | Prácticamente muerta | Muy pequeña | Moderada |
| Recomendado por Next.js | Sugerido | No | No | Sí |

## Elección de Stack Tecnológico

Debido a la arquitectura definida, la naturaleza de su tipado y la gran aceptación por el equipo de trabajo se ha elegido **Spring Boot** como framework de backend.

Debido a la arquitectura y la aceptación absoluta por el equipo de desarrollo se ha elegido **NextJS** como framework de frontend, además se usará junto a **TypeScript** debido a las fortalezas que este lenguaje presenta sobre JavaScript y por el interés generalizado en el equipo de desarrollo.

Hemos considerado que la herramienta para realizar el PWA más viable es **Serwist** ya que tiene una comunidad activa y pese a introducir cierta complejidad simplifica el proceso frente a no usarla.

#### Backend

Entrando en algo más de detalle del backend, se está haciendo uso de Java 25 junto a Maven como gestor de dependencias. Se posee un pre-commit hook de Spotless para mantener un estilo uniforme en el desarrollo. El backend será desplegado en Azure, la versión actual de desarrollo estará siempre desplegada con un workflow de Github Actions, el despliegue se actualiza con cada push a main. Las diferentes versiones que quedarán congeladas al final de cada Sprint serán alojadas en diferentes Web App de Azure con un App Service Plan plan gratuito cada una, contarán con sprint-X en el nombre para distinguirlas y serán desplegadas en cada release del repositorio. A través de unos jobs específicos que dependen del tag de la release.

#### Frontend

El frontend hace uso de TypeScript junto a NextJS, además, para dar la posibilidad de hacer un PWA se hará uso de Serwist porque nos permite implementar Service Workers de forma robusta y mantenible sin tener que construir toda la infraestructura desde cero. Nos ofrece estrategias de caché optimizadas, manejo sencillo de actualizaciones y soporte para funcionalidades clave como modo offline y notificaciones push, reduciendo la complejidad técnica y el riesgo de errores.   
Para asegurar un estilo consistente se hará uso de ESLint y de Prettier junto a un pre-commit hook para lintear el código.  
Los despliegues se harán en Vercel, el cuál por defecto con su acceso al repositorio se encarga de desplegar las nuevas versiones que llegan a main automáticamente. Para mantener los diferentes Sprints congelados se harán uso de diferentes proyectos de Vercel para cada uno de los sprints.

#### Base de datos

De base de datos se hará uso de PostgreSQL, durante el desarrollo se poseen dos opciones, usar una base de datos en Neon, que es lo que se usará en producción o bien contenedores Docker con bases de datos Postgres. Estas bases de datos contarán con la extensión de Postgis que es muy útil para trabajar con datos geográficos y será de utilidad para el desarrollo del mapa.  
Para la persistencia de los datos durante los diferentes Sprints se hará uso de la DBaaS de PostgreSQL, Neon, que gracias a su funcionalidad de ramas se puede generar una para cada Sprint y dejándola aparte para mantenerla congelada con los datos que tuviese.

#### Cloudinary

Para almacenar las imágenes de la aplicación se hará uso de esta plataforma. Dispone de alrededor de 25 GB gratuitos, por lo que se creará una carpeta por cada Sprint para separar las imágenes de cada uno de ellos y así evitar modificaciones erróneas en el contenido de otra entrega.

## Mitigación de riesgos

Somos conscientes de la existencia de ciertos riesgos que conlleva el uso del stack tecnológico seleccionado por lo que vamos a proponer una serie de medidas para mitigarlos intentando mejorar al máximo posible la experiencia de desarrollo.

* Para evitar que la configuración inicial de las tecnologías sea un problema a la hora de desarrollar, estas deben estar configuradas antes de comenzar el desarrollo.  
* Para evitar que el desconocimiento de Serwist sea un problema se formará al equipo en la tecnología.  
* Para evitar que el desconocimiento de NextJS o TypeScript sean un problema, las personas con experiencia en estas tecnologías formarán a las que no.  
* Para evitar los problemas que se han tenido en otras ocasiones con las migraciones se formará al equipo en este ámbito.

## Tecnologías Auxiliares

### Migraciones

Las migraciones las haremos con Flyway y generamos los esquemas sql de migración para usar como base de manera automática con Liquibase.

### Organización del equipo

Para organizar al equipo usamos GitHub Project con un tablero de Kanban para organizar nuestras tareas.

Para comunicarnos de manera interna usamos Discord.

### Comunicación con los usuarios Piloto

La comunicación con los usuarios piloto se hará mediante Whatsapp o mediante llamadas telefónicas, dependiendo de la preferencia de cada usuario piloto.  
La información de los usuarios piloto se guardará en un excel donde se mantendrá la información de cada uno.

### Mapa

Para usar el mapa, se plantean las siguientes tecnologías:

| Característica | Leaflet | MapLibre | Google Maps API |
| :---- | :---- | :---- | :---- |
| **Simplicidad** | Alta — API pequeña, fácil para mapas y marcadores | Media — modelo vectorial/WebGL, algo más conceptual | Media — bien documentada, pero con varias capas |
| **Costo** | Gratis | Gratis | Basado en uso (free tier \+ facturación) |
| **Código Abierto** | Sí (BSD) | Sí (BSD) | No — propietario. |
| **Estilos Personalizados** | Básico — tiles, iconos, overlays | Fuerte — estilos vectoriales detallados | Moderado — estilos soportados pero más limitados que motores vectoriales |

MapLibre es la primera opción. Se ha revisado la API y se integra muy bien con React, proporcionando una API reactiva que facilita mucho la implementación. Además, permite añadir estilos custom para poder mantener la imagen de marca en la aplicación.

En caso de que no se pueda usar por algún motivo, un integrante del equipo ya ha implementado una solución muy similar a la buscada con Leaflet, pero ya que su wrapper de React sólo configura los valores iniciales el código es mucho más complejo, ya que el estado tiene que ser actualizado de manera imperativa.

La API de Google Maps puede también cumplir con el propósito buscado pero es de pago y no tiene un uso muy fácil.

Para buscar la ruta, se puede hacer una simple redirección a google maps siguiendo el query parameter [http://maps.google.com/?q=](http://maps.google.com/?q=) con la dirección de la tienda.

### Pago

Para hacer pagos con reserva de API **Escrow.com / Escrow Pay**, **Shieldpay**, **Ekurpay**, **Tazapay Escrow**, **PayKeeper**, y ninguna es viable. Tampoco con viables Stripe o Redsys. Es decir, **no podemos hacer reservas del pago** sin implementarlo nosotros, y tampoco podemos implementarlo nosotros porque no tenemos una cuenta bancaria con la que hacerlo y sería un riesgo legal espectacular.

| Característica | Stripe | Redsys |
| :---- | :---- | :---- |
| **Tipo de pago** | Abstraído, permite Google Pay, tarjeta, PayPal… | Específico al banco. |
| **Tarifas por transacción** | \~1,4–1,5 % \+ 0,25 € para tarjetas UE; más para internacionales; posible 2 % extra por conversión de divisa | Muy bajas relativas (\~0,3–0,8 % negociado con banco); pueden incluir costes fijos variables según entidad |

Ambos tienen plan gratis. Elegimos usar Stripe para realizar los pagos porque facilita al usuario realizar el pago. Ambas son opciones viables, sin embargo, y el grupo tiene experiencia con ambas, así que se puede cambiar sin problemas en caso de que Stripe no sea viable.

### Envíos

Analizando las opciones de envío, parece que las plataformas específicas para ello tienen APIs sin documentar, no tienen planes gratis, y en general son muy confusas y no entiendo cómo alguien podría usar las que no son las más grandes. Supongo que querrán que contactes con soporte.

Correos de España ofrece una API que es utilizable de manera gratuita para hacer seguimiento al envío y quizás generar etiquetas y sacar costes, lo que está bien, incluyendo una API mockeada con la que podemos integrarnos para el MVP. Sin embargo no veo que se puedan generar etiquetas ni conseguir precios ni nada similar.

## Plataformas de Despliegue

### Resumen Ejecutivo

Se ha decidido usar **Azure** para el despliegue del backend, **Vercel** para el despliegue del frontend y **Neon** como base de datos en la nube. Para alojar las imágenes se ha optado por Cloudinary.

### Bases de datos analizadas

##### [Filess.io](http://Filess.io):

Características gratuitas:

- Permite alojar tanto Mariadb como PostgreSQL  
- 10 MB por DB de almacenamiento  
- Recursos no dedicados  
- 5 conexiones concurrentes(En EGC dieron problemas pero sé resetearlas)  
- Tráfico ilimitado  
- Poseé opción de hacer consultas y borrar las tablas de forma online

##### Neon

Caracteristicas gratuitas:

- Permite alojar PostgreSQL  
- 100 proyectos(según me da a entender son 100 posibles DB)  
- 0.5 GB de almacenamiento por proyecto  
- 100 CU-hours por proyecto (CU= uso de computo, 1 CU \= 4GB RAM) \= CU×horas activo  
- Autenticacion  
- Solo PostgreSQL  
- Autoescalado  
- Lectura de réplicas  
- 10 ramas de bases de datos por proyecto para hacer pruebas(Quiza podriamos tener una por sprint)   
- Fácil conexion con java y otras muchas opciones.  
- Generación automatica de API.  
    
  Supabase  
  Caracteristicas gratuitas:  
- Peticiones ilimitadas  
- 500 MB de almacenamiento  
- 5 GB de salida de datos al mes  
- 5 GB de salida cacheada de datos al mes  
- 1 GB de almacenamiento de archivos(Externos a la DB)  
- Editor de tablas y ejecución de scripts sql integrado aparentemente sencillo y cómodo de usar.  
- Autogenera API  
- Autenticacion  
- Posee autogeneracion de configuracion para frameworks(Next,React,... Spring no, pero posee JDBC para conectar como en Neon)

##### MariaDB SkySQL

Gratuito:

- Solo MariaDB  
- 1-2 MCU  
- 10 GB de almacenamiento  
- SSL/TLS activado  
- No parece tener para consultar tablas y hacer consultas de forma gratuita  
- Menos intuitiva que el resto  
- No concreta cuántas pueden crearse por cuenta

Mariadb así de primeras parece tener menos opciones gratuitas de forma ilimitada.

#### Comparativas generales

|  | Filess.io | Neon | Supabase | Mariadb SkySQL |
| :---- | :---- | :---- | :---- | :---- |
| SGBD | MariaDB, Postgres,... | Postgres | Postgres | MariaDB |
| Almacenamiento | 10 MBw | 500 MB | 500MB | 10 GB |
| DB simultáneas | 2 por cuenta | 10 \+ 10 ramas cada uno | 2 | 1 |
| Consultar tablas | Si | Si | Si | No |
| Tráfico | Ilimitado | 100 CU horas | 5GB al mes | 1-2 MCU mes |
| Ejemplos de conexión | Si | Si | Si | No encontrado |
| Interfaz | Simple y directa | Intuitiva | Intuitiva | Poco clara |

#### **Backend y/o Frontend**

##### Railway

Plan gratuito:

* Up to 1 vCPU / 0.5 GB RAM per service  
* 0.5 GB of volume storage

Tiene 30 dias gratis o 5€ el primer mes, a partir de entonces saldo de 1€ cada mes.  
Interfaz visual  
Es posible que sea suficiente para trabajar con el saldo que dan, solo se puede 1 proyecto activo simultáneamente.

##### Render

Plan gratuito:  
Render:

- 2 servicios por cuenta (Podría estar desplegado frontend y backend por separado, mismo proyecto, distintos servicios) Habría que registrar 4 usuarios para mantener todos los sprints.  
- Ancho de banda: 100 GB/mes  
- Minutos de pipeline de construccion al mes: 500  
- Escalado vertical  
- No posee consola gratuita

##### Vercel

Serviría para alojar el frontend, soporta nextjs, react, vue, etc. Solo JS.

* Gratis para siempre  
* Import your repo, deploy in seconds  
* Automatic CI/CD  
* Web Application Firewall  
* Global, automated CDN  
* Fluid compute  
* DDoS Mitigation  
* Traffic & performance insights

No soporta docker para desplegarse.

##### Azure

Actualmente por ser estudiantes disponemos de un saldo de unos 86€ aproximadamente.  
Se hace uso de Azure App Service(Aplicacion Web). 

Se puede desplegar con código, indicando lenguaje y otras cosas.  
Otra opción es con imágenes subidas a docker hub(público o privado), necesita la url, (usuario, contraseña si es privado), el nombre y tag como hello-world:latest y comandos de ejecución al iniciarse(opcionales).   
Un plan básico cuesta unos 13 USD/mes, es posible seleccionar el gratuito de todas maneras.  
Plan gratuito:

- 60 min de CPU al día, cuando se agota se detiene  
- Se puede auto apagado si no está en uso  
- Pruebas de carga  
- 165 MB de salida de datos diaria  
- 1024 MB de entrada de datos  
- Puede cambiarse el plan desde su dashboard  
- Servidores en España

Si se crea con contenedores, se puede CI/CD con contendores(no investigado en profundidad)  
En el caso de crear con código crea un workflow CI/CD de forma automática para el código en Github, entiendo que habrá que retocar cosas para que despliegue frontend o backend.  
.

##### [Fly.io](http://Fly.io)

No es gratis así que nada, 7 días free y luego cobran por uso.

A continuación, dos tablas comparativas(incluyen info repetida):

| Proveedor | Plan Gratuito / Costo | Características Principales | Limitaciones Clave | Ideal para |
| :---- | :---- | :---- | :---- | :---- |
| **Railway** | 30 días gratis o 5€ (1er mes). Luego 1€ saldo/mes. | Interfaz visual intuitiva. Hasta 1 vCPU / 0.5 GB RAM. 0.5 GB almacenamiento. | Solo 1 proyecto activo simultáneo. | Proyectos pequeños con despliegue visual. |
| **Render** | Gratis (con límites). | 2 servicios por cuenta. 100 GB ancho de banda. 500 min build. | Sin consola en el plan gratuito. Requiere múltiples cuentas para varios sprints. | Despliegue separado de Frontend y Backend. |
| **Vercel** | Gratis para siempre. | Optimizado para Next.js, React, Vue. CI/CD automático. | No soporta Docker. Solo aplicaciones JavaScript/TS. | Alojamiento de Frontend profesional. |
| **Azure** | Saldo estudiante (\~86€) o Plan Gratuito. | Despliegue por código o Docker. Servidores en España. CI/CD automático con GitHub. | Plan gratuito limitado a 60 min CPU/día. 165 MB salida datos diaria. | Proyecto más “realista” con opciones de escalar |
| **Fly.io** | Pago por uso (No es gratis). | 7 días de prueba gratuita. | Requiere tarjeta/pago tras la semana de prueba. | Descartado por falta de plan gratuito permanente. |

| Plataforma | Plan gratuito | Recursos | Despliegue | CI/CD | Extras | Limitaciones |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Railway** | 30 días gratis o 5€ (1er mes). Luego 1€ saldo/mes. | Hasta 1 vCPU / 0.5 GB RAM por servicio, \~0.5 GB de volumen | Código y contenedores  | Sí | Interfaz visual sencilla | 1 proyecto activo a la vez, créditos limitados |
| **Render** | Gratis | 2 servicios gratuitos por cuenta, 100 GB/mes de ancho de banda, 500 min/mes de builds | Código y contenedores | Sí | Escalado vertical en planes de pago | Límite de servicios en free, sin acceso a consola en free |
| **Vercel** | Gratis para siempre | 1M de peticiones, 100GB de transferencia/mes | Importar repo (Next.js, React, Vue, etc.) | CI/CD automático | Optimizado para Next.js, React, Vue. | No soporta Docker ni backends tradicionales persistentes |
| **Azure App Service** | Plan Free (F1) disponible \+ créditos estudiantes (\~86 €) | 60 min CPU/día, ancho de banda muy limitado, recursos compartidos, 10 web apps | Código o contenedores Docker | CI/CD automático con GitHub (código) y posible con contenedores | Servidores en España, autoapagado, pruebas de carga | Se detiene al agotar CPU, rendimiento bajo en free |
| **Fly.io** | 7 días de prueba (no free tier estable) | Pago por uso según recursos | Contenedores Docker y codigo | Sí | Despliegue geográfico cercano a usuarios | No es gratuito a medio plazo |

#### Cloudinary

Opción conocida para almacenar imágenes y videos  
De forma gratuita dispone de 25 créditos mensuales 

### Riesgos de las plataformas de despliegue

#### Límite de recursos en planes gratuitos (Neon y Cloudinary)

Puede producirse suspensión del servicio o degradación del rendimiento si se superan los límites de uso.

Mitigación:

* Monitorizar consumo mensualmente.  
* Optimizar consultas y cerrar correctamente las conexiones.  
* Limitar el tamaño de las imágenes subidas.  
* Eliminar datos de prueba periódicamente.

#### Arquitectura distribuida

El uso de varios servicios externos incrementa los puntos de fallo y puede generar problemas de CORS o latencia.

Mitigación:

* Utilizar región europea en todos los servicios.  
* Documentar correctamente las variables de entorno.  
* Realizar pruebas de integración.  
* Configurar CORS desde el inicio del proyecto.

#### Agotamiento de créditos de azure

Riesgo bajo, ya que los créditos de Azure cubren los 4 meses del proyecto.

Mitigación:

* Utilizar un plan adecuado sin sobredimensionar recursos.  
* Monitorizar el gasto mensual en Azure.  
* Evitar pruebas de carga innecesarias.

## Análisis de Tecnologías Auxiliares

### Mapa

Para usar el mapa, se plantean las siguientes tecnologías:

| Característica | Leaflet | MapLibre | Google Maps API |
| :---- | :---- | :---- | :---- |
| **Simplicidad** | Alta — API pequeña, fácil para mapas y marcadores | Media — modelo vectorial/WebGL, algo más conceptual | Media — bien documentada, pero con varias capas |
| **Costo** | Gratis | Gratis | Basado en uso (free tier \+ facturación) |
| **Código Abierto** | Sí (BSD) | Sí (BSD) | No — propietario. |
| **Estilos Personalizados** | Básico — tiles, iconos, overlays | Fuerte — estilos vectoriales detallados | Moderado — estilos soportados pero más limitados que motores vectoriales |

MapLibre es la primera opción. Se ha revisado la API y se integra muy bien con React, proporcionando una API reactiva que facilita mucho la implementación. Además, permite añadir estilos custom para poder mantener la imagen de marca en la aplicación.

En caso de que no se pueda usar por algún motivo, un integrante del equipo ya ha implementado una solución muy similar a la buscada con Leaflet, pero ya que su wrapper de React sólo configura los valores iniciales el código es mucho más complejo, ya que el estado tiene que ser actualizado de manera imperativa.

La API de Google Maps puede también cumplir con el propósito buscado pero es de pago y no tiene un uso muy fácil.

Para buscar la ruta, se puede hacer una simple redirección a google maps siguiendo el query parameter [http://maps.google.com/?q=](http://maps.google.com/?q=) con la dirección de la tienda.

### Pago

Para hacer pagos con reserva de API **Escrow.com / Escrow Pay**, **Shieldpay**, **Ekurpay**, **Tazapay Escrow**, **PayKeeper**, y ninguna es viable. Tampoco con viables Stripe o Redsys. Es decir, **no podemos hacer reservas del pago** sin implementarlo nosotros, y tampoco podemos implementarlo nosotros porque no tenemos una cuenta bancaria con la que hacerlo y sería un riesgo legal espectacular.

| Característica | Stripe | Redsys |
| :---- | :---- | :---- |
| **Tipo de pago** | Abstraído, permite Google Pay, tarjeta, PayPal… | Específico al banco. |
| **Tarifas por transacción** | \~1,4–1,5 % \+ 0,25 € para tarjetas UE; más para internacionales; posible 2 % extra por conversión de divisa | Muy bajas relativas (\~0,3–0,8 % negociado con banco); pueden incluir costes fijos variables según entidad |

Ambos tienen plan gratis. Elegimos usar Stripe para realizar los pagos porque facilita al usuario realizar el pago. Ambas son opciones viables, sin embargo, y el grupo tiene experiencia con ambas, así que se puede cambiar sin problemas en caso de que Stripe no sea viable.

### Envíos

Analizando las opciones de envío, parece que las plataformas específicas para ello tienen APIs sin documentar, no tienen planes gratis, y en general son muy confusas y no entiendo cómo alguien podría usar las que no son las más grandes. Supongo que querrán que contactes con soporte.

Correos de España ofrece una API que es utilizable de manera gratuita para hacer seguimiento al envío y quizás generar etiquetas y sacar costes, lo que está bien, incluyendo una API mockeada con la que podemos integrarnos para el MVP. Sin embargo no veo que se puedan generar etiquetas ni conseguir precios ni nada similar.