"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import type { Category } from '@/lib/menu-data';

interface CategoryFiltersProps {
  categories: (Category | 'همه')[];
  selectedCategory: Category | 'همه';
  onSelectCategory: (category: Category | 'همه') => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8 px-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          size="lg"
          onClick={() => onSelectCategory(category)}
          className="rounded-full px-6 transition-all duration-300"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
