import ProductsContainer from '@/components/products/ProductsContainer';
import { searchParentSlugForSubCategories, searchParentSlugForSubCategoriesAsync, ChildCategory } from '@/utils/actions';
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
  var xx  = await searchParentSlugForSubCategoriesAsync(slug);
  console.log('xx')
  console.log(xx)
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