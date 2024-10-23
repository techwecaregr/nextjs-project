import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';

 async function SingleProductPage({ params }: { params: { child_id: string } }) {
  const product = await fetchSingleProductAsync(params.child_id);
  return (
    <ProductContainer product={product}/>
  );
}
export default SingleProductPage;