import React from 'react';
import Image from 'next/image';

const MenuHeader = () => {
  return (
    <header className="text-center my-12 md:my-16 flex flex-col items-center">
      <div className="mb-6">
        <Image
          src="https://picsum.photos/seed/karen-logo/120/120"
          alt="لوگوی کافه کارن"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
          data-ai-hint="cafe logo"
        />
      </div>
       <div className="relative mb-4">
         <h1 className="font-headline text-6xl md:text-7xl font-black text-foreground tracking-tight">
           کافه کارن
         </h1>
         <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></div>
       </div>
      <p className="mt-4 text-2xl text-muted-foreground font-light">
        لحظاتی گرم و خاطره‌انگیز
      </p>
    </header>
  );
};

export default MenuHeader;
