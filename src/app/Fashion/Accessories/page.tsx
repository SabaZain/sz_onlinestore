import ProductCard from "@/app/components/ProductCard";

export default function AccessoriesPage() {
  const products = [
     {
      image: '/Image/earing1.jpg',
      name: 'Earings',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/earing2.jpg',
      name: 'Earings',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/earing3.jpg',
      name: 'Earings',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/earing4.jpg',
      name: 'Earings',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/earing5.jpg',
      name: 'Earings',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/rings.jpg',
      name: 'Rings',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/redstone_ring.jpg',
      name: 'Redstone Ring',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/lip_pensils.jpg',
      name: 'Ladies Lip Pensils',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/jewellerybox.jpg',
      name: 'Jewellery Box',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/navyblue_ring.jpg',
      name: 'Navyblue stone Ring',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/hairbow2.jpg',
      name: 'Hair Bow',
      description: '',
      rating: 5,
    },
   
];
return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Jewellery & other Accessories
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  );
}
