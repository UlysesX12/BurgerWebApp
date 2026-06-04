# La Brasa Gamberra

Web cinematográfica para una marca de smash burgers con estetica rock, brasa, video hero, fuego CSS, carta, pedidos prototipo y reservas.

## Autor

Proyecto disenado y desarrollado al completo por **Jose Luis Cabanas** (**UlysesX12**).

Si reutilizas, clonas, presentas o publicas este proyecto o partes de el, por favor manten el credito visible al autor original.

## Creditos de desarrollo

- Direccion visual, estructura y experiencia web: **Jose Luis Cabanas / UlysesX12**
- Desarrollo frontend Astro: **Jose Luis Cabanas / UlysesX12**
- Concepto visual de marca, landing, carta, pedidos prototipo y reservas: **Jose Luis Cabanas / UlysesX12**

## Estado del proyecto

La web ya incluye:

- Landing cinematográfica con video hero.
- Navegacion estilo evento.
- Footer con fuego CSS, brasas y chispas.
- Paginas publicas: carta, pedidos, reservas, contacto y sobre nosotros.
- Carta estructurada desde `src/data/menu.ts`.
- Prototipo de carrito local en `/takeaway`.
- Prototipo de reservas en `/reservas`.
- Roadmap tecnico para BBDD, pagos, pedidos reales, tickets y despliegue.

Todavía no es una aplicación de pedidos en producción. El flujo de pedido y reservas esta planteado a nivel visual/local, pendiente de backend, base de datos y pasarela de pago.

## Roadmap

Consulta [ROADMAP.md](./ROADMAP.md) para ver los pendientes tecnicos: modelo de datos, endpoints, estados operativos, pagos, tickets/facturas y despliegue.

## Desarrollo local

```sh
npm install
npm run dev
```

Servidor local por defecto:

```text
http://localhost:4321
```

En dev container/Docker, el proyecto se expone normalmente en:

```text
http://localhost:4321
```

## Build

```sh
npm run build
```

## Stack

- Astro
- Tailwind CSS
- CSS custom animations
- Video hero optimizado para web
- Prototipos frontend con estado local
