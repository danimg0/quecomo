import { create } from 'zustand';
import { Recipe } from '../domain/recipe.entity';

interface RecipeNavState {
  selectedRecipe: Recipe | null;
  setSelectedRecipe: (r: Recipe | null) => void;
}

export const useRecipeNav = create<RecipeNavState>((set) => ({
  selectedRecipe: null,
  setSelectedRecipe: (r) => set({ selectedRecipe: r }),
}));
