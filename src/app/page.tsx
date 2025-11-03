"use client";

import { useState } from 'react';
import { Instagram } from 'lucide-react';
import MenuHeader from '@/components/menu-header';
import CategoryFilters from '@/components/category-filters';
import MenuItemCard from '@/components/menu-item-card';
import { menuData, categories } from '@/lib/menu-data';
import type { Category } from '@/lib/menu-data';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  const filteredItems = menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-background min-h-screen font-body flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <MenuHeader />
        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2"
          aria-label="آیتم های منو"
        >
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </section>
      </main>
      <footer className="bg-background text-center py-8 mt-16 border-t border-primary/10">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <a
            href="https://instagram.com/karen_coffee98"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-lg text-primary hover:text-primary/80 transition-colors"
          >
            <Instagram size={28} />
            <span className="font-headline text-xl font-bold tracking-wider">
              karen_coffee98
            </span>
          </a>
          <p className="text-muted-foreground text-xs mt-2">
            طراحی و توسعه توسط استودیو فایربیس
          </p>
        </div>
      </footer>
    </div>
  );
}
