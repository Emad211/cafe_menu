import React from 'react';
import type { Ingredient } from '@/lib/menu-data';

interface CoffeeCupDisplayProps {
  ingredients: Ingredient[];
}

const CoffeeCupDisplay: React.FC<CoffeeCupDisplayProps> = ({ ingredients }) => {
  const totalPercentage = ingredients.reduce((sum, ing) => sum + ing.percentage, 0);
  let accumulatedPercentage = 0;

  return (
    <div className="relative w-36 h-48 flex items-center justify-center">
      <svg
        viewBox="0 0 100 130"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        {/* Clipping Path for the glass shape */}
        <defs>
          <clipPath id="glass-clip">
            <path d="M 15 10 H 85 L 80 120 H 20 L 15 10 Z" />
          </clipPath>
        </defs>

        {/* Glass Outline */}
        <path
          d="M 15 10 H 85 L 80 120 H 20 L 15 10 Z"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2.5"
        />
        {/* Top Rim */}
        <ellipse 
          cx="50" 
          cy="10" 
          rx="35" 
          ry="5"
          fill="transparent"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2.5"
        />

        {/* Ingredients Layers inside the clipped path */}
        <g clipPath="url(#glass-clip)">
          {ingredients.map((ingredient, index) => {
            const y = 110 - (accumulatedPercentage + ingredient.percentage) * 110 / totalPercentage;
            const height = ingredient.percentage * 110 / totalPercentage;
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
            const layerHeight = (ingredient.percentage / totalPercentage) * 110;
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
                  style={{ textShadow: '0px 0px 4px rgba(0,0,0,0.9)', fontSize: '0.7rem' }}
                >
                  {ingredient.name}
                </text>
                {index < ingredients.length - 1 && (
                   <path
                    d={`M 20 ${separatorY} C 40 ${separatorY - 4}, 60 ${separatorY + 4}, 80 ${separatorY}`}
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
