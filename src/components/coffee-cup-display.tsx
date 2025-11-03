import React from 'react';
import type { Ingredient } from '@/lib/menu-data';

interface CoffeeCupDisplayProps {
  ingredients: Ingredient[];
}

const CoffeeCupDisplay: React.FC<CoffeeCupDisplayProps> = ({ ingredients }) => {
  const totalPercentage = ingredients.reduce((sum, ing) => sum + ing.percentage, 0);

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg
        viewBox="0 0 140 120"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        {/* Clipping Path for the cup shape */}
        <defs>
          <clipPath id="cup-clip">
            <path d="M 10 20 C 10 5, 90 5, 90 20 C 90 60, 10 60, 10 20 Z" />
          </clipPath>
        </defs>

        {/* Ingredients Layers inside the clipped path */}
        <g clipPath="url(#cup-clip)">
          {(() => {
            let accumulatedPercentage = 0;
            return [...ingredients].reverse().map((ingredient, index) => {
              const y = 20 + accumulatedPercentage * 40 / totalPercentage;
              const height = ingredient.percentage * 40 / totalPercentage;
              accumulatedPercentage += ingredient.percentage;

              return (
                <rect
                  key={index}
                  x="10"
                  y={y}
                  width="80"
                  height={height}
                  className={ingredient.color}
                />
              );
            });
          })()}
        </g>
        
        {/* Cup Outline */}
        <path
          d="M 10 20 C 10 5, 90 5, 90 20 C 90 60, 10 60, 10 20 Z"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2.5"
        />
        
        {/* Cup Handle */}
        <path
          d="M 90 35 C 115 30, 115 50, 90 45"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2.5"
        />

        {/* Wavy Separators and Text */}
        {(() => {
          let accumulatedHeight = 0;
          const reversedIngredients = [...ingredients].reverse();
          return reversedIngredients.map((ingredient, index) => {
            const layerHeight = (ingredient.percentage / totalPercentage) * 40;
            const yPosition = 20 + accumulatedHeight;
            const textY = yPosition + layerHeight / 2;
            accumulatedHeight += layerHeight;
            const separatorY = 20 + accumulatedHeight;

            return (
              <g key={`text-wave-${index}`}>
                <text
                  x="50"
                  y={textY}
                  textAnchor="middle"
                  dy="0.35em"
                  className="font-bold fill-white"
                  style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.9)', fontSize: '0.7rem' }}
                >
                  {ingredient.name}
                </text>
                {index < ingredients.length - 1 && (
                   <path
                    d={`M 15 ${separatorY} C 35 ${separatorY - 3}, 65 ${separatorY + 3}, 85 ${separatorY}`}
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
