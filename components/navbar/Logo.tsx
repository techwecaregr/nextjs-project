
'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo_dark from '@/public/images/logo-dark-sm2.png';
import logo_light from '@/public/images/logo-light-sm2.png';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

function Logo() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted]   = useState(false);
  useEffect(()=>{
    setMounted(true);
  }, [])
  if(!mounted) return null;
  return (
    <Link href='/'>
      <Image
      src={(theme == 'dark') ?  logo_dark :  logo_light}
      alt='logo'
      
    />
    </Link>

  );
}

export default Logo;