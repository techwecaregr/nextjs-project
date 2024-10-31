import ChildIDPage from '@/components/pages/ChildIDPage';

const SingleProductPage = async ({ params }: { params: { child_id: string } }) => {
    const { child_id } = await params;
    return <ChildIDPage child_id={child_id} />;
};

export default SingleProductPage;