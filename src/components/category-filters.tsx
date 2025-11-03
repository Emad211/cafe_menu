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
    <div className="flex justify-center flex-wrap gap-4 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'secondary'}
          onClick={() => onSelectCategory(category)}
          className="rounded-lg px-6 py-2 text-lg font-bold transition-all duration-300 transform hover:scale-105"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
