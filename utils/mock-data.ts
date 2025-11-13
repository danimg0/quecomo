// lib/mock-data.ts
import { Category } from '@/types/category.type';
import { Recipe } from '../types/recipe.type';

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Pasta Primavera',
    photoUrl: 'https://picsum.photos/seed/696/3000/2000',
    duration: 15,
    difficulty: 'Fácil',
    description:
      'Una receta ligera y colorida con pasta, verduras frescas y un toque de aceite de oliva. Perfecta para una comida rápida y saludable.',
    ingredients: [
      '200 g de pasta (espaguetis o penne)',
      '1 calabacín',
      '1 pimiento rojo',
      '1 zanahoria',
      '1 diente de ajo',
      'Aceite de oliva',
      'Sal y pimienta al gusto',
      'Queso parmesano rallado (opcional)',
    ],
    steps: [
      'Corta las verduras en tiras finas.',
      'Cuece la pasta según las instrucciones del paquete.',
      'Sofríe el ajo y las verduras en una sartén con un poco de aceite de oliva durante 5-7 minutos.',
      'Escurre la pasta y añádela a la sartén con las verduras.',
      'Mezcla bien, añade sal y pimienta al gusto.',
      'Sirve con queso parmesano por encima si lo deseas.',
    ],
    favorite: false,
  },
  {
    id: '2',
    title: 'Pollo al Curry',
    photoUrl: 'https://picsum.photos/seed/123/3000/2000',
    duration: 45,
    difficulty: 'Media',
    description:
      'Un plato sabroso con pollo tierno cocinado en una cremosa salsa de curry con leche de coco. Ideal para los amantes de los sabores exóticos.',
    ingredients: [
      '500 g de pechuga de pollo',
      '1 cebolla',
      '2 dientes de ajo',
      '1 cucharada de curry en polvo',
      '200 ml de leche de coco',
      '1 tomate maduro',
      'Aceite de oliva',
      'Sal y pimienta al gusto',
      'Arroz blanco para acompañar',
    ],
    steps: [
      'Corta el pollo en trozos medianos y sazona con sal y pimienta.',
      'Pica la cebolla, el ajo y el tomate.',
      'En una sartén grande, sofríe la cebolla y el ajo hasta que estén dorados.',
      'Agrega el curry en polvo y mezcla bien durante 1 minuto.',
      'Añade el pollo y cocínalo hasta que esté dorado por fuera.',
      'Agrega el tomate picado y la leche de coco. Cocina a fuego medio durante 20 minutos.',
      'Sirve caliente acompañado de arroz blanco.',
    ],
    favorite: true,
  },
  {
    id: '3',
    title: 'Ensalada César',
    photoUrl: 'https://picsum.photos/seed/789/3000/2000',
    duration: 20,
    difficulty: 'Fácil',
    description:
      'Clásica ensalada César con lechuga romana crujiente, pollo a la parrilla, croutones caseros y aderezo cremoso.',
    ingredients: [
      '2 pechugas de pollo',
      '1 lechuga romana',
      '50 g de queso parmesano',
      '2 rebanadas de pan para croutones',
      '2 cucharadas de mayonesa',
      '1 cucharada de mostaza',
      '1 diente de ajo',
      'Jugo de 1/2 limón',
      'Aceite de oliva',
      'Sal y pimienta',
    ],
    steps: [
      'Cocina el pollo a la parrilla con sal y pimienta hasta que esté dorado. Déjalo reposar y córtalo en tiras.',
      'Corta el pan en cubos y tuéstalos en el horno con un poco de aceite hasta que estén crujientes.',
      'Lava y corta la lechuga en trozos grandes.',
      'Prepara el aderezo mezclando mayonesa, mostaza, ajo picado, jugo de limón, sal y pimienta.',
      'En un bowl, mezcla la lechuga con el aderezo.',
      'Agrega el pollo, los croutones y el queso parmesano rallado.',
      'Sirve inmediatamente.',
    ],
    favorite: false,
  },
  {
    id: '4',
    title: 'Tacos de Pescado',
    photoUrl: 'https://picsum.photos/seed/456/3000/2000',
    duration: 30,
    difficulty: 'Media',
    description:
      'Tacos frescos y crujientes con pescado empanizado, salsa de yogur y vegetales frescos. Perfectos para una cena ligera.',
    ingredients: [
      '400 g de filete de pescado blanco',
      '8 tortillas de maíz',
      '1 taza de harina',
      '1 huevo',
      'Pan rallado',
      '1/2 repollo morado',
      '1 aguacate',
      '1/2 taza de yogur natural',
      '1 limón',
      'Cilantro fresco',
      'Sal y pimienta',
      'Aceite para freír',
    ],
    steps: [
      'Corta el pescado en tiras y sazónalo con sal y pimienta.',
      'Prepara tres platos: uno con harina, otro con huevo batido y otro con pan rallado.',
      'Pasa cada tira de pescado por harina, luego huevo y finalmente pan rallado.',
      'Fríe el pescado en aceite caliente hasta que esté dorado y crujiente.',
      'Corta el repollo en tiras finas y el aguacate en rodajas.',
      'Mezcla el yogur con jugo de limón y cilantro picado para hacer la salsa.',
      'Calienta las tortillas y rellénalas con pescado, repollo, aguacate y salsa.',
      'Sirve con más limón y cilantro fresco.',
    ],
    favorite: true,
  },
  {
    id: '5',
    title: 'Risotto de Champiñones',
    photoUrl: 'https://picsum.photos/seed/321/3000/2000',
    duration: 40,
    difficulty: 'Media',
    description:
      'Cremoso risotto italiano con champiñones frescos y queso parmesano. Un plato reconfortante y elegante.',
    ingredients: [
      '300 g de arroz arborio',
      '300 g de champiñones',
      '1 cebolla pequeña',
      '2 dientes de ajo',
      '1 litro de caldo de verduras',
      '100 ml de vino blanco',
      '50 g de mantequilla',
      '50 g de queso parmesano rallado',
      'Perejil fresco',
      'Aceite de oliva',
      'Sal y pimienta',
    ],
    steps: [
      'Pica la cebolla y el ajo finamente. Lamina los champiñones.',
      'Calienta el caldo y mantenlo caliente durante todo el proceso.',
      'En una olla grande, sofríe la cebolla y el ajo con aceite de oliva.',
      'Agrega los champiñones y cocina hasta que suelten su agua.',
      'Añade el arroz y tuesta durante 2 minutos removiendo constantemente.',
      'Vierte el vino blanco y deja que se evapore.',
      'Añade el caldo poco a poco, removiendo constantemente y esperando a que se absorba antes de añadir más.',
      'Continúa este proceso durante 18-20 minutos hasta que el arroz esté cremoso pero al dente.',
      'Retira del fuego, añade la mantequilla y el queso parmesano. Mezcla bien.',
      'Decora con perejil fresco y sirve inmediatamente.',
    ],
    favorite: false,
  },
  {
    id: '6',
    title: 'Hamburguesa Casera',
    photoUrl: 'https://picsum.photos/seed/654/3000/2000',
    duration: 25,
    difficulty: 'Fácil',
    description:
      'Jugosa hamburguesa casera con carne de res, queso cheddar, lechuga, tomate y una salsa especial.',
    ingredients: [
      '500 g de carne molida de res',
      '4 panes de hamburguesa',
      '4 lonchas de queso cheddar',
      '1 tomate',
      'Hojas de lechuga',
      '1 cebolla',
      '4 cucharadas de mayonesa',
      '2 cucharadas de ketchup',
      '1 cucharada de mostaza',
      'Pepinillos en vinagre',
      'Sal y pimienta',
      'Aceite para cocinar',
    ],
    steps: [
      'Divide la carne en 4 porciones iguales y forma las hamburguesas. Sazónalas con sal y pimienta.',
      'Prepara la salsa especial mezclando mayonesa, ketchup y mostaza.',
      'Corta el tomate y la cebolla en rodajas finas.',
      'Calienta una sartén o parrilla y cocina las hamburguesas 4-5 minutos por lado.',
      'En el último minuto, coloca una loncha de queso sobre cada hamburguesa para que se derrita.',
      'Tuesta ligeramente los panes.',
      'Monta las hamburguesas: pan base, salsa, lechuga, hamburguesa con queso, tomate, cebolla, pepinillos y más salsa.',
      'Cubre con la tapa del pan y sirve caliente.',
    ],
    favorite: true,
  },
  {
    id: '7',
    title: 'Sopa de Lentejas',
    photoUrl: 'https://picsum.photos/seed/987/3000/2000',
    duration: 50,
    difficulty: 'Fácil',
    description:
      'Reconfortante sopa de lentejas con verduras y especias. Perfecta para días fríos y muy nutritiva.',
    ingredients: [
      '300 g de lentejas',
      '2 zanahorias',
      '2 tallos de apio',
      '1 cebolla',
      '2 dientes de ajo',
      '1 tomate grande',
      '1 hoja de laurel',
      '1 cucharadita de comino',
      '1.5 litros de caldo de verduras',
      'Aceite de oliva',
      'Sal y pimienta',
      'Perejil fresco',
    ],
    steps: [
      'Lava las lentejas y déjalas en remojo durante 30 minutos.',
      'Pica todas las verduras en cubos pequeños.',
      'En una olla grande, sofríe la cebolla y el ajo con aceite de oliva.',
      'Añade las zanahorias, el apio y el tomate. Cocina durante 5 minutos.',
      'Agrega las lentejas escurridas, el laurel y el comino.',
      'Vierte el caldo y lleva a ebullición.',
      'Reduce el fuego y cocina a fuego lento durante 30-35 minutos hasta que las lentejas estén tiernas.',
      'Sazona con sal y pimienta al gusto.',
      'Sirve caliente decorado con perejil fresco picado.',
    ],
    favorite: false,
  },
];

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-2',
    name: 'Almuerzos',
    imageUrl: 'https://picsum.photos/seed/cat2/2000/2000',
  },
  {
    id: 'cat-4',
    name: 'Cenas',
    imageUrl: 'https://picsum.photos/seed/cat3/2000/2000',
  },
];

export const MOCK_CAT_REC = [
  // Pasta Primavera
  {
    id: 1,
    id_cat: 'cat-2', // Almuerzos
    id_rec: '1',
  },

  // Pollo al Curry
  {
    id: 4,
    id_cat: 'cat-4', // Cenas
    id_rec: '2',
  },

  // Ensalada César
  {
    id: 6,
    id_cat: 'cat-4', // Cenas
    id_rec: '3',
  },

  // Tacos de Pescado
  {
    id: 8,
    id_cat: 'cat-4', // Cenas
    id_rec: '4',
  },

  // Risotto de Champiñones
  {
    id: 9,
    id_cat: 'cat-2', // Almuerzos
    id_rec: '5',
  },

  // Hamburguesa Casera
  {
    id: 11,
    id_cat: 'cat-2', // Almuerzos
    id_rec: '6',
  },
  {
    id: 12,
    id_cat: 'cat-4', // Cenas
    id_rec: '6',
  },

  // Sopa de Lentejas
  {
    id: 13,
    id_cat: 'cat-2', // Almuerzos
    id_rec: '7',
  },
  {
    id: 14,
    id_cat: 'cat-4', // Cenas
    id_rec: '7',
  },
];
