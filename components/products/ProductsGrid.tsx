import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import {Product} from '@/utils/actions'

async function ProductsGrid({products, isChild}:{products: Product[], isChild:boolean}){
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5'>
      {products.map((product) => {
        const { name, img, parentCategorySlug, childCategorySlug } = product;
        const productId = product.id;
        const productSlug = product.slug;
        //const dollarsAmount = formatCurrency(price);
        if(isChild)
          return (
            <article key={productId} className='group relative'>
              <Link href={`/repairs/${parentCategorySlug}/${childCategorySlug}/${productSlug}`}>
                <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                  <CardContent className='p-4'>
                    <div className='relative h-64 md:h-48 rounded overflow-hidden '>
                      <Image
                        src={img}
                        alt={name}
                        fill
                        sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                        priority
                        className='rounded w-full object-contain transform group-hover:scale-110 transition-transform duration-500'
                      />
                    </div>
                    <h2 className='text-center text-xl font-semibold capitalize'>{name}</h2>

                  </CardContent>
                </Card>
              </Link>
            </article>
          );
        else
          return (
            <article key={productId} className='group relative'>
              <Link href={`/repairs/${parentCategorySlug}/${productSlug}`}>
                <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                  <CardContent className='p-4'>
                    <div className='relative h-64 md:h-48 rounded overflow-hidden '>
                      <Image
                        src={img}
                        alt={name}
                        fill
                        sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                        priority
                        className='rounded w-full object-contain transform group-hover:scale-110 transition-transform duration-500'
                      />
                    </div>
                    <h2 className='text-center text-xl font-semibold capitalize'>{name}</h2>
  
                  </CardContent>
                </Card>
              </Link>
            </article>
          );
      })}
    </div>
  );
  }
  
  export default ProductsGrid;