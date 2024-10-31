import ChildIDPage from '@/components/pages/ChildIDPage';
import PageProps from 'next/app';
interface Params {
  slug?: string;
  child_slug?: string;
  child_id?: string;
}
const SingleProductPage = ({ params }: PageProps & {params:Params})  => {
  return <ChildIDPage params= {params}/>
}



export default SingleProductPage;