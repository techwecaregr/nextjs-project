import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {Category} from '@/utils/actions'
import Image from 'next/image';



function CategoriesList({ categories }: { categories: Category[] }) {
  return (
    <div className='mt-12 grid gap-y-8'>
      {categories.map((category) => {
        const { name, img_light } = category;
        //const dollarsAmount = formatCurrency(price);
        const categoryID = category.slug;
        return (
          <article key={categoryID} className='group relative'>
            <Link href={`/repairs/${categoryID}`}>
              <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
                <CardContent className='p-8 gap-y-4 grid md:grid-cols-3 flex justify-between items-center'>
                  <div className='relative h-64  md:h-48 md:w-48'>
                    <Image
                      src={img_light}
                      alt={name}
                      fill
                      sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                      priority
                      className='w-full rounded-md object-cover'
                    />
                  </div>

                  <div>
                    <h2 className='text-xl font-semibold capitalize'>{name}</h2>
                    {/* <h4 className='text-muted-foreground'>Company</h4> */}
                  </div>
                  {/* <p className='text-muted-foreground text-lg md:ml-auto'>
                    dollarsAmmount
                  </p> */}
                </CardContent>
              </Card>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
export default CategoriesList;