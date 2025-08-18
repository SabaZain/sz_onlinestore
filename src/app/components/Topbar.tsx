// components/Topbar.tsx

import Image from 'next/image';


export default function Topbar() {
  return (
    <div className="bg-red-600 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
       <div className="flex items-center space-x-3">
        <Image src="/Image/WhatsApp.svg.webp" alt="logo" width={50} height={50} className='rounded-full p-2' />
        0332-3319007
         
        </div>
      </div>
    </div>
  );
}
