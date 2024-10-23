import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { fetchCategoryProducts, fetchCategoryProductsAsync, fetchChildCategoryProductsAsync, Product, fetchChildCategoryProducts } from '@/utils/actions';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
async function ProductsContainer({
  layout,
  slug,
  isChild,
  parentSlug
}: {
  layout: string;
  search: string;
  slug:string;
  isChild:boolean;
  parentSlug?:string
}) {
  // var products:Product[] =  [];
  // if(isChild)
  //   products = fetchChildCategoryProducts(slug);
  // else
  //   products = fetchCategoryProducts(slug);
  var products;
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
        ) : layout === 'grid' ? (

          <ProductsGrid products={products} isChild={isChild}/>
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
export default ProductsContainer;