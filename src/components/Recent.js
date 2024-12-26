import React, { useState } from "react";
import "./Recent.css"; // Import the CSS file
import re from "../assets/Rectangle 46.png";
import re1 from "../assets/Rectangle 46 (1).png";
import re2 from "../assets/Rectangle 46 (2).png";
import re3 from "../assets/Rectangle 46 (3).png";
import { Button, Rating } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Recent = () => {
  const [favorites, setFavorites] = useState({});
  const [cartItems, setCartItems] = useState({}); // Track cart items and quantities

  const products = [
    { id: 1, image: re, name: "Besin Laddu", price: "₹150.00", weight: "500 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)", },
    { id: 2, image: re1, name: "Besin Laddu", price: "₹160.00", weight: "600 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)" },
    { id: 3, image: re2, name: "Besin Laddu", price: "₹160.00", weight: "600 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)",badge: "Best Seller"  },
    { id: 4, image: re3, name: "Besin Laddu", price: "₹160.00", weight: "500 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)" ,badge: "Best Seller" },
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
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [productId]: prevCartItems[productId] + 1, // Increase quantity by 1
    }));
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
    <div className="container_r">
    <div className="content">
      <h2 className="title_r">Recent Searches</h2>
      <div className="arrowButtons">
      <button className="leftArrow">
        <ArrowBackIosIcon style={{ color: " #a10007" ,borderRadius:"50px"}} />
      </button>
      <button className="rightArrow">
        <ArrowForwardIosIcon style={{ color: "black",borderRadius:"50px" }} />
      </button>
    </div>
    </div>

      <div className="productsGrid_r">
        {products.map((product) => (
          <div key={product.id} className="card_r">
            <div className="favoriteIconContainer" onClick={() => toggleFavorite(product.id)}>
              {favorites[product.id] ? <FavoriteIcon className="favoriteIcon" /> : <FavoriteBorderIcon className="favoriteIcon" />}
            </div>
            {product.badge && <span className="badge_r">{product.badge}</span>}
            <img src={product.image} alt={product.name} className="image" />
            <p className="categoryText">Traditional sweets</p>
            <h3 className="productName">{product.name}</h3>
            <p className="price">{product.price}</p>
            <div className="ratingContainer_r">
              <Rating name={`rating-${product.id}`} value={5} readOnly className="greenStars" />
              <span className="ratingText">{product.rating}</span>
            </div>
            <div className="buttonContainer">
              <Button variant="contained" endIcon={<KeyboardArrowDownIcon />} className="weightButton">
                {product.weight}
              </Button>

              {/* Show quantity controls if product is in the cart */}
              {cartItems[product.id] ? (
                <div className="quantityControls">
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
                <button className="addToCartButton" onClick={() => handleAddToCart(product.id)}>
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

export default Recent;
