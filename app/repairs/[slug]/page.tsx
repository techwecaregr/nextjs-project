import ProductsContainer from '@/components/products/ProductsContainer';
import {  searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import CategoriesContainer from '@/components/categories/CategoriesContainer';
import { useRouter } from 'next/router';
const CategoryPage = async () => {
  const router = useRouter(); //router.query.child_id.toString()

  const xx  = await searchParentSlugForSubCategoriesAsync(router.query.slug.toString() || '');
  if(xx.length > 0)
    return(
      <CategoriesContainer  parentSlug={router.query.slug.toString() }/>
    )
  else return (
    <>
      <ProductsContainer slug={router.query.slug.toString()  || ''} isChild={false}/>
    </>
  );
}

export default CategoryPage;