import ProductsContainer from '@/components/products/ProductsContainer';
import {  searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import {  PageProps } from '@/utils/types';
import CategoriesContainer from '@/components/categories/CategoriesContainer';

const CategoryPage = async ({ params }: PageProps) : Promise<JSX.Element> => {
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