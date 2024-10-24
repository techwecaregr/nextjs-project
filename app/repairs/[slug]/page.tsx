import ProductsContainer from '@/components/products/ProductsContainer';
import {  searchParentSlugForSubCategoriesAsync } from '@/utils/actions';
import {  PageProps } from '@/utils/types';
import CategoriesContainer from '@/components/categories/CategoriesContainer';
import { GetStaticProps } from 'next';

async function CategoryPage({ slug }: PageProps) : Promise<JSX.Element> {
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

export const getStaticProps: GetStaticProps<{ params: PageProps }> = async (context: any) => {
  const { slug, child_slug, child_id } = context.params as { slug: string; child_slug: string; child_id: string };

  return {
    props: {
      params: { slug, child_slug, child_id },
    },
  };
};
export default CategoryPage;