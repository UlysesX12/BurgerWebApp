import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { menuItems } from '../data/menu';

export type OrderStatus = 'received' | 'preparing' | 'ready' | 'delivered' | 'cancelled';

export type StoredOrderItem = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
};

export type StoredOrder = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  customer: {
    name: string;
    phone: string;
    service: 'pickup' | 'delivery';
    time: string;
    notes: string;
  };
  items: StoredOrderItem[];
  total: number;
};

type IncomingOrderItem = {
  id?: unknown;
  quantity?: unknown;
};

type IncomingOrder = {
  customer?: {
    name?: unknown;
    phone?: unknown;
    service?: unknown;
    time?: unknown;
    notes?: unknown;
  };
  items?: IncomingOrderItem[];
};

const dataDir = path.join(process.cwd(), '.data');
const ordersFile = path.join(dataDir, 'orders.json');
const validStatuses: OrderStatus[] = ['received', 'preparing', 'ready', 'delivered', 'cancelled'];

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function createOrderId() {
  const stamp = new Date()
    .toISOString()
    .replaceAll('-', '')
    .replace('T', '-')
    .replaceAll(':', '')
    .slice(0, 15);
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `LBG-${stamp}-${random}`;
}

async function ensureStore() {
  await mkdir(dataDir, { recursive: true });
}

export async function readOrders(): Promise<StoredOrder[]> {
  await ensureStore();

  try {
    const raw = await readFile(ordersFile, 'utf-8');
    const orders = JSON.parse(raw.replace(/^\uFEFF/, ''));
    return Array.isArray(orders) ? orders : [];
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}

async function writeOrders(orders: StoredOrder[]) {
  await ensureStore();
  await writeFile(ordersFile, `${JSON.stringify(orders, null, 2)}\n`, 'utf-8');
}

export async function createOrder(payload: IncomingOrder) {
  const customer = payload.customer ?? {};
  const name = asTrimmedString(customer.name);
  const phone = asTrimmedString(customer.phone);
  const service = customer.service === 'delivery' ? 'delivery' : 'pickup';
  const time = asTrimmedString(customer.time);
  const notes = asTrimmedString(customer.notes).slice(0, 600);

  if (name.length < 2) {
    throw new Error('Indica el nombre del cliente.');
  }

  if (phone.length < 6) {
    throw new Error('Indica un telefono valido.');
  }

  if (!Array.isArray(payload.items) || payload.items.length === 0) {
    throw new Error('El pedido no tiene productos.');
  }

  const menuById = new Map(menuItems.map((item) => [item.id, item]));
  const merged = new Map<string, number>();

  for (const item of payload.items) {
    const id = asTrimmedString(item.id);
    const quantity = Number(item.quantity);
    const normalizedQuantity = Number.isInteger(quantity) ? Math.min(Math.max(quantity, 1), 20) : 0;

    if (!id || !menuById.has(id) || normalizedQuantity <= 0) {
      continue;
    }

    merged.set(id, (merged.get(id) ?? 0) + normalizedQuantity);
  }

  const items = [...merged.entries()].map(([id, quantity]) => {
    const menuItem = menuById.get(id);
    if (!menuItem) throw new Error('Producto no disponible.');

    const lineTotal = Number((menuItem.price * quantity).toFixed(2));
    return {
      id,
      name: menuItem.name,
      unitPrice: menuItem.price,
      quantity,
      lineTotal,
    };
  });

  if (!items.length) {
    throw new Error('El pedido no contiene productos disponibles.');
  }

  const order: StoredOrder = {
    id: createOrderId(),
    createdAt: new Date().toISOString(),
    status: 'received',
    customer: { name, phone, service, time, notes },
    items,
    total: Number(items.reduce((sum, item) => sum + item.lineTotal, 0).toFixed(2)),
  };

  const orders = await readOrders();
  orders.unshift(order);
  await writeOrders(orders.slice(0, 200));

  return order;
}

export async function updateOrderStatus(id: string, status: OrderStatus) {
  if (!validStatuses.includes(status)) {
    throw new Error('Estado no valido.');
  }

  const orders = await readOrders();
  const order = orders.find((entry) => entry.id === id);

  if (!order) {
    throw new Error('Pedido no encontrado.');
  }

  order.status = status;
  await writeOrders(orders);
  return order;
}
