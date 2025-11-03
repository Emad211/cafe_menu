import type { LucideIcon } from 'lucide-react';

export type Category = 'بار گرم' | 'بار سرد';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: Category;
  imageUrl: string;
  imageHint: string;
}

export const categories: Category[] = ['بار گرم', 'بار سرد'];

export const menuData: MenuItem[] = [
  // بار گرم
  { id: 1, name: 'اسپرسو', price: '۶۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/espresso/400/400', imageHint: 'espresso shot' },
  { id: 2, name: 'امریکانو', price: '۸۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/americano/400/400', imageHint: 'americano coffee' },
  { id: 3, name: 'لاته', price: '۹۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/latte/400/400', imageHint: 'latte art' },
  { id: 4, name: 'کارامل ماکیاتو', price: '۱۱۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/caramel-macchiato/400/400', imageHint: 'caramel macchiato' },
  { id: 5, name: 'موکا', price: '۱۱۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/mocha/400/400', imageHint: 'mocha coffee' },
  { id: 6, name: 'کاپوچینو', price: '۹۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/cappuccino/400/400', imageHint: 'cappuccino foam' },
  { id: 7, name: 'نسکافه', price: '۹۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/nescafe/400/400', imageHint: 'instant coffee' },
  { id: 8, name: 'نسکافه مخصوص', price: '۱۱۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/special-nescafe/400/400', imageHint: 'specialty coffee' },
  { id: 9, name: 'هات چاکلت', price: '۹۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/hot-chocolate/400/400', imageHint: 'hot chocolate' },
  { id: 10, name: 'دمنوش', price: '۴۰٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/herbal-tea/400/400', imageHint: 'herbal tea' },
  { id: 11, name: 'چای', price: '۲۵٬۰۰۰ تومان', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/tea/400/400', imageHint: 'black tea' },

  // بار سرد
  { id: 12, name: 'آیس کافی', price: '۹۰٬۰۰۰ تومان', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/ice-coffee/400/400', imageHint: 'iced coffee' },
  { id: 13, name: 'آیس لاته', price: '۱۱۰٬۰۰۰ تومان', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/ice-latte/400/400', imageHint: 'iced latte' },
  { id: 14, name: 'آیس کارامل', price: '۱۳۰٬۰۰۰ تومان', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/ice-caramel/400/400', imageHint: 'iced caramel' },
  { id: 15, name: 'آیس موکا', price: '۱۳۰٬۰۰۰ تومان', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/ice-mocha/400/400', imageHint: 'iced mocha' },
  { id: 16, name: 'افوکاتو', price: '۱۰۰٬۰۰۰ تومان', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/affogato/400/400', imageHint: 'affogato dessert' },
];
