import { fetchSingleProductAsync, fetchAllChildCategoriesAsync, Product } from '@/utils/actions';
import ProductsContainer from '@/components/products/ProductsContainer';
import ProductContainer from '@/components/single-product/ProductContainer';

interface ChildSlugPageProps {
    child_slug: string;
    slug: string;
}

const ChildSlugPage = async ({ child_slug, slug }: ChildSlugPageProps): Promise<JSX.Element> => {
    // Fetch the child category products
    const categoryProducts =  await fetchAllChildCategoriesAsync(child_slug);
    const hasChildCategoryProducts = categoryProducts.length > 0;

    if (hasChildCategoryProducts) {
        return <ProductsContainer slug={child_slug} isChild={true} parentSlug={slug} />;
    } else {
        const product = await fetchSingleProductAsync(child_slug) || {
            id: '',
            name: '',
            slug: '',
            img: '',
            parentCategoryID: '',
            parentCategorySlug: '',
        } as Product;
        if(product && product?.id)    
            return <ProductContainer product={product} />;
        else 
            return           <h5 className='text-2xl mt-16'>
            Sorry, no products...
          </h5>
         
    }
};

export default ChildSlugPage;