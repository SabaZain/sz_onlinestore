"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const images = [
    "/Image/HeroImage1.png",
    "/Image/HeroImage2.png",
    "/Image/NewArrivalWatch1.jpg",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50 py-12 px-6 md:px-20 overflow-hidden">
      
      {/* LEFT CONTENT */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Trendy Clothes, Cozy Homes, Happy Kids.
        </h1>
        <p className="text-lg text-red-600 mb-6 font-serif">
          From stylish outfits to smart household picks — explore everything you love in one place.
          Affordable, quality, and just a click away.
        </p>
        <Button className="bg-red-600 hover:bg-second text-white px-6 py-3 text-lg rounded">
          <Link href="/ExploreAllProducts">Explore All Products</Link>
        </Button>
      </div>

      {/* SLIDING IMAGE */}
      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-xl shadow-lg overflow-hidden mb-10 md:mb-0">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Hero image ${index + 1}`}
            fill
            className={`object-contain rounded-xl absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
