'use-client';


import ProductsContainer from '@/components/products/ProductsContainer';
import {  searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import CategoriesContainer from '@/components/categories/CategoriesContainer';
import { useParams } from 'next/navigation';

async function CategoryPage() : Promise<JSX.Element> {
  const {slug} = useParams();

  const xxx  = await searchParentSlugForSubCategoriesAsync(slug.toString());
  if(xxx.length > 0)
    return(
      <CategoriesContainer  parentSlug={slug.toString()}/>
    )
  else return (
    <>
      <ProductsContainer slug={slug.toString()} isChild={false}/>
    </>
  );
}
export default CategoryPage;