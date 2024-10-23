import ProductsContainer from '@/components/products/ProductsContainer';
import {  searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import CategoriesContainer from '@/components/categories/CategoriesContainer';
async function CategoryPage({
  searchParams, params
}: {
  searchParams: { layout?: string; search?: string };
  params: { slug: string };
}) {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  const slug = params.slug;
  let xx  = await searchParentSlugForSubCategoriesAsync(slug);
  if(xx.length > 0)
    return(
      <CategoriesContainer  parentSlug={slug}/>
    )
  else return (
    <>
      <ProductsContainer layout={layout} search={search} slug={params.slug} isChild={false}/>
    </>
  );
}
export default CategoryPage;