import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import RepairContent from '@/components/single-product/RepairContent';
import { Product, getProductRepairsAsync, Repair } from '@/utils/actions';

async function ProductContainer({product} : {product:Product | null}) : Promise<JSX.Element> {
  if(product){
    const { name, parentCategorySlug } = product;
     //let repairs:Repair[] = [];

     const repairs:Repair[] | undefined =  await getProductRepairsAsync(product.id);
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
  else return (<></>);

}

export default ProductContainer;