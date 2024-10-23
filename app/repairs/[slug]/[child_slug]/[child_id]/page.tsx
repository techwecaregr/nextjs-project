import { fetchSingleProduct, fetchSingleProductAsync, Product } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';

 async function SingleProductPage({ params }: { params: { child_id: string } }) {
  var product = await fetchSingleProductAsync(params.child_id);
  return (
    <ProductContainer product={product}/>
  );
}
export default SingleProductPage;