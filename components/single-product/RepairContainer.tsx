'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Product, getProductRepairs, Repair } from '@/utils/actions';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
function RepairContainer({repair, index} : {repair:Repair, index:Number}){
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted]   = useState(false);
    const dark = (theme == 'dark') ? true : false;
    const uiPrice = repair.price == '0' ? '-' : repair.price;
    useEffect(()=>{
        setMounted(true);
      }, [])
    if(!mounted) return null;
    return (
        <div className='basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/3'>
            <Card key={repair.id} className='p-1  m-1 transform group-hover:shadow-xl transition-shadow duration-500 bg-card'>
                <CardContent className='p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center'>
                    <div className='p-1 relative h-20 md:h-20 rounded overflow-hidden '>
                        <Image
                        src={dark ? repair.img_dark : repair.img_light}
                        alt='repair-icon'
                        fill
                        sizes='(max-width:768px) 80vw,(max-width:1200px) 50vw,33vw'
                        priority
                        className={`rounded w-full object-contain transform group-hover:scale-110 transition-transform duration-500`}
                        />
                    </div>
                    <div>
                        <h6 className='text-xs text-center'>{repair.name}</h6>
                        <div className='bg-purple-400 rounded m-1'>
                            <h6 className='p-1 m-1 text-xs  text-center'>{uiPrice}</h6>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}

export default RepairContainer;