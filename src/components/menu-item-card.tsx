import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { MenuItem } from '@/lib/menu-data';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { name, price, imageUrl, imageHint } = item;

  return (
    <Card className="group w-full overflow-hidden transition-all duration-300 ease-in-out bg-secondary/30 hover:bg-secondary/60 border-2 border-secondary/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
       <CardHeader className="p-0">
         <div className="relative w-full h-48">
            <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={imageHint}
            />
         </div>
       </CardHeader>
      <CardContent className="p-5 flex flex-col items-start justify-start gap-2">
        <CardTitle className="font-headline text-2xl font-bold text-foreground">{name}</CardTitle>
        <CardDescription className="text-xl font-semibold text-primary">{price}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
