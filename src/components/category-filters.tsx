"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import type { Category } from '@/lib/menu-data';

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-10 md:mb-12 px-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'secondary'}
          size="lg"
          onClick={() => onSelectCategory(category)}
          className="rounded-full px-8 py-6 text-base font-bold transition-all duration-300 hover:scale-105"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
