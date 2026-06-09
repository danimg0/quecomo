import { Redirect } from 'expo-router';

// Navegación libre: cualquiera (invitado o logueado) entra directo a la app.
// El login solo se exige en Favoritos y Perfil (ver guardas en esas pantallas).
export default function Index() {
  return <Redirect href={'/home'} />;
}
