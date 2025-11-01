import { Coffee, GlassWater, CakeSlice, UtensilsCrossed } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Category = 'نوشیدنی‌های گرم' | 'نوشیدنی‌های سرد' | 'کیک و دسر' | 'غذا';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: Category;
  Icon: LucideIcon;
}

export const categories: Category[] = ['نوشیدنی‌های گرم', 'نوشیدنی‌های سرد', 'کیک و دسر', 'غذا'];

export const menuData: MenuItem[] = [
  {
    id: 1,
    name: 'اسپرسو',
    price: '۴۵٬۰۰۰ تومان',
    category: 'نوشیدنی‌های گرم',
    Icon: Coffee,
  },
  {
    id: 2,
    name: 'کافه لاته',
    price: '۷۰٬۰۰۰ تومان',
    category: 'نوشیدنی‌های گرم',
    Icon: Coffee,
  },
  {
    id: 3,
    name: 'کاپوچینو',
    price: '۶۵٬۰۰۰ تومان',
    category: 'نوشیدنی‌های گرم',
    Icon: Coffee,
  },
  {
    id: 4,
    name: 'چای سیاه',
    price: '۳۵٬۰۰۰ تومان',
    category: 'نوشیدنی‌های گرم',
    Icon: Coffee,
  },
  {
    id: 5,
    name: 'آیس لاته',
    price: '۷۵٬۰۰۰ تومان',
    category: 'نوشیدنی‌های سرد',
    Icon: GlassWater,
  },
  {
    id: 6,
    name: 'موهیتو',
    price: '۸۰٬۰۰۰ تومان',
    category: 'نوشیدنی‌های سرد',
    Icon: GlassWater,
  },
  {
    id: 7,
    name: 'شیک شکلات',
    price: '۹۵٬۰۰۰ تومان',
    category: 'نوشیدنی‌های سرد',
    Icon: GlassWater,
  },
  {
    id: 8,
    name: 'لیموناد',
    price: '۷۰٬۰۰۰ تومان',
    category: 'نوشیدنی‌های سرد',
    Icon: GlassWater,
  },
  {
    id: 9,
    name: 'کیک شکلاتی',
    price: '۹۰٬۰۰۰ تومان',
    category: 'کیک و دسر',
    Icon: CakeSlice,
  },
  {
    id: 10,
    name: 'چیزکیک نیویورکی',
    price: '۱۱۰٬۰۰۰ تومان',
    category: 'کیک و دسر',
    Icon: CakeSlice,
  },
  {
    id: 11,
    name: 'براونی با بستنی',
    price: '۱۰۵٬۰۰۰ تومان',
    category: 'کیک و دسر',
    Icon: CakeSlice,
  },
  {
    id: 12,
    name: 'پاستا آلفردو',
    price: '۱۸۰٬۰۰۰ تومان',
    category: 'غذا',
    Icon: UtensilsCrossed,
  },
  {
    id: 13,
    name: 'ساندویچ مرغ',
    price: '۱۵۰٬۰۰۰ تومان',
    category: 'غذا',
    Icon: UtensilsCrossed,
  },
  {
    id: 14,
    name: 'سالاد سزار',
    price: '۱۶۰٬۰۰۰ تومان',
    category: 'غذا',
    Icon: UtensilsCrossed,
  },
];
