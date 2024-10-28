import ChildIDPage from '@/components/pages/ChildIDPage';
export interface Params {
  slug?: string;
  child_slug?: string;
  child_id?: string;
}

const SingleProductPage = ({ params }: {params:Params})  => {
  <ChildIDPage params= {params}/>
}



export default SingleProductPage;