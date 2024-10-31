import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';
import { useRouter } from 'next/router';


const ChildIDPage = async ()  => {
  const router = useRouter(); //router.query.child_id.toString()

  const product = await fetchSingleProductAsync(router.query.child_id.toString() || '');
  return (
    <ProductContainer product={product}/>
  );
}



export default ChildIDPage;