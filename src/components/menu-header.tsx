import React from 'react';

const MenuHeader = () => {
  return (
    <header className="text-center my-12 md:my-16 flex flex-col items-center">
       <div className="relative mb-4">
         <h1 className="font-headline text-6xl md:text-7xl font-black text-foreground tracking-tight">
           کافه کارن
         </h1>
         <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></div>
       </div>
      <p className="mt-4 text-2xl text-muted-foreground font-light">
        منوی دیجیتال
      </p>
    </header>
  );
};

export default MenuHeader;
