import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { MenuItem } from '@/lib/menu-data';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { name, price, imageUrl, imageHint } = item;

  return (
    <Card className="group w-full overflow-hidden transition-all duration-300 ease-in-out bg-card border border-border/50 hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col">
       <div className="relative w-full h-56">
          <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
       </div>
      <CardContent className="p-5 mt-auto flex items-end justify-between">
        <div>
            <h3 className="font-headline text-2xl font-bold text-foreground">{name}</h3>
        </div>
        <p className="text-2xl font-semibold text-primary bg-background/50 px-3 py-1 rounded-md">{price}</p>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
