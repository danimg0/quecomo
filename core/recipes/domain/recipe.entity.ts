export type RecipeDifficulty = 'Fácil' | 'Media' | 'Difícil';

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  duration: number;
  difficulty: RecipeDifficulty;
  ingredients: Ingredient[];
  steps: string[];
}
