import {  Repair, Product } from '@/utils/actions';
import RepairHeader from '@/components/single-product/RepairHeader';
import RepairsContainer from '@/components/single-product/RepairsContainer';

function RepairContent({product, repairs}:{product:Product , repairs:Repair[]}){
    return(
        <div className='flex flex-row flex-wrap md:flex-nowrap mt-5'>
            <RepairHeader product={product}/>
            <RepairsContainer repairs={repairs}/>
        </div>
    );
}

export default RepairContent;