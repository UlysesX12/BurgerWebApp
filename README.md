# La Brasa Gamberra · BurgerWebApp

Web para una marca de smash burgers con estética rock, vídeo de presentación, carta y prototipo de gestión de pedidos.

**Proyecto de José Luis Cabañas (UlysesX12).** Los créditos del proyecto abarcan dirección visual, experiencia web y desarrollo propio; Astro, Tailwind y las demás dependencias conservan su autoría.

## Estado y alcance

El código incluye páginas públicas, carrito, un endpoint `/api/orders` y un almacén de pedidos JSON en `.data/orders.json`. La compilación usa el adaptador Node de Astro en modo servidor.

Es un prototipo en desarrollo. La existencia de endpoints no acredita preparación para producción: quedan por revisar persistencia, concurrencia, permisos, pagos y operación, según el [roadmap](ROADMAP.md). El almacén JSON actual no utiliza la base PostgreSQL definida en Docker Compose.

## Empezar

Requiere Node.js **22.12 o superior**, según `package.json`.

```sh
npm ci
npm run dev
```

Servidor local por defecto: `http://localhost:4321`. Revisa [.env.example](.env.example) y la configuración de administración antes de probar flujos que la requieran.

## Compilar y previsualizar

```sh
npm run build
npm run preview
```

## Mapa del proyecto

| Ruta | Contenido |
| --- | --- |
| `src/pages/` | Inicio, carta, reservas, contacto, pedidos y administración. |
| `src/pages/api/orders.ts` | Endpoint del prototipo de pedidos. |
| `src/lib/orderStore.ts` | Persistencia JSON del prototipo. |
| `src/data/menu.ts` | Carta estructurada. |
| `src/components/` | Navegación y componentes visuales. |
| [ROADMAP.md](ROADMAP.md) | Trabajo técnico pendiente. |
| [docker-compose.yaml](docker-compose.yaml) y `.devcontainer/` | Entorno de desarrollo. |

## Créditos y reutilización

Conserva el crédito visible a José Luis Cabañas / UlysesX12. El repositorio no incluye actualmente un archivo LICENSE; el crédito no sustituye los permisos necesarios para reutilizar o distribuir el trabajo. Las dependencias tienen sus propias condiciones.

Esta revisión actualiza la documentación a partir del código disponible; no incorpora una nueva validación de ejecución.

## Más proyectos

Consulta el [catálogo de proyectos públicos](https://github.com/UlysesX12/WebSite/blob/main/docs/PROYECTOS.md).
