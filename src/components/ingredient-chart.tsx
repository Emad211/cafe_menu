import React from 'react';
import type { Ingredient } from '@/lib/menu-data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface IngredientChartProps {
  ingredients: Ingredient[];
}

const IngredientChart: React.FC<IngredientChartProps> = ({ ingredients }) => {
  return (
    <div className="mt-3">
      <div className="flex w-full h-3 rounded-full overflow-hidden" dir="ltr">
        <TooltipProvider>
          {ingredients.map((ingredient, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className={`h-full ${ingredient.color} transition-all duration-300`}
                  style={{ width: `${ingredient.percentage}%` }}
                ></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{`${ingredient.name} (${ingredient.percentage}%)`}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default IngredientChart;
