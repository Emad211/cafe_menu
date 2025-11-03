export type Category = 'بار گرم' | 'بار سرد';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: Category;
  description: string;
}

export const categories: Category[] = ['بار گرم', 'بار سرد'];

export const menuData: MenuItem[] = [
  // بار گرم
  { id: 1, name: 'اسپرسو', price: '۶۰', category: 'بار گرم', description: 'قهوه غلیظ و خالص' },
  { id: 2, name: 'امریکانو', price: '۸۰', category: 'بار گرم', description: 'اسپرسو و آب داغ' },
  { id: 3, name: 'لاته', price: '۹۰', category: 'بار گرم', description: 'اسپرسو و شیر بخار داده شده' },
  { id: 4, name: 'کارامل ماکیاتو', price: '۱۱۰', category: 'بار گرم', description: 'اسپرسو، شیر، سس کارامل' },
  { id: 5, name: 'موکا', price: '۱۱۰', category: 'بار گرم', description: 'اسپرسو، شکلات، شیر' },
  { id: 6, name: 'کاپوچینو', price: '۹۰', category: 'بار گرم', description: 'اسپرسو، شیر، فوم شیر' },
  { id: 7, name: 'نسکافه', price: '۹۰', category: 'بار گرم', description: 'قهوه فوری و شیر' },
  { id: 8, name: 'نسکافه مخصوص', price: '۱۱۰', category: 'بار گرم', description: 'قهوه فوری، شیر، خامه' },
  { id: 9, name: 'هات چاکلت', price: '۹۰', category: 'بار گرم', description: 'شکلات داغ و شیر' },
  { id: 10, name: 'دمنوش', price: '۴۰', category: 'بار گرم', description: 'ترکیبی از گیاهان معطر' },
  { id: 11, name: 'چای', price: '۲۵', category: 'بار گرم', description: 'چای سیاه کلاسیک' },

  // بار سرد
  { id: 12, name: 'آیس کافی', price: '۹۰', category: 'بار سرد', description: 'قهوه سرد و یخ' },
  { id: 13, name: 'آیس لاته', price: '۱۱۰', category: 'بار سرد', description: 'اسپرسو، شیر سرد، یخ' },
  { id: 14, name: 'آیس کارامل', price: '۱۳۰', category: 'بار سرد', description: 'اسپرسو، شیر، سس کارامل، یخ' },
  { id: 15, name: 'آیس موکا', price: '۱۳۰', category: 'بار سرد', description: 'اسپرسو، شکلات، شیر، یخ' },
  { id: 16, name: 'افوکاتو', price: '۱۰۰', category: 'بار سرد', description: 'اسپرسو داغ روی بستنی وانیلی' },
];
