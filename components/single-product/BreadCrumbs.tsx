import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/ui/breadcrumb';
  
  function BreadCrumbs({ name, parentSlug, childSlug }: { name?: string, parentSlug?: string, childSlug?: string }) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/' className='capitalize text-lg'>
              home
            </BreadcrumbLink>
          </BreadcrumbItem>
  
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/repairs' className='capitalize text-lg'>
              repairs
            </BreadcrumbLink>
          </BreadcrumbItem>
  
          <BreadcrumbSeparator />
            {
                parentSlug && 
                <>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/repairs/${parentSlug}`} className='capitalize text-lg'>
                            {parentSlug}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
            
                    <BreadcrumbSeparator />
                </>
            }

            {
                childSlug && 
                <>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/repairs/${parentSlug}/${childSlug}`} className='capitalize text-lg'>
                            {childSlug}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
            
                    <BreadcrumbSeparator />
                </>

                
            }

            {
                name && 
                <>
                    <BreadcrumbItem>
                        <BreadcrumbPage className='capitalize text-lg'>{name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            }

        </BreadcrumbList>
      </Breadcrumb>
    );
  }
  export default BreadCrumbs;