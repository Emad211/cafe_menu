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
    <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12 border border-border bg-card p-2 rounded-lg">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'ghost'}
          onClick={() => onSelectCategory(category)}
          className="rounded-md flex-grow md:flex-grow-0 px-6 py-2 text-base font-semibold transition-all duration-200"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
