import ProductCard from "@/app/components/ProductCard";

export default function ClothesPage() {
  const products = [
    {
      image: '/Image/ladiesdress1.jpg',
      name: 'Ladies Dress',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/chordsuit3.jpg',
      name: 'Chord Suit',
      description: '',
      rating: 5,
    },

    {
      image: '/Image/chordsuit1.jpg',
      name: 'Chord Suit',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/chordsuit2.jpg',
      name: 'Chord Suit',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/partywear1.jpg',
      name: 'Ladies Party Wear',
      description: '',
      rating: 5,
    },
   
];
return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Ladies Clothes
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
