import ProductCard from '../components/ProductCard';

export default function KidsMenuPage() {
  const products = [
    {
      image: '/Image/kidscolorset.jpg',
      name: 'Kids Color Set',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidsprayermat.jpg',
      name: 'Kids Prayer Mat',
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
      image: '/Image/kidsmagicdiary.jpg',
      name: 'Kids Magic Dairy',
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
      image: '/Image/kidslettercoloring.jpg',
      name: 'Kids Letter Color Set',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidsbag1.jpg',
      name: 'Kids Bag',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/kidsdress4.jpg',
      name: 'Kids Dress',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/fishinggame.jpg',
      name: 'Fishing Game',
      description: '',
      rating: 4,
    },
    
    {
      image: '/Image/kidsbag2.jpg',
      name: 'Kids Bag',
      description: '',
      rating: 4,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Kids Menu
      </h1>
      <p className="mb-6 text-lg leading-relaxed text-white text-center font-serif">
          A fun, safe, and colorful collection just for kids.From toys to clothes and school supplies, all carefully selected for quality and safety.
          Curated for every age, making it the first choice for parents everywhere.
        </p>

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
