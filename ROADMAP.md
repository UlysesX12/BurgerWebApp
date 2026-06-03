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
