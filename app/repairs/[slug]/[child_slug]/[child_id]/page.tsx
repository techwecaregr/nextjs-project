import { fetchSingleProductAsync } from '@/utils/actions';
import ProductContainer from '@/components/single-product/ProductContainer';
import {  PageProps } from '@/utils/types';
import { GetStaticProps } from 'next';

 async function SingleProductPage({ child_id }: PageProps): Promise<JSX.Element> {
  const product = await fetchSingleProductAsync(child_id);
  return (
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

export default SingleProductPage;