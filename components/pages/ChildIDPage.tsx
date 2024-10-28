import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';
export interface Params {
  slug?: string;
  child_slug?: string;
  child_id?: string;
}

const ChildIDPage = async ({ params }: {params:Params})  => {
  const {child_id} = params;
  const product = await fetchSingleProductAsync(child_id || '');
  return (
    <ProductContainer product={product}/>
  );
}



export default ChildIDPage;