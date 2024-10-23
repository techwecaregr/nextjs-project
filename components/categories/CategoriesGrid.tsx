'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import {Category} from '@/utils/actions'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
function CategoriesGrid({categories, parentSlug}:{categories: Category[], parentSlug:string | undefined}){
  const { theme } = useTheme();
  const [mounted, setMounted]   = useState(false);

  useEffect(()=>{
    setMounted(true);
  }, [])
  if(!mounted) return null;
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {categories.map((category) => {
        const { name, img_light, img_dark } = category;
        const categorySlug = category.slug;
        //const dollarsAmount = formatCurrency(price);
        return (
          <article key={categorySlug} className='group relative'>
            <Link href={parentSlug == undefined ? `/repairs/${categorySlug}` : `/repairs/${parentSlug}/${categorySlug}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-4'>
                  <div className='relative h-64 md:h-48 rounded overflow-hidden '>
                    <Image
                      src={(theme == 'dark') ? img_dark : img_light}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 90vw,(max-width:1200px) 50vw,33vw'
                      priority
                      className={`rounded w-full object-contain transform group-hover:scale-110 transition-transform duration-500`}
                    />
                  </div>

                </CardContent>
              </Card>
            </Link>
          </article>
        );
      })}
    </div>
  );
  }
  
  export default CategoriesGrid;