import ProductCard from "@/app/components/ProductCard";

export default function WatchesPage() {
  const products = [
    {
      image: '/Image/ladies_goldenwatch.jpg',
      name: 'Ladies Watch',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ladies_goldenwatch1.jpg',
      name: 'Ladies Watch',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ladieswatch2.jpg',
      name: 'Ladies Watch',
      description: '',
      rating: 5,
    },
   {
      image: '/Image/ladieswatch1.jpg',
      name: 'Ladies Watch',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/new_gentswatch1.jpg',
      name: 'Gents Watch',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/new_gentswatch2.jpg',
      name: 'Gents Watch',
      description: '',
      rating: 5,
    },
    
    {
      image: '/Image/menwatch.jpg',
      name: 'Gents Watch',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/menwatch1.jpg',
      name: 'Gents Watch',
      description: '',
      rating: 5,
    },
   
    {
      image: '/Image/gentswatch1.jpg',
      name: 'Gents Watch',
      description: '',
      rating: 5,
    },
    
];
return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Men & Women Watches
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
