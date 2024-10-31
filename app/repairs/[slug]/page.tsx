import SlugPage from '@/components/pages/SlugPage';

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    return <SlugPage slug={slug} />;
};

export default CategoryPage;