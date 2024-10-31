import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';

interface ChildIDPageProps {
    child_id: string;
}

const ChildIDPage = async ({ child_id }: ChildIDPageProps): Promise<JSX.Element> => {
    const product = await fetchSingleProductAsync(child_id);

    return <ProductContainer product={product} />;
};

export default ChildIDPage;