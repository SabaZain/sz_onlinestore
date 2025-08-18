import Image from 'next/image';

function StarRating({ rating }) {
  return (
    <div className="flex items-center space-x-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          } hover:text-yellow-500 cursor-pointer transition-colors duration-200`}
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.849L19.335 24 12 20.202 4.665 24 6 15.599 0 9.75l8.332-1.595z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ image, name, description, rating }) {
  return (
    <div className="bg-gray-400 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      {/* Image with hover zoom effect */}
      <div className="relative w-full aspect-[4/3] overflow-hidden group">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
        <StarRating rating={rating} />
        <p>{description}</p>
      </div>
    </div>
  );
}
