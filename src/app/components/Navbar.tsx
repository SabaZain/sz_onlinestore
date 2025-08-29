"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHouseholdOpen, setIsHouseholdOpen] = useState(false);
  const [isFashionOpen, setIsFashionOpen] = useState(false);
  const [isKidsOpen, setIsKidsOpen] = useState(false);

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileFashionOpen, setIsMobileFashionOpen] = useState(false);
  const [isMobileKidsOpen, setIsMobileKidsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      {/* Top section */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Image/online_logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="p-4 text-2xl text-second font-bold">SZ Online Store</h1>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu size={26} className="cursor-pointer" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-second">Home</Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-second">About Us</Link>
          </li>

          {/* Household Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsHouseholdOpen(!isHouseholdOpen)}
              className="flex items-center hover:text-yellow-300"
            >
              Household Items
              {isHouseholdOpen ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
            </button>
            {isHouseholdOpen && (
              <ul className="absolute top-full left-0 bg-slate-400 text-black mt-1 rounded shadow-md w-36 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second ">
                  <Link href="/Household_Items/Bedsheets">Bedsheet</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Household_Items/Kitchen">Kitchen</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Household_Items/Homedecor">Home Decor</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Fashion Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsFashionOpen(!isFashionOpen)}
              className="flex items-center hover:text-yellow-300"
            >
              Men & Women Fashion
              {isFashionOpen ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
            </button>
            {isFashionOpen && (
              <ul className="absolute top-full left-0 bg-slate-400 text-black mt-1 rounded shadow-md w-48 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Fashion/Handbags">Ladies Handbags</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Fashion/Clothes">Ladies Clothes</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Fashion/Shoes">Men & Women Shoes</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Fashion/Watches">Men & Women Watches</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Fashion/Accessories">Jewellery & Accessories</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Kids Menu Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsKidsOpen(!isKidsOpen)}
              className="flex items-center hover:text-yellow-300"
            >
              Kids Menu
              {isKidsOpen ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
            </button>
            {isKidsOpen && (
              <ul className="absolute top-full left-0 bg-slate-400 text-black mt-1 rounded shadow-md w-36 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Kids_Menu/Toys">Toys</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Kids_Menu/Clothes">Clothes</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-second">
                  <Link href="/Kids_Menu/SchoolItems">School Items</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/Contact" className="hover:text-second">Order Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-second px-4 pb-4">
          <ul className="flex flex-col gap-3 text-white font-bold">
            <li className="hover:text-yellow-500">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="/About" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            </li>

            {/* Household Dropdown Mobile */}
            <li>
              <button
                className="flex items-center justify-between w-full hover:text-yellow-500"
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              >
                <span>Household Items</span>
                {isMobileDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {isMobileDropdownOpen && (
                <ul className="pl-4 pt-2 text-sm">
                  <li className="hover:text-red-700">
                    <Link href="/Household_Items/Bedsheets" onClick={() => setIsMenuOpen(false)}>Bedsheet</Link>
                  </li>
                  <li className="hover:text-red-700">
                    <Link href="/Household_Items/Kitchen" onClick={() => setIsMenuOpen(false)}>Kitchen</Link>
                  </li>
                  <li className="hover:text-red-700">
                    <Link href="/Household_Items/Homedecor" onClick={() => setIsMenuOpen(false)}>Home Decor</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Fashion Dropdown Mobile */}
            <li>
              <button
                className="flex items-center justify-between w-full hover:text-yellow-500"
                onClick={() => setIsMobileFashionOpen(!isMobileFashionOpen)}
              >
                <span>Men & Women Fashion</span>
                {isMobileFashionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {isMobileFashionOpen && (
                <ul className="pl-4 pt-2 text-sm">
                  <li className="hover:text-red-700">
                    <Link href="/Fashion/Handbags" onClick={() => setIsMenuOpen(false)}>Ladies Handbags</Link>
                  </li>
                  <li className="hover:text-red-700">
                    <Link href="/Fashion/Clothes" onClick={() => setIsMenuOpen(false)}>Ladies Clothes</Link>
                  </li>
                  <li className="hover:text-red-700">
                    <Link href="/Fashion/Shoes" onClick={() => setIsMenuOpen(false)}>Men & Women Shoes</Link>
                  </li>
                  <li className="hover:text-red-700">
                    <Link href="/Fashion/Watches" onClick={() => setIsMenuOpen(false)}>Men & Women Watches</Link>
                  </li>
                  <li className="hover:text-red-700">
                    <Link href="/Fashion/Accessories" onClick={() => setIsMenuOpen(false)}>Jewellery & Accessories</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Kids Dropdown Mobile */}
            <li>
              <button
                className="flex items-center justify-between w-full hover:text-yellow-500"
                onClick={() => setIsMobileKidsOpen(!isMobileKidsOpen)}
              >
                <span>Kids Menu</span>
                {isMobileKidsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {isMobileKidsOpen && (
                <ul className="pl-4 pt-2 text-sm">
                  <li className="hover:text-red-700">
                    <Link href="/Kids_Menu/Toys" onClick={() => setIsMenuOpen(false)}>Toys</Link>
                  </li>
                  <li className="hover:text-red-700">
                    <Link href="/Kids_Menu/Clothes" onClick={() => setIsMenuOpen(false)}>Clothes</Link>
                  </li>
                  <li className="hover:text-red-700">
                    <Link href="/Kids_Menu/SchoolItems" onClick={() => setIsMenuOpen(false)}>School Items</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:text-yellow-500">
              <Link href="/Contact" onClick={() => setIsMenuOpen(false)}>Order Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
