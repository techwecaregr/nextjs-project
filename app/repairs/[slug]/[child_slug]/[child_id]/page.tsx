import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';
import {  PageProps } from '@/utils/types';


const SingleProductPage = async ({ params }: PageProps) => {
  const {child_id} = params;
  const product = await fetchSingleProductAsync(child_id || '');
  return (
    <ProductContainer product={product}/>
  );
}



export default SingleProductPage;