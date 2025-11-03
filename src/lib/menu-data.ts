import { Coffee, GlassWater } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Category = 'بار گرم' | 'بار سرد';

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: Category;
  Icon: LucideIcon;
}

export const categories: Category[] = ['بار گرم', 'بار سرد'];

export const menuData: MenuItem[] = [
  // بار گرم
  { id: 1, name: 'اسپرسو', price: '۶۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 2, name: 'امریکانو', price: '۸۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 3, name: 'لاته', price: '۹۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 4, name: 'کارامل ماکیاتو', price: '۱۱۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 5, name: 'موکا', price: '۱۱۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 6, name: 'کاپوچینو', price: '۹۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 7, name: 'نسکافه', price: '۹۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 8, name: 'نسکافه مخصوص', price: '۱۱۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 9, name: 'هات چاکلت', price: '۹۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 10, name: 'دمنوش', price: '۴۰٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },
  { id: 11, name: 'چای', price: '۲۵٬۰۰۰ تومان', category: 'بار گرم', Icon: Coffee },

  // بار سرد
  { id: 12, name: 'آیس کافی', price: '۹۰٬۰۰۰ تومان', category: 'بار سرد', Icon: GlassWater },
  { id: 13, name: 'آیس لاته', price: '۱۱۰٬۰۰۰ تومان', category: 'بار سرد', Icon: GlassWater },
  { id: 14, name: 'آیس کارامل', price: '۱۳۰٬۰۰۰ تومان', category: 'بار سرد', Icon: GlassWater },
  { id: 15, name: 'آیس موکا', price: '۱۳۰٬۰۰۰ تومان', category: 'بار سرد', Icon: GlassWater },
  { id: 16, name: 'افوکاتو', price: '۱۰۰٬۰۰۰ تومان', category: 'بار سرد', Icon: GlassWater },
];
