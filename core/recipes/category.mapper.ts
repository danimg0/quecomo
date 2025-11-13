// lib/mappers.ts

import { Category } from '@/types/category.type';

// Respuesta del backend
interface BackendCategory {
  category_id: string;
  category_title: string;
  cover_image: {
    url: string;
    alt_text: string;
  };
}

// Mapper
export const mapBackendCategoryToFrontend = (
  backendData: BackendCategory
): Category => {
  return {
    id: backendData.category_id,
    name: backendData.category_title,
    imageUrl: backendData.cover_image.url,
  };
};
