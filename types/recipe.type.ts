export type RecipeDifficulty = 'Fácil' | 'Media' | 'Difícil';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  duration: number;
  difficulty: RecipeDifficulty;
  ingredients: string[]; //sera un array de tipo ingrediente quizas en el futuro
  steps: string[];
  favorite: boolean;
}
