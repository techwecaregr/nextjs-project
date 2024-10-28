
import SlugPage from '@/components/pages/SlugPage';

 interface Params {
  slug?: string;
  child_slug?: string;
  child_id?: string;
}

const CategoryPage = ({ params }: {params:Params}) => {

  <SlugPage params= {params}/>
}

export default CategoryPage;