// Colores de marca centralizados.
// Para clases de Tailwind usa los tokens del tailwind.config (bg-primary, etc.).
// Estas constantes son para props que exigen un color en JS (Ionicons, spinners, navegación...).
export const Colors = {
  primary: '#F97316', // orange-500 — color de marca
  primaryDark: '#EA580C', // orange-600
  muted: '#9CA3AF', // gray-400 — iconos secundarios
  danger: '#EF4444', // red-500

  // Paleta de navegación (light)
  light: {
    background: '#FAFAFA',
    card: '#FFFFFF',
    text: '#111827',
    border: '#E5E7EB',
  },
  // Paleta de navegación (dark)
  dark: {
    background: '#0A0A0A',
    card: '#171717',
    text: '#F5F5F5',
    border: '#262626',
  },
};
