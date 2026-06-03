export type MenuCategory = 'burgers' | 'entrantes' | 'bebidas' | 'extras';

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  badge: string;
  tags: string[];
  allergens: string[];
  featured?: boolean;
};

export const categories: Record<MenuCategory, string> = {
  burgers: 'Burgers',
  entrantes: 'Entrantes',
  bebidas: 'Bebidas',
  extras: 'Extras',
};

export const menuItems: MenuItem[] = [
  {
    id: 'gamberra',
    category: 'burgers',
    name: 'La Gamberra',
    description: 'Doble smash, cheddar fundido, bacon crujiente, cebolla roja y salsa de la casa.',
    price: 12.9,
    badge: 'Combate estrella',
    tags: ['Doble smash', 'Bacon', 'Cheddar'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
    featured: true,
  },
  {
    id: 'brasa',
    category: 'burgers',
    name: 'La Brasa',
    description: 'Carne marcada al fuego, pepinillos, tomate, lechuga, cheddar y brioche tostado.',
    price: 13.9,
    badge: 'Main event',
    tags: ['Brasa', 'Brioche', 'Pepinillo'],
    allergens: ['Gluten', 'Lacteos'],
    featured: true,
  },
  {
    id: 'salvaje',
    category: 'burgers',
    name: 'La Salvaje',
    description: 'Triple smash, cheddar extra, bacon ahumado, salsa picante y golpe de carbon.',
    price: 15.5,
    badge: 'Sin reglas',
    tags: ['Triple smash', 'Picante', 'Ahumada'],
    allergens: ['Gluten', 'Lacteos', 'Huevo'],
  },
  {
    id: 'blackout',
    category: 'burgers',
    name: 'Blackout BBQ',
    description: 'Smash doble, cebolla crispy, cheddar, bacon y BBQ negra ahumada.',
    price: 14.5,
    badge: 'Edicion noche',
    tags: ['BBQ', 'Cebolla crispy', 'Bacon'],
    allergens: ['Gluten', 'Lacteos', 'Sulfitos'],
  },
  {
    id: 'bravas',
    category: 'entrantes',
    name: 'Patatas Bravas',
    description: 'Corte rustico, salsa brava ahumada y mayo de ajo tostado.',
    price: 5.9,
    badge: 'Para abrir fuego',
    tags: ['Ahumada', 'Compartir'],
    allergens: ['Huevo'],
  },
  {
    id: 'cheddar-fries',
    category: 'entrantes',
    name: 'Cheddar Fries',
    description: 'Patatas, cheddar fundido, bacon bits y cebollino.',
    price: 7.5,
    badge: 'Queso sin control',
    tags: ['Cheddar', 'Bacon'],
    allergens: ['Lacteos'],
  },
  {
    id: 'alitas-fuego',
    category: 'entrantes',
    name: 'Alitas Fuego',
    description: 'Glaseado picante, lima y humo. Avisan tarde.',
    price: 8.9,
    badge: 'Pican serio',
    tags: ['Picante', 'Glaseado'],
    allergens: ['Sulfitos'],
  },
  {
    id: 'extra-patty',
    category: 'extras',
    name: 'Extra Patty',
    description: 'Una smash mas para convertir cualquier burger en problema.',
    price: 3.5,
    badge: 'Sube el volumen',
    tags: ['Carne'],
    allergens: [],
  },
  {
    id: 'extra-cheddar',
    category: 'extras',
    name: 'Cheddar extra',
    description: 'Mas queso, mas brillo, mas servilletas.',
    price: 1.5,
    badge: 'Fundido',
    tags: ['Queso'],
    allergens: ['Lacteos'],
  },
  {
    id: 'cola',
    category: 'bebidas',
    name: 'Refresco',
    description: 'Lata fria para apagar el fuego justo lo necesario.',
    price: 2.2,
    badge: 'Frio',
    tags: ['330ml'],
    allergens: [],
  },
  {
    id: 'cerveza',
    category: 'bebidas',
    name: 'Cerveza',
    description: 'Rubia fria para acompanar cheddar, bacon y brasa.',
    price: 3.2,
    badge: 'Rock and roll',
    tags: ['330ml'],
    allergens: ['Gluten'],
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
