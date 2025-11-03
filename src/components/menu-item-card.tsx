import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { MenuItem } from '@/lib/menu-data';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { name, price, icon } = item;
  // @ts-ignore
  const IconComponent = LucideIcons[icon] as React.ElementType;

  return (
    <Card className="w-full bg-transparent border-0 border-b border-dashed border-border/50 rounded-none shadow-none p-4 flex justify-between items-center transition-all duration-300 hover:bg-card">
      <div className="flex items-center gap-4">
        {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
        <h3 className="font-headline text-xl font-semibold text-foreground">{name}</h3>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-grow border-t border-dashed border-border/30"></div>
        <p className="text-xl font-bold text-primary">{price}</p>
      </div>
    </Card>
  );
};

export default MenuItemCard;
