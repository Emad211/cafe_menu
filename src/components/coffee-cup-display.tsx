import React from 'react';
import type { Ingredient } from '@/lib/menu-data';

interface CoffeeCupDisplayProps {
  ingredients: Ingredient[];
}

const CoffeeCupDisplay: React.FC<CoffeeCupDisplayProps> = ({ ingredients }) => {
  const totalPercentage = ingredients.reduce((sum, ing) => sum + ing.percentage, 0);
  let accumulatedPercentage = 0;

  return (
    <div className="relative w-32 h-36 flex items-center justify-center">
      <svg
        viewBox="0 0 100 110"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
      >
        {/* Cup body as a clipping path */}
        <defs>
          <clipPath id="cup-clip">
            <path d="M 10 10 H 90 Q 95 55, 90 100 H 10 Q 5 55, 10 10 Z" />
          </clipPath>
        </defs>

        {/* Cup Outline */}
        <path
          d="M 10 10 H 90 Q 95 55, 90 100 H 10 Q 5 55, 10 10 Z"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
        />
        {/* Cup Handle */}
        <path
          d="M 90 25 C 110 35, 110 65, 90 75"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
        />
         {/* Top Lip */}
         <path 
          d="M 10 10 C 20 0, 80 0, 90 10"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
        />

        {/* Ingredients Layers */}
        <g clipPath="url(#cup-clip)">
          {ingredients.map((ingredient, index) => {
            const y = 100 - (accumulatedPercentage + ingredient.percentage) * 90 / totalPercentage;
            const height = ingredient.percentage * 90 / totalPercentage;
            accumulatedPercentage += ingredient.percentage;

            return (
              <rect
                key={index}
                x="5"
                y={10 + y}
                width="90"
                height={height}
                className={ingredient.color}
              />
            );
          })}
        </g>

        {/* Wavy Separators and Text */}
        {(() => {
          let accumulatedHeight = 0;
          return ingredients.map((ingredient, index) => {
            const layerHeight = (ingredient.percentage / totalPercentage) * 90;
            const yPosition = 10 + accumulatedHeight;
            const textY = yPosition + layerHeight / 2;
            accumulatedHeight += layerHeight;
            const separatorY = 10 + accumulatedHeight;

            return (
              <g key={`text-wave-${index}`}>
                <text
                  x="50"
                  y={textY}
                  textAnchor="middle"
                  dy="0.35em"
                  className="text-sm font-bold fill-white"
                  style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.8)' }}
                >
                  {ingredient.name}
                </text>
                {index < ingredients.length - 1 && (
                   <path
                    d={`M 10 ${separatorY} C 30 ${separatorY - 5}, 70 ${separatorY + 5}, 90 ${separatorY}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeLinecap="round"
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
