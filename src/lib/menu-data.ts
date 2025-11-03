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
  { id: 1, name: 'اسپرسو', price: '۶۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/espresso-shot/600/400', imageHint: 'espresso shot' },
  { id: 2, name: 'امریکانو', price: '۸۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/americano-coffee/600/400', imageHint: 'americano coffee' },
  { id: 3, name: 'لاته', price: '۹۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/latte-art/600/400', imageHint: 'latte art' },
  { id: 4, name: 'کارامل ماکیاتو', price: '۱۱۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/caramel-macchiato/600/400', imageHint: 'caramel macchiato' },
  { id: 5, name: 'موکا', price: '۱۱۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/mocha-coffee/600/400', imageHint: 'mocha coffee' },
  { id: 6, name: 'کاپوچینو', price: '۹۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/cappuccino-cup/600/400', imageHint: 'cappuccino foam' },
  { id: 7, name: 'نسکافه', price: '۹۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/instant-coffee/600/400', imageHint: 'instant coffee' },
  { id: 8, name: 'نسکافه مخصوص', price: '۱۱۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/specialty-coffee/600/400', imageHint: 'specialty coffee' },
  { id: 9, name: 'هات چاکلت', price: '۹۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/hot-chocolate/600/400', imageHint: 'hot chocolate' },
  { id: 10, name: 'دمنوش', price: '۴۰', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/herbal-tea/600/400', imageHint: 'herbal tea' },
  { id: 11, name: 'چای', price: '۲۵', category: 'بار گرم', imageUrl: 'https://picsum.photos/seed/tea-cup/600/400', imageHint: 'black tea' },

  // بار سرد
  { id: 12, name: 'آیس کافی', price: '۹۰', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/iced-coffee/600/400', imageHint: 'iced coffee' },
  { id: 13, name: 'آیس لاته', price: '۱۱۰', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/iced-latte/600/400', imageHint: 'iced latte' },
  { id: 14, name: 'آیس کارامل', price: '۱۳۰', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/iced-caramel/600/400', imageHint: 'iced caramel' },
  { id: 15, name: 'آیس موکا', price: '۱۳۰', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/iced-mocha/600/400', imageHint: 'iced mocha' },
  { id: 16, name: 'افوکاتو', price: '۱۰۰', category: 'بار سرد', imageUrl: 'https://picsum.photos/seed/affogato-dessert/600/400', imageHint: 'affogato dessert' },
];
