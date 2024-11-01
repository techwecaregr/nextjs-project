import hero1 from '@/public/images/hero-new-1.jpeg';
import hero2 from '@/public/images/hero-new-2.jpeg';
import hero3 from '@/public/images/hero-new-3.jpeg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const carouselImages = [hero3, hero2, hero1];

function HeroCarousel() {
  //hidden lg:block
  return (
    <div className=''> 
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <Image
                      src={image}
                      alt='hero'
                      className='w-full h-[24rem] rounded-md object-cover'
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {
          carouselImages.length > 1 &&
          <>
            <CarouselPrevious className='hidden lg:block'/>
            <CarouselNext  className='hidden lg:block'/>
          </>
        }

      </Carousel>
    </div>
  );
}
export default HeroCarousel;