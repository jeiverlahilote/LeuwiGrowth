import AgricultureShop from "./AgricultureShop";
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
      name: 'Tomat',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1629681328/attached_image/9-manfaat-tomat-buah-yang-disangka-sayur.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp10.000',
      color: 'Product segar hasil pertanian Desa Leuwimalang.',
    },

    {
        id: 2,
        name: 'Wortel',
        href: '#',
        imageSrc: 'https://asset.kompas.com/crops/CBk3ZQtC4_bXT4mMPzRrVq7qtUE=/1x0:999x666/750x500/data/photo/2019/08/06/5d492f045d831.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp15.000',
        color: 'Product segar hasil pertanian Desa Leuwimalang.',
      },

      {
        id: 3,
        name: 'Jagung',
        href: '#',
        imageSrc: 'https://asset.kompas.com/crops/fP-rdFDqsr8Zsyvy9yLCOplxenE=/1x0:997x664/750x500/data/photo/2020/11/18/5fb4f7854c32d.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp20.000',
        color: 'Product segar hasil pertanian Desa Leuwimalang.',
      },

      {
        id: 4,
        name: 'Strawberry',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1721267732/attached_image/strawberry-inilah-kandungan-nutrisi-dan-manfaatnya.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp15.000',
        color: 'Product segar hasil pertanian Desa Leuwimalang.',
      },
      
      {
        id: 5,
        name: 'Bayem',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/14/866b3b93-92b5-4904-beff-0a4217dd6b99.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp10.000',
        color: 'Product segar hasil pertanian Desa Leuwimalang.',
      },

      {
        id: 6,
        name: 'Terong',
        href: '#',
        imageSrc: 'https://awsimages.detik.net.id/community/media/visual/2024/10/21/terong-2.jpeg?w=1200',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp7.500',
        color: 'Product segar hasil pertanian Desa Leuwimalang.',
      },

      {
        id: 7,
        name: 'Kentang',
        href: '#',
        imageSrc: 'https://cdn1-production-images-kly.akamaized.net/9RpScM4alwqpG3HbtR7SphVGu-0=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2733644/original/082057800_1550655999-foto_kentang.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp15.000',
        color: 'Product segar hasil pertanian Desa Leuwimalang.',
      },

      {
        id: 8,
        name: 'Timun',
        href: '#',
        imageSrc: 'https://img-cdn.medkomtek.com/jxG7tLYxW2U34i6g3wYizhsl9ro=/0x0/smart/filters:quality(100):format(webp)/article/6P2P5b4pFVwl0QTxOI_7v/original/066196100_1561538042-Konsumsi-Timun-untuk-Diet-Efektifkah-By-Lyubimova-Tatiana-Shutterstock.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Rp10.000',
        color: 'Product segar hasil pertanian Desa Leuwimalang.',
      },


    // More products...
  ]
  
  export default function ListProduct() {
    const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product Pertanian</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onClick={() => navigate('/AgricultureShop')} // Arahkan ke halaman Lahan saat diklik
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