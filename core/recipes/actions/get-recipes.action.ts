import { queComoApi } from '@/api/axios.config';
import { RecipeDto } from '../dtos/recipe.dto';
import { mapBackendRecipeToFrontend } from '../mappers/recipe.mapper';

export const getAllRecipes = async (page: number, limit: number = 10) => {
  try {
    //Recibo la respuesta del backend, que es de tipo RecipeDto
    const { data } = await queComoApi.get<RecipeDto[]>(
      `/recipes?page=${page}&limit=${limit}`
    );

    //Mapeo cada recipedto para que sea mi dominio normal
    const dataMapped = data.map((dto) => mapBackendRecipeToFrontend(dto));
    return dataMapped;
  } catch (error) {
    console.log('Error en action', error);
  }
};
