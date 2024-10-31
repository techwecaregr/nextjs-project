import SlugPage from '@/components/pages/SlugPage';


const CategoryPage =  ({params}) => {

  const {slug} = params;
return <SlugPage slug={slug}/>
}

export default CategoryPage;