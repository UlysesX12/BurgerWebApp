# Roadmap

La Brasa Gamberra ya tiene una base visual publica: landing, navegacion, paginas principales y assets audiovisuales. Antes de abrir pedidos reales conviene completar estas fases.

## Pendiente antes de produccion

- Carta real con productos definitivos, precios, fotos, extras, alergenos y disponibilidad.
- Carrito con cantidades, modificadores, notas de cocina y calculo de totales.
- Checkout para recogida, delivery y datos de cliente.
- Persistencia en base de datos para pedidos, lineas de pedido, clientes y reservas.
- Panel interno para cocina con estados: recibido, preparando, listo, entregado y cancelado.
- Sistema de reservas con disponibilidad, confirmacion y bloqueo de horarios.
- Pasarela de pago, preferiblemente Stripe, con fallback de pago en local si aplica.
- Generacion de ticket imprimible y, si el negocio lo requiere, factura PDF.
- Paginas legales: privacidad, cookies, condiciones de compra y alergenos.
- Datos reales de contacto, direccion, horarios, redes sociales y mapa.
- Optimizacion final de video e imagenes para movil, cache y despliegue.

## Siguientes hitos tecnicos

1. Definir modelo de datos y migraciones.
2. Implementar API de productos, pedidos y reservas.
3. Construir carrito y checkout.
4. Crear panel operativo de pedidos.
5. Integrar pagos y confirmaciones.
6. Preparar despliegue publico con variables de entorno y dominio.

## Modelo de datos propuesto

- `products`: nombre, descripcion, categoria, precio, activo, destacado, orden.
- `product_options`: extras, modificadores, puntos de carne, tamanos y recargos.
- `allergens`: catalogo de alergenos y relacion producto/alergeno.
- `orders`: cliente, telefono, servicio, direccion, hora, estado, subtotal, total, metodo de pago.
- `order_items`: producto, cantidad, precio unitario, notas y extras seleccionados.
- `reservations`: nombre, telefono, fecha, hora, personas, notas, estado.
- `payments`: proveedor, payment intent, estado, importe y trazabilidad.
- `tickets`: numeracion, datos fiscales, lineas y payload imprimible/PDF.

## Endpoints previstos

- `GET /api/menu`: carta publica con categorias, productos, extras y alergenos.
- `POST /api/orders`: crear pedido desde checkout.
- `GET /api/orders/:id`: consultar estado del pedido.
- `PATCH /api/admin/orders/:id`: cambiar estado desde cocina.
- `POST /api/reservations`: crear solicitud de reserva.
- `GET /api/admin/reservations`: listar reservas por fecha.
- `POST /api/payments/create-intent`: iniciar pago con Stripe.
- `POST /api/webhooks/stripe`: confirmar pagos y actualizar pedidos.

## Estados operativos

- Pedido: `draft`, `pending_payment`, `paid`, `received`, `preparing`, `ready`, `delivered`, `cancelled`.
- Reserva: `requested`, `confirmed`, `seated`, `cancelled`, `no_show`.
- Pago: `requires_payment`, `processing`, `succeeded`, `failed`, `refunded`.
