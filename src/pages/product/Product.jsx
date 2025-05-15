import React, { useEffect, useState } from 'react';
import './product.css';
import { NavLink, useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

function Product() {
  const location = useLocation();
  const type = location.state?.type || "all";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((jsonData) => {
        if (type && jsonData.products?.[type]) {
          setProducts(jsonData.products[type]);
          setFilteredProducts(jsonData.products[type]);
        } else {
          setProducts([]);
          setFilteredProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, [type]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setSelectedImage(product.img[0]);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedImage(null);
  };

  return (
    <div className='product_container'>
      <div className='search_bar'>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <h2>{type.toUpperCase()} PRODUCTS</h2>
      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}
      <div className='product_lists'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className='card'
              onClick={() => handleCardClick(product)}
            >
              <img src={product.img[0]} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))
        ) : (
          <p>No products in this category</p>
        )}
      </div>
      {selectedProduct && (
        <div className='modal_overlay' onClick={closeModal}>
          <div className='modal_content' onClick={(e) => e.stopPropagation()}>
            <span
              className='close_button'
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </span>
            <img src={selectedImage} alt={selectedProduct.name} className="main_image" />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.specification}</p>
            <div className='gallery'>
              {selectedProduct.img.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedProduct.name} ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  className={selectedImage === image ? 'active' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Product;
