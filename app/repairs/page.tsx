import CategoriesContainer from '@/components/categories/CategoriesContainer';

async function RepairsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  return (
    <>
      <CategoriesContainer   />
    </>
  );
}
export default RepairsPage;