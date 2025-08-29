import ProductCard from "@/app/components/ProductCard";

export default function KidsSchoolPage() {
  const products = [
    {
      image: '/Image/kidsbag1.jpg',
      name: 'Kids Bag',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/schoolbag1.jpg',
      name: 'Kids Bag',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidsbag2.jpg',
      name: 'Kids Bag',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidscolorset.jpg',
      name: 'Kids Color Set',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidsmagicdiary.jpg',
      name: 'Kids Magic Dairy',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/kidslettercoloring.jpg',
      name: 'Kids Letter Color Set',
      description: '',
      rating: 4,
    },
    
  ];
return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Kids School Items
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


