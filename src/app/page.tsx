"use client";

import { useState } from 'react';
import MenuHeader from '@/components/menu-header';
import CategoryFilters from '@/components/category-filters';
import MenuItemCard from '@/components/menu-item-card';
import { menuData, categories } from '@/lib/menu-data';
import type { Category } from '@/lib/menu-data';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'همه'>('همه');

  const allCategories: (Category | 'همه')[] = ['همه', ...categories];

  const filteredItems = selectedCategory === 'همه'
    ? menuData
    : menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <MenuHeader />
        <CategoryFilters
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          aria-label="آیتم های منو"
        >
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </section>
      </main>
      <footer className="text-center py-10 text-muted-foreground text-sm">
        <p>طراحی و توسعه توسط استودیو فایربیس</p>
      </footer>
    </div>
  );
}
