import type { APIRoute } from 'astro';
import { createOrder, readOrders, updateOrderStatus, type OrderStatus } from '../../lib/orderStore';

export const prerender = false;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

export const GET: APIRoute = async () => {
  const orders = await readOrders();
  return json({ orders });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const order = await createOrder(payload);
    return json({ order }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'No se pudo crear el pedido.';
    return json({ error: message }, 400);
  }
};

export const PATCH: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const id = typeof payload.id === 'string' ? payload.id : '';
    const status = payload.status as OrderStatus;
    const order = await updateOrderStatus(id, status);
    return json({ order });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'No se pudo actualizar el pedido.';
    return json({ error: message }, 400);
  }
};
