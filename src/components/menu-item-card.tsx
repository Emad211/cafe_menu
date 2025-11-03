import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { MenuItem } from '@/lib/menu-data';
import { Separator } from './ui/separator';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { name, price, Icon } = item;

  return (
    <Card className="group w-full overflow-hidden transition-all duration-300 ease-in-out bg-secondary/50 hover:bg-secondary border-2 border-transparent hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
      <CardContent className="p-5 flex flex-col items-center justify-start gap-4 text-center">
        <div className="text-primary p-4 bg-background rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={36} strokeWidth={2} />
        </div>
        <h3 className="font-headline text-2xl font-bold text-foreground">{name}</h3>
        <Separator className="w-1/4 bg-primary/50" />
        <p className="text-xl font-semibold text-primary">{price}</p>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
