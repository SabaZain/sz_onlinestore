import { Button } from '../components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50 py-12 px-6 md:px-20">
      
      {/* LEFT CONTENT */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Trendy Clothes, Cozy Homes, Happy Kids.
        </h1>
        <p className="text-lg text-red-600 mb-6 font-serif">
          From stylish outfits to smart household picks explore everything you love in one place.
          Affordable, quality, and just a click away.
        </p>
        <Button className="bg-red-600 hover:bg-second text-white px-6 py-3 text-lg rounded">
          <Link href="/ExploreAllProducts">Explore All Products</Link>
        </Button>
      </div>

      {/* IMAGE */}
      <div className="mb-10 md:mb-0">
        <Image
          src="/Image/hero_image.webp"
          alt="Online Shopping Banner"
          width={800}
          height={800}
          className="rounded-xl shadow-lg"
        />
      </div>
      
    </section>
  );
};

export default Hero;
