import { Card, CardContent } from '@/components/ui/card';
import { Product} from '@/utils/actions';
import Image from 'next/image';

function RepairHeader({product} : {product:Product}){
    const { name, img } = product;
    return(
        <div className='basis-1/4 md:basis-1/3 basis-full h-full m-2'>
        <Card className='transform group-hover:shadow-xl transition-shadow duration-500 bg-card'>
        <CardContent className='p-6'>
        <h4 className='pb-5 capitalize text-center text-xl font-bold'>{name}</h4>
            <div className='relative h-64 md:h-48 rounded overflow-hidden'>
                <Image
                    src={img}
                    alt={name}
                    fill
                    sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                    priority
                    className='w-full rounded-md object-contain'
                />
            </div>

        </CardContent>
        </Card>
    </div>
    );
}

export default RepairHeader;