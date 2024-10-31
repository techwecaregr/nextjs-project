import ChildIDPage from '@/components/pages/ChildIDPage';

const SingleProductPage = ({ params }: {params: {[key:string]:string}})  => {
  return <ChildIDPage params= {params}/>
}



export default SingleProductPage;