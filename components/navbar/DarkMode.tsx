
'use client';
import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';



export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  var client_theme =  theme;

  const toggleTheme = ()=>{
    if(client_theme == 'dark'){
      setTheme('light');
      localStorage.setItem('client_theme', 'light')
    }
    else{
      setTheme('dark');
      localStorage.setItem('client_theme', 'dark')
    }
  }

  return (
    <Button variant='outline' size='icon' onClick={ toggleTheme}>
      <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}