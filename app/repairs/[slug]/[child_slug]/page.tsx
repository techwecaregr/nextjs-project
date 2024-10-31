
import { useRouter } from 'next/router';
import { fetchSingleProductAsync,  fetchChildCategoryProducts, Product } from '@/utils/actions';
import ProductsContainer from '@/components/products/ProductsContainer';
import ProductContainer from '@/components/single-product/ProductContainer';


 const SingleProductChildCategoryPage = async () =>  {
  const router = useRouter(); //router.query.child_id.toString()
  const product = await fetchSingleProductAsync(router.query.child_slug.toString() || '') || {id: '', name: '', slug: '', img: '', parentCategoryID: '', parentCategorySlug: ''} as Product;
  const category = fetchChildCategoryProducts(router.query.child_slug.toString() || '');
  if(category.length > 0)
    return (
      <>
        <ProductsContainer  slug={router.query.child_slug.toString() || ''} isChild={true} parentSlug={router.query.child_slug.toString()}/>
      </>
    );
  else return (
    <ProductContainer product={product}/>
  );
}



export default SingleProductChildCategoryPage;