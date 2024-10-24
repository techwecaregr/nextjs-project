import ProductsContainer from '@/components/products/ProductsContainer';
import {  searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import CategoriesContainer from '@/components/categories/CategoriesContainer';
export interface Params {
  slug?: string;
  child_slug?: string;
  child_id?: string;
}

const CategoryPage = async ({ params }: {params:Params}) => {
  const { slug} = params;

  const xx  = await searchParentSlugForSubCategoriesAsync(slug || '');
  if(xx.length > 0)
    return(
      <CategoriesContainer  parentSlug={slug}/>
    )
  else return (
    <>
      <ProductsContainer slug={slug || ''} isChild={false}/>
    </>
  );
}

export default CategoryPage;