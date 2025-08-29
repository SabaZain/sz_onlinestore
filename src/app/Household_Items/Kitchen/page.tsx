import ProductCard from "@/app/components/ProductCard";

export default function KitchenPage() {
  const products = [
    
    {
      image: '/Image/kitchenspoons.jpg',
      name: 'Kitchen Spoons',
      description: '',
      rating: 5,
    },
    
    {
      image: '/Image/mopnew.jpg',
      name: 'Mop',
      description: '',
      rating: 5,
    },
   
    {
      image: '/Image/kitchenwipes.jpg',
      name: 'Kitchen Wipes',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/cleaningtowel.jpg',
      name: 'Kitchen Cleaning Towel',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/dryingmat.jpg',
      name: 'Kitchen Drying Mat',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/importedtumbler.jpg',
      name: 'High Quality Tumbler',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/tumblernew1.jpg',
      name: 'Tumbler',
      description: '',
      rating: 5,
    },
    
    {
      image: '/Image/tumblernew2.jpg',
      name: 'Tumbler',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/tumblernew3.jpg',
      name: 'Tumbler',
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
      image: '/Image/slicerblades.jpg',
      name: 'Kitchen Slicer Blades',
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
];
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Kitchen Items
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

