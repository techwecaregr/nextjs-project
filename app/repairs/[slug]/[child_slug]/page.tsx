
import ChildSlugPage from '@/components/pages/ChildSlugPage';

 interface Params {
  slug?: string;
  child_slug?: string;
  child_id?: string;
}


 const SingleProductChildCategoryPage = ({ params }: {params:Params}) =>  {
  <ChildSlugPage params= {params}/>
}



export default SingleProductChildCategoryPage;