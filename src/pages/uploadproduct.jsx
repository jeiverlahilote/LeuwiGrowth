import React, { useState } from 'react';

const UploadProductPage = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('Wisata');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="upload-product-page">
      <h1>Upload Produk</h1>
      
      <div className="form-container">
        {/* Form untuk input produk */}
        <div className="form-left">
          <div className="form-group">
            <label>Nama Produk</label>
            <input 
              type="text" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)} 
              placeholder="Masukkan nama produk" 
            />
          </div>

          <div className="form-group">
            <label>Kategori</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Wisata">Wisata</option>
              <option value="Hasil Tani">Hasil Tani</option>
              <option value="Lahan">Lahan</option>
            </select>
          </div>

          <div className="form-group">
            <label>Deskripsi Produk</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Masukkan deskripsi produk"
            />
          </div>

          <div className="form-group">
            <label>Alamat</label>
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              placeholder="Masukkan alamat produk" 
            />
          </div>

          <div className="form-group">
            <label>Harga</label>
            <input 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              placeholder="Masukkan harga produk" 
            />
          </div>
        </div>

        {/* Bagian untuk upload gambar */}
        <div className="form-right">
          <div className="image-upload-container">
            <label htmlFor="image-upload" className="upload-label">
              {image ? (
                <img src={image} alt="Uploaded Product" className="uploaded-image" />
              ) : (
                <>
                  <div className="upload-icon">+</div>
                  <span>Upload Image</span>
                </>
              )}
            </label>
            <input 
              id="image-upload" 
              type="file" 
              onChange={handleImageUpload} 
              style={{ display: 'none' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProductPage;
