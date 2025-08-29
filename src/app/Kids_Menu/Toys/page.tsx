import ProductCard from "@/app/components/ProductCard";

export default function KidsToysPage() {
  const products = [
    
    {
      image: '/Image/kidsprayermat.jpg',
      name: 'Kids Prayer Mat',
      description: '',
      rating: 4,
    },
   
    {
      image: '/Image/kidsplayhouse.jpg',
      name: 'Kids Play House',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/kidsminitent.jpg',
      name: 'Kids Mini Tent',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/kidscars.jpg',
      name: 'Kids Car',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/kidswatermat.jpg',
      name: 'Kids Water Mat',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/kidsminifan.jpg',
      name: 'Kids Mini Fan',
      description: '',
      rating: 5,
    },
    
    {
      image: '/Image/babytoys.jpg',
      name: 'Baby Toys',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/fishinggame.jpg',
      name: 'Fishing Game',
      description: '',
      rating: 4,
    },
    
];
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Kids Toys
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


