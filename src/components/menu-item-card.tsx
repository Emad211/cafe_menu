import React from 'react';
import { Card } from '@/components/ui/card';
import type { MenuItem } from '@/lib/menu-data';
import CoffeeCupDisplay from './coffee-cup-display';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { name, price, description, ingredients } = item;

  return (
    <Card className="menu-item-card w-full bg-transparent border-0 border-b border-dashed border-border/50 rounded-none shadow-none p-4 flex flex-col transition-all duration-300 hover:bg-card hover:-translate-y-1">
      <div className="flex justify-between items-start w-full gap-4">
        <div className="flex-grow">
            <h3 className="font-headline text-xl font-semibold text-foreground">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
            <p className="text-xl font-bold text-primary">{price}</p>
        </div>
      </div>
      
      {ingredients && ingredients.length > 0 && (
        <div className="mt-4 w-full flex justify-center">
            <CoffeeCupDisplay ingredients={ingredients} />
        </div>
      )}
    </Card>
  );
};

export default MenuItemCard;
