import { Button } from '@/components/ui/button';
import Hero from '@/components/home/Hero';
import { Suspense } from 'react';
import LoadingContainer from '@/components/global/LoadingContainer';
function HomePage(){
  return (
    <>
      {/* <Suspense fallback={<LoadingContainer />}>
          <Hero/>
      </Suspense> */}
      <Hero/>
    </>

  )
}

export default HomePage;