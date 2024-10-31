import { useRouter } from 'next/router';
import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';

 const SingleProductPage = async ()  => {
  const router = useRouter();
  const product = await fetchSingleProductAsync(router.query.child_id.toString() || '');
  return (
    <ProductContainer product={product}/>
  );
}



export default SingleProductPage;