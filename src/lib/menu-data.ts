export type Category = 'بار گرم' | 'بار سرد';

export interface Ingredient {
  name: string;
  percentage: number;
  color: string;
}

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: Category;
  description?: string;
  ingredients?: Ingredient[];
}

export const categories: Category[] = ['بار گرم', 'بار سرد'];

export const menuData: MenuItem[] = [
  // بار گرم
  { 
    id: 1, 
    name: 'اسپرسو', 
    price: '۶۰', 
    category: 'بار گرم', 
    ingredients: [
      { name: 'اسپرسو', percentage: 100, color: 'bg-yellow-800' },
    ]
  },
  { 
    id: 2, 
    name: 'امریکانو', 
    price: '۸۰', 
    category: 'بار گرم', 
    ingredients: [
      { name: 'اسپرسو', percentage: 40, color: 'bg-yellow-800' },
      { name: 'آب داغ', percentage: 60, color: 'bg-blue-200' },
    ]
  },
  { 
    id: 3, 
    name: 'لاته', 
    price: '۹۰', 
    category: 'بار گرم', 
    ingredients: [
        { name: 'اسپرسو', percentage: 20, color: 'bg-yellow-800' },
        { name: 'شیر بخار داده شده', percentage: 65, color: 'bg-orange-200' },
        { name: 'فوم شیر', percentage: 15, color: 'bg-white/80' },
    ]
  },
  { id: 4, name: 'کارامل ماکیاتو', price: '۱۱۰', category: 'بار گرم', description: 'اسپرسو، شیر، سس کارامل' },
  { id: 5, name: 'موکا', price: '۱۱۰', category: 'بار گرم', description: 'اسپرسو، شکلات، شیر' },
  { 
    id: 6, 
    name: 'کاپوچینو', 
    price: '۹۰', 
    category: 'بار گرم',
    ingredients: [
        { name: 'اسپرسو', percentage: 33, color: 'bg-yellow-800' },
        { name: 'شیر بخار داده شده', percentage: 34, color: 'bg-orange-200' },
        { name: 'فوم شیر', percentage: 33, color: 'bg-white/80' },
    ]
  },
  { id: 7, name: 'نسکافه', price: '۹۰', category: 'بار گرم', description: 'قهوه فوری و شیر' },
  { id: 8, name: 'نسکافه مخصوص', price: '۱۱۰', category: 'بار گرم', description: 'قهوه فوری، شیر، خامه' },
  { id: 9, name: 'هات چاکلت', price: '۹۰', category: 'بار گرم', description: 'شکلات داغ و شیر' },
  { id: 10, name: 'دمنوش', price: '۴۰', category: 'بار گرم', description: 'ترکیبی از گیاهان معطر' },
  { id: 11, name: 'چای', price: '۲۵', category: 'بار گرم', description: 'چای سیاه کلاسیک' },

  // بار سرد
  { 
    id: 12, 
    name: 'آیس کافی', 
    price: '۹۰', 
    category: 'بار سرد', 
    description: 'ترکیبی گوارا از قهوه دمی سرد به همراه یخ'
  },
  { 
    id: 13, 
    name: 'آیس لاته', 
    price: '۱۱۰', 
    category: 'بار سرد',
    ingredients: [
      { name: 'اسپرسو', percentage: 20, color: 'bg-yellow-800' },
      { name: 'شیر سرد', percentage: 55, color: 'bg-orange-100' },
      { name: 'یخ', percentage: 25, color: 'bg-sky-200/80' },
    ]
  },
  { 
    id: 14, 
    name: 'آیس کارامل', 
    price: '۱۳۰', 
    category: 'بار سرد',
    ingredients: [
        { name: 'اسپرسو', percentage: 20, color: 'bg-yellow-800' },
        { name: 'شیر سرد', percentage: 45, color: 'bg-orange-100' },
        { name: 'یخ', percentage: 20, color: 'bg-sky-200/80' },
        { name: 'سس کارامل', percentage: 15, color: 'bg-amber-500' },
    ]
  },
  { 
    id: 15, 
    name: 'آیس موکا', 
    price: '۱۳۰', 
    category: 'بار سرد',
    ingredients: [
        { name: 'اسپرسو', percentage: 20, color: 'bg-yellow-800' },
        { name: 'شیر سرد', percentage: 45, color: 'bg-orange-100' },
        { name: 'یخ', percentage: 20, color: 'bg-sky-200/80' },
        { name: 'سس شکلات', percentage: 15, color: 'bg-stone-600' },
    ]
  },
  { 
    id: 16, 
    name: 'افوگاتو', 
    price: '۱۰۰', 
    category: 'بار سرد',
    ingredients: [
        { name: 'بستنی وانیل', percentage: 70, color: 'bg-yellow-100' },
        { name: 'اسپرسو داغ', percentage: 30, color: 'bg-yellow-800' },
    ]
  },
];
