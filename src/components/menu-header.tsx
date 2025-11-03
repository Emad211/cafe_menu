import Image from 'next/image';
import React from 'react';

const MenuHeader = () => {
  return (
    <header className="text-center my-12 md:my-16 flex flex-col items-center">
        <div className="mb-6 rounded-full overflow-hidden border-4 border-primary/80 shadow-lg w-32 h-32">
            <Image
              // نکته: برای تغییر لوگو، این آدرس را به "/logo.jpg" تغییر دهید
              src="https://picsum.photos/seed/karen-cafe-logo/128/128"
              alt="لوگو کافه کارن"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              data-ai-hint="cafe logo"
            />
        </div>
      <h1 className="font-headline text-5xl md:text-6xl font-black text-foreground tracking-tight">
        کافه کارن
      </h1>
      <p className="mt-3 text-2xl text-primary/90 font-light">
        منوی دیجیتال
      </p>
    </header>
  );
};

export default MenuHeader;
