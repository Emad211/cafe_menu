import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { MenuItem } from '@/lib/menu-data';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { name, price, Icon } = item;

  return (
    <Card className="group w-full overflow-hidden text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-accent">
      <CardContent className="p-6 flex flex-col items-center justify-start gap-4">
        <div className="text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon size={48} strokeWidth={1.5} />
        </div>
        <h3 className="font-headline text-xl font-bold text-foreground">{name}</h3>
        <p className="text-lg font-semibold text-muted-foreground">{price}</p>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
