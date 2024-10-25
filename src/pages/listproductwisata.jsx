import AgricultureShop from "./AgricultureShop";
import VacantField from "./VacantField";
import ExploreLeuwimalang from "./ExploreLeuwimalang";
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
      name: 'Villa Syariah',
      href: '#',
      imageSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/162805751.jpg?k=1219d2e6284c167ffee4fabfe704f485a394f8c72e09ea2db09a8249cfc0250f&o=&hp=1',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Lihat Detail',
      color: 'Lahan Pertanian subur di Desa Leuwimalang',
    },

    {
        id: 2,
        name: 'Curug Duyung',
        href: '#',
        imageSrc: 'https://ik.imagekit.io/tvlk/blog/2023/08/curug-putri-kencana.jpg?tr=dpr-2,w-675',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Lihat Detail',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 3,
        name: 'Kopi Klotok',
        href: '#',
        imageSrc: 'https://lh3.googleusercontent.com/p/AF1QipPU2gfgYzilgvwlsdHsQYtrGxUAjHha50ywKuq6=s680-w680-h510',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Lihat Detail',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 4,
        name: 'Bobocabin',
        href: '#',
        imageSrc: 'https://pagaralampos.disway.id/upload/3500801b48174239a9b4a0caa6ca246d.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Lihat Detail',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },
      
      {
        id: 5,
        name: 'Bukit Teletabis',
        href: '#',
        imageSrc: 'https://jalankebromo.com/wp-content/uploads/2024/01/Bukit-Teletubbies-Bromo.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Lihat Detail',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 6,
        name: 'Warung Makan Sunda',
        href: '#',
        imageSrc: 'https://akuchichie.com/wp-content/uploads/2023/01/Waroeng-Tuman-BSD-akuchichie-2.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Lihat Detail',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 7,
        name: 'Kebun Teh si Teteh',
        href: '#',
        imageSrc: 'https://awsimages.detik.net.id/community/media/visual/2022/08/20/wisata-kebun-teh-jember-2.jpeg?w=1200',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Lihat Detail',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },

      {
        id: 8,
        name: 'Villa Anggrek',
        href: '#',
        imageSrc: 'https://cdn.idntimes.com/content-images/community/2022/03/fromandroid-435f37dcc21674ecc9fc3eeb58731b23.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Lihat Detail',
        color: 'Lahan Pertanian subur di Desa Leuwimalang',
      },


    // More products...
  ]
  
  export default function ListProductWisata() {
    const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Wisata dan Destinasi</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => navigate('/ExploreLeuwimalang')} // Arahkan ke halaman Lahan saat diklik
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