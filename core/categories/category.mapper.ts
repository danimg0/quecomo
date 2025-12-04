// lib/mappers.ts

import { Category } from './domain/category.entity';
import { CategoryDto } from './dtos/category.dto';

// Mapper
export const mapBackendCategoryToFrontend = (
  backendData: CategoryDto
): Category => {
  return {
    id: backendData._id,
    name: backendData.name,
    imageUrl: backendData.imageUrl,
  };
};
