import { LucideIcon } from 'lucide-react';

export type Category = 'بار گرم' | 'بار سرد';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: Category;
  icon: string; 
}

export const categories: Category[] = ['بار گرم', 'بار سرد'];

export const menuData: MenuItem[] = [
  // بار گرم
  { id: 1, name: 'اسپرسو', price: '۶۰', category: 'بار گرم', icon: 'Coffee' },
  { id: 2, name: 'امریکانو', price: '۸۰', category: 'بار گرم', icon: 'Coffee' },
  { id: 3, name: 'لاته', price: '۹۰', category: 'بار گرم', icon: 'Coffee' },
  { id: 4, name: 'کارامل ماکیاتو', price: '۱۱۰', category: 'بار گرم', icon: 'Coffee' },
  { id: 5, name: 'موکا', price: '۱۱۰', category: 'بار گرم', icon: 'Coffee' },
  { id: 6, name: 'کاپوچینو', price: '۹۰', category: 'بار گرم', icon: 'Coffee' },
  { id: 7, name: 'نسکافه', price: '۹۰', category: 'بار گرم', icon: 'Coffee' },
  { id: 8, name: 'نسکافه مخصوص', price: '۱۱۰', category: 'بار گرم', icon: 'Coffee' },
  { id: 9, name: 'هات چاکلت', price: '۹۰', category: 'بار گرم', icon: 'CupSoda' },
  { id: 10, name: 'دمنوش', price: '۴۰', category: 'بار گرم', icon: 'Leaf' },
  { id: 11, name: 'چای', price: '۲۵', category: 'بار گرم', icon: 'GlassWater' },

  // بار سرد
  { id: 12, name: 'آیس کافی', price: '۹۰', category: 'بار سرد', icon: 'CupSoda' },
  { id: 13, name: 'آیس لاته', price: '۱۱۰', category: 'بار سرد', icon: 'CupSoda' },
  { id: 14, name: 'آیس کارامل', price: '۱۳۰', category: 'بار سرد', icon: 'CupSoda' },
  { id: 15, name: 'آیس موکا', price: '۱۳۰', category: 'بار سرد', icon: 'CupSoda' },
  { id: 16, name: 'افوکاتو', price: '۱۰۰', category: 'بار سرد', icon: 'IceCream' },
];
