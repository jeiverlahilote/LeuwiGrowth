import AgricultureShop from "./AgricultureShop";
import VacantField from "./VacantField";
import FarmersProjects from "./FarmersProjects";
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
      name: 'Petani Tomat',
      href: '#',
      imageSrc: 'https://asset-2.tstatic.net/aceh/foto/bank/images/panen-tomat-27-agustus-2022.jpg',
      imageAlt: ".",
      price: 'Daftar Sekarang',
      color: 'Lokasi: Rt.03 Rw.04  Pemilik Lahan:  Uncle George',
    },

    {
        id: 2,
        name: 'Petani Bayam',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/15682918/pexels-photo-15682918/free-photo-of-pria-laki-laki-lelaki-musim-panas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Daftar Sekarang',
        color: 'Lokasi: Rt.03 Rw.04  Pemilik Lahan:  Uncle George',
      },

      {
        id: 3,
        name: 'Petani Strawberry',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/15153681/pexels-photo-15153681/free-photo-of-cilek-ve-kadin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Daftar Sekarang',
        color: 'Lokasi: Rt.03 Rw.04  Pemilik Lahan:  Uncle George',
      },

      {
        id: 4,
        name: 'Petani teh',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/6711552/pexels-photo-6711552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Daftar Sekarang',
        color: 'Lokasi: Rt.03 Rw.04  Pemilik Lahan:  Uncle George',
      },
      
      {
        id: 5,
        name: 'Peternak Sapi',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/17067849/pexels-photo-17067849/free-photo-of-pedesaan-binatang-hewan-sapi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Daftara Sekarang',
        color: 'Lokasi: Rt.03 Rw.04  Pemilik Lahan:  Uncle George',
      },

      {
        id: 6,
        name: 'Petani Bawang',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/4894609/pexels-photo-4894609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Daftar Sekarang',
        color: 'Lokasi: Rt.03 Rw.04  Pemilik Lahan:  Uncle George',
      },

      {
        id: 7,
        name: 'Peternak Ayam',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/840111/pexels-photo-840111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Daftar Sekarang',
        color: 'Lokasi: Rt.03 Rw.04  Pemilik Lahan:  Uncle George',
      },

      {
        id: 8,
        name: 'Peternak Bebek',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/160509/ducklings-chicks-mama-duck-160509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Daftar Sekarang',
        color: 'Lokasi: Rt.03 Rw.04  Pemilik Lahan:  Uncle George',
      },
    // More products...
  ]
  
  export default function ListProject() {
    const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lowongan</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => navigate('/FarmersProjects')} // Arahkan ke halaman Lahan saat diklik
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