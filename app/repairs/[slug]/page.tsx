import ProductsContainer from '@/components/products/ProductsContainer';
import {  searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import {  PageProps } from '@/utils/types';
import CategoriesContainer from '@/components/categories/CategoriesContainer';
async function CategoryPage({
   params
}: PageProps) : Promise<JSX.Element> {
  const slug = params.slug || '';
  const xx  = await searchParentSlugForSubCategoriesAsync(slug);
  if(xx.length > 0)
    return(
      <CategoriesContainer  parentSlug={slug}/>
    )
  else return (
    <>
      <ProductsContainer slug={slug} isChild={false}/>
    </>
  );
}
export default CategoryPage;