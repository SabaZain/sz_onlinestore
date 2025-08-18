"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
  return (
    <div className=" bg-first">
    <div className='flex justify-around align items-center'>
      <div className='flex'>
      <Image src="/Image/online_logo.png" alt="logo" width={70} height={70} className='rounded-full p-2' />
      <h1 className='p-4 text-3xl text-second font-bold '>SZ Online Store</h1>
      </div>
      <div className='md:hidden lg:hidden cursor-pointer text-white' onClick={toggleMenu} aria-label='Toggle menu' aria-expanded={isOpen}>
      <GiHamburgerMenu size={30}/>
      </div>
      
    <ul className='hidden md:flex lg:flex gap-6 cursor-pointer'>
        <li className='text-xl text-white font-semibold hover:text-second'><Link href='/'>Home</Link></li>
        <li className='text-xl text-white font-semibold hover:text-second'><Link href='About'>About Us</Link></li>
        <li className='text-xl text-white  font-semibold hover:text-second'><Link href='Household_Items'>Household Items</Link></li>
        <li className='text-xl text-white  font-semibold hover:text-second'><Link href='Fashion'>Fashion</Link></li>
        <li className='text-xl text-white  font-semibold hover:text-second'><Link href='Kids_Menu'>Kids Menu</Link></li>
        <li className='text-xl text-white font-semibold hover:text-second'><Link href='Contact'>Order Us</Link></li>
      </ul>
      </div>
   

    {isOpen && (
        <div className='md:hidden lg:hidden'> 
        <ul className='bg-second flex flex-col gap-4 p-2'>
        <li className='font-semibold hover:text-first'><Link href='/' onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className='font-semibold hover:text-first'><Link href='About' onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li className='font-semibold hover:text-first'><Link href='Household_Items' onClick={() => setIsOpen(false)}>Household Items</Link></li>
        <li className='font-semibold hover:text-first'><Link href='Fashion' onClick={() => setIsOpen(false)}>Fashion</Link></li>
        <li className='font-semibold hover:text-first'><Link href='Kids_Menu' onClick={() => setIsOpen(false)}>Kids Menu</Link></li>
        <li className='font-semibold hover:text-first'><Link href='Contact' onClick={() => setIsOpen(false)}>Order Us</Link></li>
      </ul>
        </div>
        
    )}
     </div>
    
  );
};

export default Navbar;
