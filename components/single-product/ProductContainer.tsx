import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import RepairContent from '@/components/single-product/RepairContent';
import { Product, getProductRepairs, getProductRepairsAsync, Repair } from '@/utils/actions';

async function ProductContainer({product} : {product:Product}){
    const { name, parentCategorySlug } = product;
     //var repairs:Repair[] = [];
    console.log('teeest2');
    console.log('teeest2');

    var repairs =  await getProductRepairsAsync(product.id);
    console.log("vlaves");
    console.log(repairs);
    if(product?.childCategorySlug)
        
        return (
            <section>
              <BreadCrumbs name={name} parentSlug={parentCategorySlug} childSlug={product.childCategorySlug}/>
              <RepairContent repairs={repairs } product={product}/>
            </section>
          );
    else return (
        <section>
            <BreadCrumbs name={name} parentSlug={parentCategorySlug} />
            <RepairContent repairs={repairs} product={product}/>
        </section>
      );
}

export default ProductContainer;