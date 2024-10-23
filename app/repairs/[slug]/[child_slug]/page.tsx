import { fetchSingleProductAsync,  fetchChildCategoryProducts, Product } from '@/utils/actions';
import ProductsContainer from '@/components/products/ProductsContainer';
import ProductContainer from '@/components/single-product/ProductContainer';


 async function SingleProductChildCategoryPage(
  {
    searchParams, params
  }: {
    searchParams: { layout?: string; search?: string };
    params: { child_slug: string, slug: string };
  }
) {
  console.log('params')
  console.log(params)
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  let product = await fetchSingleProductAsync(params.child_slug) || {id: '', name: '', slug: '', img: '', parentCategoryID: '', parentCategorySlug: ''} as Product;
  const category = fetchChildCategoryProducts(params.child_slug);
  if(category.length > 0)
    return (
      <>
        <ProductsContainer layout={layout} search={search} slug={params.child_slug} isChild={true} parentSlug={params.slug}/>
      </>
    );
  else return (
    <ProductContainer product={product}/>
  );
}
export default SingleProductChildCategoryPage;