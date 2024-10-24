import ProductsContainer from '@/components/products/ProductsContainer';
import {  searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import CategoriesContainer from '@/components/categories/CategoriesContainer';
async function CategoryPage({
   params
}: {
  params: { slug: string };
}) : Promise<JSX.Element> {
  const slug = params.slug;
  const xx  = await searchParentSlugForSubCategoriesAsync(slug);
  if(xx.length > 0)
    return(
      <CategoriesContainer  parentSlug={slug}/>
    )
  else return (
    <>
      <ProductsContainer slug={params.slug} isChild={false}/>
    </>
  );
}
export default CategoryPage;