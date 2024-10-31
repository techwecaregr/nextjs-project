import ChildSlugPage from '@/components/pages/ChildSlugPage';

const SingleProductChildCategoryPage = async ({ params }: { params: { child_slug: string; slug: string } }) => {
    const { child_slug, slug } =  await params;
    return <ChildSlugPage child_slug={child_slug} slug={slug} />;
};

export default SingleProductChildCategoryPage;