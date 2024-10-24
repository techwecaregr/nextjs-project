import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';

 async function SingleProductPage(context: any): Promise<JSX.Element> {
  const {child_id} = context.params;
  const product = await fetchSingleProductAsync(child_id);
  return (
    <ProductContainer product={product}/>
  );
}
export default SingleProductPage;