import { fetchHomeCategoriesAsync } from '@/utils/actions';
import CategoriesGrid from '@/components/categories/CategoriesGrid';


async function HomeCategories() : Promise<JSX.Element>{
    let categories =  await fetchHomeCategoriesAsync() || [];
    const totalCategories = categories.length;
    return (
      <>
        <div>

            {totalCategories === 0 ? (
                <></>
            ) : <CategoriesGrid categories={categories} parentSlug={undefined}/> }
        </div>
      </>
  
    )
  }
  
  export default HomeCategories;