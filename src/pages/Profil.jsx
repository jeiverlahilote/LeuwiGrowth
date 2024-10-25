import React from 'react';

// Komponen untuk Kartu Profil
function ProfileCard() {
  return (
    <div className="bg-[#E4F0EC] rounded-xl shadow-md p-8 w-full max-w-lg">
      <div className="flex flex-col items-center">
        <img
          className="w-40 h-40 rounded-full object-cover mb-6"
          src="https://img.freepik.com/free-photo/view-3d-woman-wearing-hijab_23-2151112551.jpg"
          alt="Profile"
        />
        <h2 className="text-xl font-bold">Nadya Widya Astuti</h2>
        <p className="text-gray-600 mt-3 text-lg">+62 812 3456 7890</p>
        <p className="text-gray-600 text-lg">siti.andini@gmail.com</p>
        <p className="text-gray-600 text-center text-lg">
          Jl. Mawar No. 12, Bogor, Jawa Barat, 16111
        </p>
        <button className="mt-6 bg-[#377E72] text-white text-lg px-8 py-3 rounded-lg">Edit</button>
      </div>
    </div>
  );
}

// Komponen untuk Riwayat Pembelian
function PurchaseHistory() {
  return (
    <div className="bg-[#E4F0EC] rounded-xl shadow-md p-8 w-full max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Riwayat Pembelian</h3>
        <a href="#" className="text-lg text-gray-500">View More</a>
      </div>
      <ul>
        <li className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">Tomat Organik</p>
              <p className="text-gray-500 text-md">10 Oktober 2024</p>
            </div>
            <button className="bg-[#377E72] text-white text-lg px-6 py-3 rounded-lg">Lihat Detail</button>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">Paket Wisata Kebun Leuwimalang</p>
              <p className="text-gray-500 text-md">5 September 2024</p>
            </div>
            <button className="bg-[#377E72] text-white text-lg px-6 py-3 rounded-lg">Lihat Detail</button>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">Lahan Pertanian (50 m²)</p>
              <p className="text-gray-500 text-md">20 Agustus 2024</p>
            </div>
            <button className="bg-[#377E72] text-white text-lg px-6 py-3 rounded-lg">Lihat Detail</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

// Komponen untuk Produk Favorit
function FavoriteProducts() {
  return (
    <div className="bg-[#E4F0EC] rounded-xl shadow-md p-8 w-full max-w-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Produk Favorit</h3>
        <a href="#" className="text-lg text-gray-500">View More</a>
      </div>
      <ul>
        <li className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">Tomat Organik</p>
              <p className="text-gray-500 text-md">Rp. 10.000/kg</p>
            </div>
            <button className="bg-[#377E72] text-white text-lg px-6 py-3 rounded-lg">Lihat Detail</button>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">Paket Wisata Kebun Leuwimalang</p>
              <p className="text-gray-500 text-md">Rp. 75.000/tiket</p>
            </div>
            <button className="bg-[#377E72] text-white text-lg px-6 py-3 rounded-lg">Lihat Detail</button>
          </div>
        </li>
        <li className="mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">Lahan Pertanian (50 m²)</p>
              <p className="text-gray-500 text-md">Rp. 6.000.000</p>
            </div>
            <button className="bg-[#377E72] text-white text-lg px-6 py-3 rounded-lg">Lihat Detail</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

// Komponen Utama untuk Halaman Profil
export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <ProfileCard />
        <div className="space-y-8 sm:col-span-2">
          <PurchaseHistory />
          <FavoriteProducts />
        </div>
      </div>
    </div>
  );
}
