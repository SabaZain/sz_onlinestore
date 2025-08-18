import Image from 'next/image'

const Categories = [
  {
    id: 'household',
    name: 'Household Items',
    description: 'High quality essentials to make your home shine.',
    imageSrc: '/Image/householdcategory.webp', 
    href: '/Household_Items',
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Latest trends and styles for men & women.',
    imageSrc: '/Image/fashioncategory.jpg',
    href: '/Fashion',
  },
  {
    id: 'kids',
    name: 'Kids Menu',
    description: 'Fun, safe and colorful products for your little ones.',
    imageSrc: '/Image/kidscategory.webp',
    href: '/Kids_Menu',
  },
  
]


export default function CategoriesSection() {
  return (
    <section className='bg-amber-200'>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl text-red-600 md:text-4xl font-semibold mb-10 font-serif">
        Shop by Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-black p-8">
        {Categories.map(({ id, name, description, imageSrc, href }) => (
          <a
            key={id}
            href={href}
            className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto bg-white rounded-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-red-600">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
    </section>
  )
}
