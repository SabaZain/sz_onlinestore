import ProductCard from '../components/ProductCard';

export default function FashionPage() {
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
      image: '/Image/ladieswatch2.jpg',
      name: 'Ladies Watch',
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
      image: '/Image/skechers1.jpg',
      name: 'Skechers',
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
      image: '/Image/ladiesfootwear3.jpg',
      name: 'Ladies Foot Wear',
      description: '',
      rating: 5,
    },
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
      image: '/Image/ladieshandbag3.jpg',
      name: 'Ladies Hand Bag',
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
      image: '/Image/gentssleepers1.jpg',
      name: 'Sleepers',
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
    {
      image: '/Image/ladiesfootwear1.jpg',
      name: 'Ladies Footwear',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ladieshandbag1.jpg',
      name: 'Ladies Handbag',
      description: '',
      rating: 5,
    },
    
    
    {
      image: '/Image/partywear1.jpg',
      name: 'Ladies Party Wear',
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
      image: '/Image/navyblue_ring.jpg',
      name: 'Navyblue stone Ring',
      description: '',
      rating: 5,
    },
    
    
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Fashion
      </h1>
      <p className="mb-6 text-lg leading-relaxed text-white text-center font-serif">
          Discover the latest styles and trends all in one place.Fashionable clothing for men, women, and kids suitable for every occasion.
          Premium quality, budget friendly prices, and trendsetting designs.
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
