import React, { useState } from "react";
import "./Categories.css"; // Import the CSS file
import { useMediaQuery } from "@mui/material"; 
import re from "../assets/Rectangle 46.png";
import re1 from "../assets/Rectangle 46 (1).png";
import re2 from "../assets/Rectangle 46 (2).png";
import re3 from "../assets/Rectangle 46 (3).png";
import re4 from "../assets/Rectangle 46 (4).png";
import re5 from "../assets/Rectangle 46 (5).png";
import re6 from "../assets/Rectangle 46 (6).png";
import re7 from "../assets/Rectangle 46 (7).png";
//import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Rating } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [cartItems, setCartItems] = useState({}); // Track cart items and quantities
  const [showDropdown, setShowDropdown] = useState(false); // Toggle for mobile dropdown

  const isMobile = useMediaQuery("(max-width:768px)");


  const categories = [
    "Traditional Sweets",
    "Traditional Flavours",
    "Cashew Sweets",
    "Bengali Sweets",
    "Savories",
    "Pickles",
    "Kova Sweets",
  ];

  const products = [
    { id: 1, image: re, name: "Besin Laddu", price: "₹150.00", weight: "500 gms", shelfLife: "20 Days", badge: "10% OFF" },
    { id: 2, image: re1, name: "Besin Laddu", price: "₹160.00", weight: "600 gms", shelfLife: "20 Days" },
    { id: 3, image: re2, name: "Besin Laddu", price: "₹160.00", weight: "600 gms", shelfLife: "20 Days" },
    { id: 4, image: re3, name: "Besin Laddu", price: "₹160.00", weight: "500 gms", shelfLife: "20 Days" },
    { id: 5, image: re4, name: "Besin Laddu", price: "₹160.00", weight: "500 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)", },
    { id: 6, image: re5, name: "Besin Laddu", price: "₹160.00", weight: "500 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)", },
    { id: 7, image: re6, name: "Besin Laddu", price: "₹160.00", weight: "500 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)", },
    { id: 8, image: re7, name: "Besin Laddu", price: "₹160.00", weight: "500 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)", badge: "8% OFF" },
  ];

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };
  const handleAddToCart = (productId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [productId]: 1, // Set default quantity to 1 when added to cart
    }));
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = {
        ...prevCartItems,
        [productId]: prevCartItems[productId] + 1, // Increase quantity by 1
      };
      console.log("After incrementing:", updatedCartItems); // Debug log
      return updatedCartItems;
    });
  };
  
  const decrementQuantity = (productId) => {
    setCartItems((prevCartItems) => {
      if (prevCartItems[productId] > 1) {
        return {
          ...prevCartItems,
          [productId]: prevCartItems[productId] - 1, // Decrease quantity by 1
        };
      } else {
        // If quantity is 1, show the Add to Cart button again
        const newCartItems = { ...prevCartItems };
        delete newCartItems[productId];
        return newCartItems;
      }
    });
  };

  return (
    <div className="container_cat">
      <h2 className="title_t">Categories</h2>
      <div className="tabs">
        {!isMobile ? (
          // Desktop view: Show categories as tabs
          categories.map((category, index) => (
            <span
              key={index}
              className={`tab ${selectedCategory === category ? "selected" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))
        ) : (
          // Mobile view: Show a dropdown with categories
          <div className="mobileDropdown">
            <div className="dropdownHeader" onClick={() => setShowDropdown(!showDropdown)}>
              <span>{selectedCategory || "Select Category"}</span>
              <KeyboardArrowDownIcon />
            </div>
            {showDropdown && (
              <div className="dropdownOptions">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="dropdownOption"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowDropdown(false); // Close dropdown after selection
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="productsGrid_g">
        {products.map((product,index) => (
          <div key={product.id} className="card">
            <div className="favoriteIconContainer" onClick={() => toggleFavorite(product.id)}>
              {favorites[product.id] ? (
                <FavoriteIcon className="favoriteIcon" />
              ) : (
                <FavoriteBorderIcon className="favoriteIcon" />
              )}
            </div>
            {product.badge && (
              <span
                className="badge_cat"
                style={{
                  backgroundColor:
                    index === 0
                      ? "green"
                      : index === products.length - 1
                      ? "goldenrod"
                      : "red", // Default badge color
                }}
              >
                {product.badge}
              </span>
            )}
            <img src={product.image} alt={product.name} className="image" />
            <p className="categoryText">Traditional sweets</p>
            <h3 className="productName">{product.name}</h3>
            <p className="price">{product.price}</p>
            <div className="ratingContainer_cat">
             {/* Display green stars only for the 2nd and 4th cards */}
             {(index === 4 || index === 5  || index === 6 || index === 7 || index === 8) && (
              <Rating name={`rating-${product.id}`} value={5} readOnly className="greenStars" />
              
             )}
             <span className="ratingText">{product.rating}</span>
            </div>
            <div className="buttonContainer">
              <Button variant="contained" endIcon={<KeyboardArrowDownIcon />} className="weightButton">
                {product.weight}
              </Button>
              {/* Show quantity controls if product is in the cart */}
              {cartItems[product.id] ? (
                <div className="quantityControls_cat">
                <button 
  onClick={() => decrementQuantity(product.id)} 
  style={{ color: "black" , backgroundColor: "transparent", border: "none"}} // Inline style for color black
>
  -
</button>
<span>{cartItems[product.id]}</span>
<button 
  onClick={() => incrementQuantity(product.id)} 
  style={{ color: "green", backgroundColor: "transparent", border: "none" }} // Inline style for color green
>
  +
</button>

                </div>
              ) : (
                <button className="addToCartButton_cat" onClick={() => handleAddToCart(product.id)}>
                  <ShoppingCartIcon style={{ marginRight: "5px" }} />
                  Add to Cart
                </button>
              )}
            </div>
            <p className="details">Shelf life: {product.shelfLife}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
