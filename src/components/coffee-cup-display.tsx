import React from 'react';
import type { Ingredient } from '@/lib/menu-data';

interface CoffeeCupDisplayProps {
  ingredients: Ingredient[];
}

const CoffeeCupDisplay: React.FC<CoffeeCupDisplayProps> = ({ ingredients }) => {
  return (
    <div className="relative w-28 h-32">
      {/* Cup body */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[95%] border-4 border-t-0 border-stone-400 rounded-b-3xl flex flex-col-reverse overflow-hidden">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className={`flex items-center justify-center text-center ${ingredient.color}`}
            style={{ height: `${ingredient.percentage}%` }}
          >
            <span 
              className="text-xs font-bold text-white p-1 leading-tight"
              style={{ textShadow: '0px 0px 3px rgba(0,0,0,0.7)' }}
            >
              {ingredient.name}
            </span>
          </div>
        ))}
      </div>
      {/* Cup handle */}
      <div className="absolute top-2 -right-3 w-8 h-12 border-4 border-l-0 border-stone-400 rounded-r-full"></div>
       {/* Top lip */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[105%] h-2 border-4 border-b-0 border-stone-400 rounded-t-lg bg-background"></div>
    </div>
  );
};

export default CoffeeCupDisplay;
