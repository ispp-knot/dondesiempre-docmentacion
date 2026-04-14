---
sidebar_position: 7
---

# Plan de Pruebas

## 1 Objetivo

El objetivo de este plan es definir la estrategia, alcance y criterios para garantizar la calidad del sistema mediante pruebas sistemáticas, optimizando el equilibrio entre cobertura y esfuerzo.

## 2 Alcance

Las pruebas cubrirán:

* Backend:
    * Servicios
    * Controladores
    * Acceso a datos
* Frontend:
    * Flujos críticos de usuario (E2E)
* Sistema completo:
    * Casos de uso core
    * Rendimiento bajo carga

## 3 Estrategia de pruebas

### 3.1 Tests unitarios

Los tests unitarios son las pruebas de menor escala y prueban la lógica de una unidad del sistema, mockeando todos los componentes que la rodean. En el backend, todo servicio y controlador debe contar con una serie de pruebas unitarias asociadas. No se realizan pruebas unitarias en el frontend.

**Objetivo:** Alcanzar conjuntamente con las pruebas de integración un mínimo del 70% de cobertura de instrucciones. La cobertura se mide automáticamente con JaCoCo al ejecutar `./mvnw test`, y los resultados se encuentran en `target/site/jacoco/index.html`.

**Estado actual:** A 14 de abril de 2026, la cobertura combinada con integración se sitúa en el 84%.

### 3.2 Pruebas de integración

Las pruebas de integración validan la conexión entre múltiples componentes para verificar que el conjunto funciona como se espera. Dado su mayor coste en tiempo, se aplican únicamente en los sistemas donde se considera que merece la pena, en base a su complejidad, su probabilidad de ser modificados y su criticidad. No se realizan pruebas de integración en el frontend.

**Objetivo:** Cubrir los componentes críticos, complejos o propensos a cambios, contribuyendo junto a los tests unitarios al 70% de cobertura de instrucciones.

**Estado actual:** A 14 de abril de 2026, la única prueba de integración existente es el `AuthIntegrationTest`, que cubre los endpoints de autorización desde el controlador hasta la base de datos. La cobertura combinada con las pruebas unitarias se sitúa en el 84%.

### 3.3 Pruebas E2E (End-to-End)

Las pruebas E2E prueban el funcionamiento del sistema de extremo a extremo usando componentes reales en un entorno lo más similar posible al de producción, abarcando tanto frontend como backend. Se utilizan además como pruebas de validación de los casos de uso core, verificando de forma positiva que es posible realizarlos. Antes de cada entrega, el sistema se prueba E2E manualmente cubriendo todos los casos de uso, con automatización progresiva como objetivo a medio plazo.

**Objetivo:** Validar el 100% de los casos de uso core.

**Estado actual:** A 14 de abril de 2026, el 100% de los casos de uso core están validados:

| Caso de uso | Estado |
| ----- | ----- |
| Mapa de tiendas | ✅ Probado |
| Búsqueda de tiendas | ✅ Probado |
| Seguir tiendas | ✅ Probado |
| Catálogo | ✅ Probado |
| Personalización de tienda | ✅ Probado |
| Promociones | ✅ Probado |
| Outfits | ✅ Probado |
| Órdenes | ✅ Probado |

### 3.4 Pruebas de carga

Las pruebas de carga verifican el funcionamiento del sistema simulando la carga que ejercerían múltiples usuarios simultáneos, algo que las pruebas convencionales no contemplan. Dado que el frontend es puramente client-side, las pruebas de carga se centran exclusivamente en el backend. El escenario simula un uso real: el perfil de cliente busca tiendas, consulta una en particular y realiza pedidos, mientras que el perfil de tienda confirma los pedidos pendientes. Se utiliza Locust como herramienta, con un ratio de 10:1 entre clientes y tiendas, login cada 10 operaciones y una espera aleatoria de entre 1 y 5 segundos entre acciones.

**Objetivo:** Soportar al menos 200 usuarios concurrentes con una mediana de tiempo de respuesta inferior a 100 ms.

**Estado actual:** A 13 de abril de 2026, el sistema soporta hasta 315 usuarios simultáneos antes de que se produzca degradación del rendimiento, superando el criterio de aceptación establecido.

![Resultados](/img/s3-plan-prueba.png)