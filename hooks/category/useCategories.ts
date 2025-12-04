import { getAllCategories } from '@/core/categories/actions/get-categories';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const categories = getAllCategories();

      return categories;
    },
  });

  return {
    useCategories,

    categories: categoriesQuery.data,
  };
};
