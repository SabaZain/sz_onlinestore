import ProductCard from "@/app/components/ProductCard";

export default function KidsClothesPage() {
  const products = [
    
     {
      image: '/Image/kidsnight1.jpg',
      name: 'Kids Night Dress',
      description: '',
      rating: 4,
    },
     {
      image: '/Image/kidsnight3.jpg',
      name: 'Kids Night Dress',
      description: '',
      rating: 4,
    },
     {
      image: '/Image/kidsnight4.jpg',
      name: 'Kids Night Dress',
      description: '',
      rating: 4,
    },
     {
      image: '/Image/kidsnight5.jpg',
      name: 'Kids Night Dress',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidsnight.jpg',
      name: 'Kids Night Dress',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidsdress1.jpg',
      name: 'Kids Dress',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidsdress2.jpg',
      name: 'Kids Dress',
      description: '',
      rating: 4,
    },
    
    {
      image: '/Image/kidsdress3.jpg',
      name: 'Kids Dress',
      description: '',
      rating: 4,
    },
    
  ];
return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Kids Clothes
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


