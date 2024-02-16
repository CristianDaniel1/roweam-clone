import { useState } from 'react';
import { ShopCategory } from '../components/shop/ShopCategory.tsx';
import { categories } from '../constants/data.ts';
import { ShopProductsList } from '../components/shop/ShopProductsList.tsx';

export default function Shop() {
  const [category, setCategory] = useState('Shop All');

  return (
    <section className="max-container px-6 sm:px-10 2xl:px-0 pb-10 pt-36 min-h-screen">
      <div className="flex items-center flex-wrap gap-10 xl:gap-20 2xl:gap-40 pb-10">
        <div className="max-w-3xl xl:max-w-sm 2xl:max-w-xl">
          <h2 className="text-6xl py-6 mb-4 animate-opacity">{category}</h2>
          <p className="font-sans pr-6 2xl:pr-20">
            A custom designed and curated selection of New and True Vintage
            products aimed to celebrate the beauty of patina and moments of
            nostalgia. Each piece represents a sense of heritage and history,
            comfort and customs, and the art of old.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-8 gap-y-2 border-b border-secundary-light pb-4 animate-[opacity_0.4s_ease-in-out_0.2s_backwards]">
          {categories.map(categ => (
            <ShopCategory
              key={categ.id}
              category={categ.category}
              onSelectCategory={setCategory}
              activeCateg={category}
            />
          ))}
        </ul>
      </div>
      <ShopProductsList activeCateg={category} />
    </section>
  );
}
