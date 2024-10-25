import AgricultureShop from "./AgricultureShop";
import VacantField from "./VacantField";
import { useNavigate } from "react-router-dom"
// import hasilpanen1 from "../image/hasilpanen1"
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Lahan Tani (200 m²)',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1081915/pexels-photo-1081915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp8.000.000',
      color: 'Lahan Pertanian subur di Desa Leuwimalang',
    },

    {
        id: 2,
        name: 'Lahan Tani (200 m²)',
        href: '#',
        imageSrc: 'https://media.suara.com/pictures/653x366/2022/07/18/15420-pupuk-subsidi-pertanian-petani.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp5.000.000',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 3,
        name: 'Lahan Tani (200 m²)',
        href: '#',
        imageSrc: 'https://ik.trn.asia/uploads/2021/04/lahan-pertanian-mulai-terbatas.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp9.000.000',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 4,
        name: 'Lahan Tani (200 m²)',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/29041172/pexels-photo-29041172/free-photo-of-domba-yang-merumput-dengan-damai-di-padang-rumput-pedesaan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp25.000.000',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },
      
      {
        id: 5,
        name: 'Lahan Tani (200 m²)',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/2583847/pexels-photo-2583847.jpeg?auto=compress&cs=tinysrgb&w=600',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp25.000.000',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 6,
        name: 'Lahan Tani (200 m²)',
        href: '#',
        imageSrc: 'https://www.suarasurabaya.net/wp-content/uploads/2021/01/paddy-2161204_1920.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp25.000.000',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 7,
        name: 'Lahan Tani (200 m²)',
        href: '#',
        imageSrc: 'https://coretanpetualang.files.wordpress.com/2011/01/kebun-teh-gunung-ungaran2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp25.000.000',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 8,
        name: 'Lahan Tani (200 m²)',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/10804637/pexels-photo-10804637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp8.000.000',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },


    // More products...
  ]
  
  export default function ListProductLahan() {
    const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lahan</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => navigate('/VacantField')} // Arahkan ke halaman Lahan saat diklik
                style={{ cursor: 'pointer' }} // Tambahkan cursor pointer agar terlihat seperti tombol
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg text-gray-1000">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-lg font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }