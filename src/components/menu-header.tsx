import Image from 'next/image';
import React from 'react';

const MenuHeader = () => {
  return (
    <header className="text-center my-10 md:my-16 flex flex-col items-center">
        <Image
          src="https://picsum.photos/seed/karen-cafe-logo/120/120"
          alt="لوگو کافه کارن"
          width={120}
          height={120}
          className="rounded-full mb-6 border-4 border-primary/50 shadow-lg"
          data-ai-hint="cafe logo"
        />
      <h1 className="font-headline text-6xl md:text-7xl font-black text-foreground tracking-tighter">
        کافه کارن
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-primary font-bold">
        منوی دیجیتال
      </p>
    </header>
  );
};

export default MenuHeader;
