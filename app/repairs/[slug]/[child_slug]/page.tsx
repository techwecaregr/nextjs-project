
import ChildSlugPage from '@/components/pages/ChildSlugPage';

 const SingleProductChildCategoryPage =  ({params}) =>  {
  console.log('params');
  console.log(params);
  const {child_slug, slug} = params;

  return (
    <ChildSlugPage child_slug={child_slug} slug={slug}/>
  
  );
}



export default SingleProductChildCategoryPage;