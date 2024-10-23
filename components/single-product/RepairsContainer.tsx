import {  Repair } from '@/utils/actions';
import { Card, CardContent } from '@/components/ui/card';
import RepairContainer from '@/components/single-product/RepairContainer';

function RepairsContainer({repairs}:{repairs:Repair[] | undefined}){
    if(repairs)
    return(
        <div className='basis-3/4 md:basis-2/3 basis-full h-full m-2'>
        <Card className='transform group-hover:shadow-xl transition-shadow duration-500 bg-card'>
            <CardContent className='p-4 flex flex-row flex-wrap	'>
            {
                repairs.map((repair) => {
                    if(repair.price != '0' && repair.price != '-')
                    return (
                        <RepairContainer repair = {repair}/>
                    );
                })
            }

            </CardContent>
        </Card>
    </div>
    );
    else 
    return (<></>);
}

export default RepairsContainer;