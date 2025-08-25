import ProductCard from '../components/ProductCard';

export default function HouseholdPage() {
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
      image: '/Image/tumbler3.jpg',
      name: 'Tumbler',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/tumbler2.jpg',
      name: 'Tumbler',
      description: '',
      rating: 4,
    },
     {
      image: '/Image/pandalamp.jpg',
      name: 'Panda Lamp',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/ac_cover.jpg',
      name: 'AC Cover',
      description: '',
      rating: 5,
    },
     {
      image: '/Image/sensorlight.jpg',
      name: 'Sensor Light',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/kitchenset.jpg',
      name: 'Kitchen Set',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/cleaningclothroll.jpg',
      name: 'Cleaning Cloth Roll',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/containerset.jpg',
      name: 'Container Set',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/dustcleaner.jpg',
      name: 'Dust Cleaner',
      description: '',
      rating: 5,
    },
     {
      image: '/Image/storagebox.jpg',
      name: 'Storage Box',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/4layerstorage.jpg',
      name: '4 Layers Storage',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/clothesshoerack.jpg',
      name: 'Clothes & Shoe Rack',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/dishwasherbrush.jpg',
      name: 'Dish Washer Brush',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/tumbler1.jpg',
      name: 'Tumbler',
      descriptin:'',
      rating: 4,
    },
   
    {
      image: '/Image/plasticmop.jpg',
      name: 'Plastic Mop',
      description: '',
      rating: 5,
    },
   
    {
      image: '/Image/trayset.jpg',
      name: 'Tray Set',
      description: '',
      rating: 4,
    },
    {
      image: '/Image/wallsheets.jpg',
      name: 'Wall Sheets',
      description: '',
      rating: 5,
    },
  
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Household Items
      </h1>
      <p className="mb-6 text-lg leading-relaxed text-white text-center font-serif">
          Enhance every corner of your home with our high quality household essentials.
          Functional and stylish products that make daily chores easier and more enjoyable.
          Shop smart with affordable prices and fast, reliable delivery!
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
