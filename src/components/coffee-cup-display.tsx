import React from 'react';
import type { Ingredient } from '@/lib/menu-data';

interface CoffeeCupDisplayProps {
  ingredients: Ingredient[];
}

const CoffeeCupDisplay: React.FC<CoffeeCupDisplayProps> = ({ ingredients }) => {
  const totalPercentage = ingredients.reduce((sum, ing) => sum + ing.percentage, 0);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg
        viewBox="0 0 160 120"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        {/* Clipping Path for the cup shape */}
        <defs>
          <clipPath id="cup-clip">
            <path d="M 10 20 C 10 0, 110 0, 110 20 C 110 70, 10 70, 10 20 Z" />
          </clipPath>
        </defs>

        {/* Ingredients Layers inside the clipped path */}
        <g clipPath="url(#cup-clip)">
          {(() => {
            let accumulatedPercentage = 0;
            return [...ingredients].reverse().map((ingredient, index) => {
              const y = 20 + accumulatedPercentage * 50 / totalPercentage;
              const height = ingredient.percentage * 50 / totalPercentage;
              accumulatedPercentage += ingredient.percentage;

              return (
                <rect
                  key={index}
                  x="10"
                  y={y}
                  width="100"
                  height={height}
                  className={ingredient.color}
                />
              );
            });
          })()}
        </g>
        
        {/* Cup Outline */}
        <path
          d="M 10 20 C 10 0, 110 0, 110 20 C 110 70, 10 70, 10 20 Z"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
        />
        
        {/* Cup Handle */}
        <path
          d="M 110 35 C 130 35, 130 55, 110 55"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
        />

        {/* Wavy Separators and Text */}
        {(() => {
          let accumulatedHeight = 0;
          const reversedIngredients = [...ingredients].reverse();
          return reversedIngredients.map((ingredient, index) => {
            const layerHeight = (ingredient.percentage / totalPercentage) * 50;
            const yPosition = 20 + accumulatedHeight;
            const textY = yPosition + layerHeight / 2;
            accumulatedHeight += layerHeight;
            const separatorY = 20 + accumulatedHeight;

            return (
              <g key={`text-wave-${index}`}>
                <text
                  x="60"
                  y={textY}
                  textAnchor="middle"
                  dy="0.35em"
                  className="font-bold fill-white"
                  style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.9)', fontSize: '0.8rem' }}
                >
                  {ingredient.name}
                </text>
                {index < ingredients.length - 1 && (
                   <path
                    d={`M 15 ${separatorY} C 40 ${separatorY - 4}, 80 ${separatorY + 4}, 105 ${separatorY}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    clipPath="url(#cup-clip)"
                  />
                )}
              </g>
            );
          });
        })()}
      </svg>
    </div>
  );
};

export default CoffeeCupDisplay;
