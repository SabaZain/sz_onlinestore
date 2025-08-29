import ProductCard from "@/app/components/ProductCard";

export default function BedsheetPage() {
  const products = [
    {
      image: '/Image/bedsheet1.jpg',
      name: 'Bed Sheet',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/bedsheet2.jpg',
      name: 'Bed Sheet',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/bedsheet3.jpg',
      name: 'Bed Sheet',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/bedsheet4.jpg',
      name: 'Bed Sheet',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/bedsheet5.jpg',
      name: 'Bed Sheet',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/bedsheet6.jpg',
      name: 'Bed Sheet',
      description: '',
      rating: 5,
    },
   
    
  
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Bedsheets
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
