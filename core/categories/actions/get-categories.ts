import { queComoApi } from '@/api/axios.config';
import { mapBackendCategoryToFrontend } from '../category.mapper';
import { CategoryDto } from '../dtos/category.dto';

export const getAllCategories = async () => {
  try {
    const { data } = await queComoApi.get<CategoryDto[]>('/categories');

    const categories = data.map((cat) => mapBackendCategoryToFrontend(cat));

    return categories;
  } catch (error) {
    console.log('error en actioin', error);
  }
};
