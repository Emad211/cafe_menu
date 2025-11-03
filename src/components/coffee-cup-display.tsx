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
            <path d="M 15 10 H 85 L 80 100 H 20 L 15 10 Z" />
          </clipPath>
        </defs>

        {/* Cup Outline */}
        <path
          d="M 15 10 H 85 L 80 100 H 20 L 15 10 Z"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
        />
        {/* Cup Handle */}
        <path
          d="M 85 25 C 105 35, 105 65, 85 75"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
        />
         {/* Top Lip */}
         <path 
          d="M 15 10 C 25 0, 75 0, 85 10"
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
                x="15"
                y={10 + y}
                width="70"
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
                  className="font-bold fill-white"
                  style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.8)', fontSize: '0.6rem' }}
                >
                  {ingredient.name}
                </text>
                {index < ingredients.length - 1 && (
                   <path
                    d={`M 20 ${separatorY} C 40 ${separatorY - 5}, 60 ${separatorY + 5}, 80 ${separatorY}`}
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
