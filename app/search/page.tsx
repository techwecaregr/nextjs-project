import SearchContainer from '@/components/products/SearchContainer';

async function SearchPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  return (
    <>
      <SearchContainer layout={layout} search={search} />
    </>
  );
}
export default SearchPage;