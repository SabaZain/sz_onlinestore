import ProductCard from "@/app/components/ProductCard";

export default function ShoesPage() {
  const products = [
     {
      image: '/Image/ladiesfootwear3.jpg',
      name: 'Ladies Foot Wear',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ladiesfootwear2.jpg',
      name: 'Ladies Foot Wear',
      description: '',
      rating: 5,
    },
   {
      image: '/Image/ladiesfootwear1.jpg',
      name: 'Ladies Footwear',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/gentssleepers1.jpg',
      name: 'Sleepers',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/skechers1.jpg',
      name: 'Skechers',
      description: '',
      rating: 5,
    },
    
    
    
];
return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Men & Women Shoes
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
