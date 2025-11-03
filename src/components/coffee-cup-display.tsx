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
        viewBox="0 0 32 32"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        <defs>
          <clipPath id="cup-clip">
             <path d="M 1 14.504 C 1 21.662 6.562 27.06 13.438 27.06 C 20.377 27.06 25.877 21.724 25.877 14.689 L 26.909 11 H 1 V 14.504 Z" />
          </clipPath>
        </defs>

        {/* Ingredients Layers inside the clipped path */}
        <g clipPath="url(#cup-clip)">
          {(() => {
            let accumulatedPercentage = 0;
            const reversedIngredients = [...ingredients].reverse();
            return reversedIngredients.map((ingredient, index) => {
              const layerHeight = (ingredient.percentage / totalPercentage) * 16.06;
              const y = 11 + accumulatedPercentage;
              accumulatedPercentage += layerHeight;

              return (
                <rect
                  key={index}
                  x="1"
                  y={y}
                  width="26"
                  height={layerHeight + 0.5} // Add a little overlap to prevent gaps
                  className={ingredient.color}
                />
              );
            });
          })()}
        </g>
        
        {/* Cup Outline from user SVG */}
        <path
            fill="hsl(var(--card))"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="0.5"
            d="M 12.631 28 H 9 c -0.276 0 -0.5 0.224 -0.5 0.5 S 8.724 29 9 29 h 9 c 0.276 0 0.5 -0.224 0.5 -0.5 S 18.276 28 18 28 h -2.689 c 3.27 -0.267 6.107 -1.491 8.259 -3.402 c 0.984 1.047 2.326 1.641 3.758 1.641 c 2.868 0 5.201 -2.338 5.201 -5.212 c 0 -2.705 -2.074 -4.909 -4.708 -5.162 c 0.03 -0.386 0.056 -0.773 0.056 -1.171 l 0.036 -4.189 c 0.001 -0.133 -0.051 -0.262 -0.145 -0.356 C 27.674 10.053 27.547 10 27.413 10 H 0.5 C 0.224 10 0 10.224 0 10.5 v 4.004 C 0 21.802 5.345 27.398 12.631 28 Z M 31.529 21.026 c 0 2.323 -1.885 4.212 -4.201 4.212 c -1.156 0 -2.227 -0.501 -3.022 -1.351 c 1.789 -1.87 2.984 -4.276 3.396 -7.036 C 29.841 17.045 31.529 18.832 31.529 21.026 Z M 1 11 h 25.909 l -0.032 3.689 c 0 7.168 -5.441 12.371 -12.938 12.371 C 6.562 27.06 1 21.662 1 14.504 V 11 Z"
        />

        {/* Wavy Separators and Text */}
        {(() => {
          let accumulatedHeight = 0;
          const reversedIngredients = [...ingredients].reverse();
          return reversedIngredients.map((ingredient, index) => {
             const layerHeight = (ingredient.percentage / totalPercentage) * 16.06;
             const yPosition = 11 + accumulatedHeight;
             const textY = yPosition + layerHeight / 2;
             accumulatedHeight += layerHeight;
             const separatorY = 11 + accumulatedHeight;

            return (
              <g key={`text-wave-${index}`}>
                <text
                  x="13.5"
                  y={textY}
                  textAnchor="middle"
                  dy="0.35em"
                  className="font-bold fill-white"
                  style={{ fontSize: '0.6rem', textShadow: '0px 0px 4px rgba(0,0,0,0.9)' }}
                >
                  {ingredient.name}
                </text>
                {index < ingredients.length - 1 && (
                   <path
                    d={`M 2 ${separatorY} C 8 ${separatorY - 1}, 18 ${separatorY + 1}, 25 ${separatorY}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
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
