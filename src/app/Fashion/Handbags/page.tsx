import ProductCard from "@/app/components/ProductCard";

export default function HandbagsPage() {
  const products = [
    {
      image: '/Image/ladieshandbag2.jpg',
      name: 'Ladies Handbag',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ladieshandbagnew3.jpg',
      name: 'Ladies Handbag',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ladieshandbagnew4.jpg',
      name: 'Ladies Handbag',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ladieshandbagnew1.jpg',
      name: 'Ladies Handbag',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ladieshandbagnew2.jpg',
      name: 'Ladies Handbag',
      description: '',
      rating: 5,
    },
    
    {
      image: '/Image/ladieshandbag3.jpg',
      name: 'Ladies Hand Bag',
      description: '',
      rating: 5,
    },
   {
      image: '/Image/ladieshandbag1.jpg',
      name: 'Ladies Handbag',
      description: '',
      rating: 5,
    },
    
];
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Ladies Handbags
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
