export type Category = 'بار گرم' | 'بار سرد';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: Category;
}

export const categories: Category[] = ['بار گرم', 'بار سرد'];

export const menuData: MenuItem[] = [
  // بار گرم
  { id: 1, name: 'اسپرسو', price: '۶۰', category: 'بار گرم' },
  { id: 2, name: 'امریکانو', price: '۸۰', category: 'بار گرم' },
  { id: 3, name: 'لاته', price: '۹۰', category: 'بار گرم' },
  { id: 4, name: 'کارامل ماکیاتو', price: '۱۱۰', category: 'بار گرم' },
  { id: 5, name: 'موکا', price: '۱۱۰', category: 'بار گرم' },
  { id: 6, name: 'کاپوچینو', price: '۹۰', category: 'بار گرم' },
  { id: 7, name: 'نسکافه', price: '۹۰', category: 'بار گرم' },
  { id: 8, name: 'نسکافه مخصوص', price: '۱۱۰', category: 'بار گرم' },
  { id: 9, name: 'هات چاکلت', price: '۹۰', category: 'بار گرم' },
  { id: 10, name: 'دمنوش', price: '۴۰', category: 'بار گرم' },
  { id: 11, name: 'چای', price: '۲۵', category: 'بار گرم' },

  // بار سرد
  { id: 12, name: 'آیس کافی', price: '۹۰', category: 'بار سرد' },
  { id: 13, name: 'آیس لاته', price: '۱۱۰', category: 'بار سرد' },
  { id: 14, name: 'آیس کارامل', price: '۱۳۰', category: 'بار سرد' },
  { id: 15, name: 'آیس موکا', price: '۱۳۰', category: 'بار سرد' },
  { id: 16, name: 'افوکاتو', price: '۱۰۰', category: 'بار سرد' },
];
