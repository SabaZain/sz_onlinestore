import ProductCard from "@/app/components/ProductCard";

export default function HomedecorPage() {
  const products = [
    
    {
      image: '/Image/electrichumidifier.jpg',
      name: 'Electric Humidifier',
      description: '',
      rating: 5,
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
      image: '/Image/wallsheets.jpg',
      name: 'Wall Sheets',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/mobilewaterpouch.jpg',
      name: 'Mobile Water Pouch',
      description: '',
      rating: 5,
    },
    {
      image: '/Image/raincoat.jpg',
      name: 'Rain Coat',
      description: '',
      rating: 5,
    }
];
return (
    <section className="max-w-4xl mx-auto px-6 py-20 bg-black shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10">
        Homedecor & other Household Items
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


