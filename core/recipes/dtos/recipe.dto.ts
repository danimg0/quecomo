import { IngredientDto } from '@/core/ingredients/dtos/ingredient.dto';

export interface RecipeDto {
  _id: string;
  title: string;
  description: string;
  duration: number;
  imageUrl: string;
  steps: string[];
  ingredients: IngredientRecipeDto[];
  difficulty: string;
  created_at: Date;
  updatedAt: Date;
  __v: number;
}

export interface IngredientRecipeDto {
  ingredient: IngredientDto;
  quantity: number;
  unit: string;
  _id: string;
}
