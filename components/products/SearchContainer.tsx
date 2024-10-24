import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { fetchSearchProductsAsync } from '@/utils/actions';

async function SearchContainer({
  layout,
  search
}: {
  layout: string;
  search: string;
}) : Promise<JSX.Element> {
  //const searchTerm = search ? `&search=${search}` : '';
  const products =  await fetchSearchProductsAsync(search);
  const totalProducts = products.length;

  return (
    <>
      {/* HEADER */}
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-lg'>
            {/* {totalProducts} categories{totalProducts > 1 && 's'} */}
          </h4>
          {/* <div className='flex gap-x-4 '>
            <Button
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size='icon'
              asChild
            >
              <Link href={`/repairs?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === 'list' ? 'default' : 'ghost'}
              size='icon'
              asChild
            >
              <Link href={`/repairs?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div> */}
        </div>
        {/* <Separator className='mt-4' /> */}
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} isChild={false}/>
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
export default SearchContainer;