import ProductsGrid from './ProductsGrid';
import { fetchCategoryProductsAsync, fetchChildCategoryProductsAsync } from '@/utils/actions';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
async function ProductsContainer({
  slug,
  isChild,
  parentSlug
}: {
  slug:string;
  isChild:boolean;
  parentSlug?:string
}) {
  // let products:Product[] =  [];
  // if(isChild)
  //   products = fetchChildCategoryProducts(slug);
  // else
  //   products = fetchCategoryProducts(slug);
  let products;
  if(isChild)
    products = await fetchChildCategoryProductsAsync(slug)
  else  products =  await fetchCategoryProductsAsync(slug);

  const totalProducts = products.length;
  return (
    <>
      {/* PRODUCTS */}
      <div>
        <BreadCrumbs name={slug} parentSlug={parentSlug} />

        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : 
        <ProductsGrid products={products} isChild={isChild}/>
      }
      </div>
    </>
  );
}
export default ProductsContainer;