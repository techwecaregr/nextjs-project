'use-client';

import { fetchSingleProductAsync,  fetchChildCategoryProducts, Product } from '@/utils/actions';
import ProductsContainer from '@/components/products/ProductsContainer';
import ProductContainer from '@/components/single-product/ProductContainer';

import { useParams } from 'next/navigation';

 async function SingleProductChildCategoryPage(
): Promise<JSX.Element> {
  const {child_slug, slug} = useParams();

  const product = await fetchSingleProductAsync(child_slug.toString()) || {id: '', name: '', slug: '', img: '', parentCategoryID: '', parentCategorySlug: ''} as Product;
  const category = fetchChildCategoryProducts(child_slug.toString());
  if(category.length > 0)
    return (
      <>
        <ProductsContainer  slug={child_slug.toString()} isChild={true} parentSlug={slug.toString()}/>
      </>
    );
  else return (
    <ProductContainer product={product}/>
  );
}
export default SingleProductChildCategoryPage;