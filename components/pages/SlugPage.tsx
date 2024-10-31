import ProductsContainer from '@/components/products/ProductsContainer';
import { searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import CategoriesContainer from '@/components/categories/CategoriesContainer';

async function SlugPage({ slug }: { slug: string }): Promise<JSX.Element> {
    const subcategories = await searchParentSlugForSubCategoriesAsync(slug || '');
    
    if (subcategories.length > 0) {
        return <CategoriesContainer parentSlug={slug} />;
    } else {
        return <ProductsContainer slug={slug || ''} isChild={false} />;
    }
}

export default SlugPage;