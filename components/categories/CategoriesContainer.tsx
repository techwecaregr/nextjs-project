import CategoriesGrid from './CategoriesGrid';
import { searchParentSlugForSubCategoriesAsync, fetchAllParentCategoriesAsync } from '@/utils/actions';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';

async function CategoriesContainer({parentSlug} :{parentSlug?:string}) : Promise<JSX.Element> {
  let categories;
  if(parentSlug!=undefined)
    categories = await searchParentSlugForSubCategoriesAsync(parentSlug.toString())
  else  categories =  await fetchAllParentCategoriesAsync();
  const totalCategories = categories.length;
  return (
    <>
      {/* PRODUCTS */}
      <div>
      <BreadCrumbs name={parentSlug} />

        {totalCategories === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no categories!
          </h5>
        ) : <CategoriesGrid categories={categories} parentSlug={parentSlug} /> }
      </div>
    </>
  );
}
export default CategoriesContainer;