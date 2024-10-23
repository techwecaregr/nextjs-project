'use client';
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"; 
import logo_dark from '@/public/images/logo-dark-sm2.png';
import logo_light from '@/public/images/logo-light-sm2.png';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
// Example using icons from Shadcn 
const Footer = () => { 
    const { theme } = useTheme();
    const [mounted, setMounted]   = useState(false);
    useEffect(()=>{
        setMounted(true);
      }, [])
      if(!mounted) return null;
    return ( 
        <footer className='border-t py-16'> 
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8"> 
                {/* Logo Section */} 
                <div className="flex items-center"> 
                    <Link href='/'>
                        <Image
                            src={(theme == 'dark') ?  logo_dark :  logo_light}
                            alt='logo'
                        />
                    </Link> 
                </div> 
                {/* Contact Info */} 
                <div className="flex items-center flex-col"> 
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3> 
                    <ul className="border-t  py-6 space-y-2"> 
                        <li className="flex items-center hover:text-[#5dedf8]"> 
                            <Phone className="w-5 h-5 mr-2" /> 
                            <a href="tel:+30 2108062200" className="hover:text-[#5dedf8]"> 2108062200 </a> 
                        </li> 
                        <li className="flex items-center hover:text-[#5dedf8]"> <Mail className="w-5 h-5 mr-2" /> 
                            <a href="mailto:techwecarepefki@gmail.com" className="hover:text-[#5dedf8]"> techwecarepefki@gmail.com </a> 
                        </li> 
                        <li className="flex items-center hover:text-[#5dedf8]"> 
                            <MapPin className="w-5 h-5 mr-2" /> <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14a199fd2de6d539:0x4749f9977ddda463?sa=X&ved=1t:8290&ictx=111"
                             className="hover:text-[#5dedf8]">Αγίου Παντελεήμονος 2, Πεύκη 151 21</a> 
                        </li> 
                    </ul> 
                </div> 
                {/* Social Media Links */} 
                <div className="flex items-center flex-col"> 
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3> 
                    <div className="border-t  py-6  flex space-x-4"> 
                        <a href="https://instagram.com/techwecare_pefki" target="_blank" rel="noopener noreferrer"> 
                            <Instagram className="w-6 h-6 hover:text-[#5dedf8]" /> 
                        </a> 
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> 
                            <Facebook className="w-6 h-6 hover:text-[#5dedf8]" /> 
                        </a> 
                        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> 
                            <Twitter className="w-6 h-6 hover:text-gray-400" /> 
                        </a>  */}

                    </div>
                </div> 
            </div> 
        </footer> ); }; 
                
export default Footer;  