import { ingredientMapper } from '../../ingredients/ingredient.mapper';
import { Recipe } from '../domain/recipe.entity';
import { RecipeDto } from '../dtos/recipe.dto';

function mapDifficulty(diff: string) {
  switch (diff) {
    case 'EASY':
      return 'Fácil';
    case 'MEDIUM':
      return 'Media';
    case 'HARD':
      return 'Difícil';
    default:
      return 'Media';
  }
}

//Traductor
// Digo que recibo en esta funcion el objeto del backend y sale un objeto recipe (como yo lo tengo en el frontend)
export const mapBackendRecipeToFrontend = (backendData: RecipeDto): Recipe => {
  return {
    id: backendData._id,
    title: backendData.title,
    description: backendData.description,
    difficulty: mapDifficulty(backendData.difficulty),
    duration: backendData.duration,
    photoUrl: backendData.imageUrl,
    steps: backendData.steps,
    ingredients: ingredientMapper(backendData.ingredients),
  };
};
