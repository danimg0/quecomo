import { Recipe } from '@/types/recipe.type';

//Dato que viene del backend

interface BackendRecipe {
  recipe_id: string;
  recipe_title: string;
  main_image_url: string;
  duration: number;
  level: number;
}

function mapDifficulty(level: number) {
  switch (level) {
    case 1:
      return 'Fácil';
    case 2:
      return 'Media';
    case 3:
      return 'Difícil';
    default:
      return 'Media';
  }
}

//Traductor
// Digo que recibo en esta funcion el objeto del backend y sale un objeto recipe (como yo lo tengo en el frontend)
const mapBackendRecipeToFrontend = (backendData: BackendRecipe): Recipe => {
  return {
    id: backendData.recipe_id,
    title: backendData.recipe_title,
    difficulty: mapDifficulty(backendData.level),
    duration: backendData.duration,
    photoUrl: backendData.main_image_url,
  };
};
