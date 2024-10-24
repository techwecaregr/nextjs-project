import { fetchSingleProductAsync,  fetchChildCategoryProducts, Product } from '@/utils/actions';
import ProductsContainer from '@/components/products/ProductsContainer';
import ProductContainer from '@/components/single-product/ProductContainer';
export interface Params {
  slug?: string;
  child_slug?: string;
  child_id?: string;
}


 const SingleProductChildCategoryPage = async ({ params }: {params:Params}) : Promise<JSX.Element> =>  {
  const {child_slug, slug} = params;

  const product = await fetchSingleProductAsync(child_slug || '') || {id: '', name: '', slug: '', img: '', parentCategoryID: '', parentCategorySlug: ''} as Product;
  const category = fetchChildCategoryProducts(child_slug || '');
  if(category.length > 0)
    return (
      <>
        <ProductsContainer  slug={child_slug || ''} isChild={true} parentSlug={slug}/>
      </>
    );
  else return (
    <ProductContainer product={product}/>
  );
}



export default SingleProductChildCategoryPage;