'use-client';
import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';
import { useParams } from 'next/navigation';
 async function SingleProductPage(): Promise<JSX.Element> {
  const {child_id} = useParams();
  const product = await fetchSingleProductAsync(child_id.toString());
  return (
    <ProductContainer product={product}/>
  );
}
export default SingleProductPage;