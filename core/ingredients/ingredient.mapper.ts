import { IngredientRecipeDto } from '../recipes/dtos/recipe.dto';
import { Ingredient } from './domain/ingredient.entity';

//Sobrecarga de funciones
export function ingredientMapper(ingredient: IngredientRecipeDto): Ingredient;
export function ingredientMapper(
  ingredient: IngredientRecipeDto[]
): Ingredient[];

export function ingredientMapper(
  ingredient: IngredientRecipeDto | IngredientRecipeDto[]
): Ingredient | Ingredient[] {
  if (Array.isArray(ingredient)) {
    return ingredient.map((ing) => ({
      id: ing._id,
      name: ing.ingredient.name,
      quantity: ing.quantity,
      unit: ing.unit,
    }));
  }

  return {
    id: ingredient._id,
    name: ingredient.ingredient.name,
    quantity: ingredient.quantity,
    unit: ingredient.unit,
  };
}
