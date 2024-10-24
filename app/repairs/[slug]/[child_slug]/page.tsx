import { fetchSingleProductAsync,  fetchChildCategoryProducts, Product } from '@/utils/actions';
import ProductsContainer from '@/components/products/ProductsContainer';
import ProductContainer from '@/components/single-product/ProductContainer';
import {  PageProps } from '@/utils/types';
import { GetStaticProps } from 'next';


 async function SingleProductChildCategoryPage({ child_slug, slug }: PageProps) : Promise<JSX.Element>  {
  const product = await fetchSingleProductAsync(child_slug) || {id: '', name: '', slug: '', img: '', parentCategoryID: '', parentCategorySlug: ''} as Product;
  const category = fetchChildCategoryProducts(child_slug);
  if(category.length > 0)
    return (
      <>
        <ProductsContainer  slug={child_slug} isChild={true} parentSlug={slug}/>
      </>
    );
  else return (
    <ProductContainer product={product}/>
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

export default SingleProductChildCategoryPage;