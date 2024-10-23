import { fetchSingleProductAsync,  fetchChildCategoryProducts, Product } from '@/utils/actions';
import ProductsContainer from '@/components/products/ProductsContainer';
import ProductContainer from '@/components/single-product/ProductContainer';


 async function SingleProductChildCategoryPage(
  {
    params
  }: {
    params: { child_slug: string, slug: string };
  }
) {
  const product = await fetchSingleProductAsync(params.child_slug) || {id: '', name: '', slug: '', img: '', parentCategoryID: '', parentCategorySlug: ''} as Product;
  const category = fetchChildCategoryProducts(params.child_slug);
  if(category.length > 0)
    return (
      <>
        <ProductsContainer  slug={params.child_slug} isChild={true} parentSlug={params.slug}/>
      </>
    );
  else return (
    <ProductContainer product={product}/>
  );
}
export default SingleProductChildCategoryPage;