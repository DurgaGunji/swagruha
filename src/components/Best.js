import React, { useState } from "react";
import "./Best.css"; // Import the CSS file
import best from "../assets/best.png"; // Background image import
import im1 from "../assets/im1.png";
import im2 from "../assets/im2.png";
import im3 from "../assets/im3.png";
import im4 from "../assets/im4.png";
import { Button, Rating } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Best = () => {
  const [favorites, setFavorites] = useState({});
  const [cartItems, setCartItems] = useState({}); // Track cart items and quantities

  const products = [
    { id: 1, image: im1, name: "Besin Laddu", price: "₹150.00", weight: "500 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)", badge: "15% OFF" },
    { id: 2, image: im2, name: "Besin Laddu", price: "₹160.00", weight: "600 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)" },
    { id: 3, image: im3, name: "Besin Laddu", price: "₹160.00", weight: "600 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)" ,badge: "15% OFF"},
    { id: 4, image: im4, name: "Besin Laddu", price: "₹160.00", weight: "500 gms", shelfLife: "20 Days", rating: "(4.5k Reviews)" },
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
    <div className="container_b">
      <div className="backgroundSection_b">
        
      <div className="content">
    <div>
      <h2 className="title_b">Best Sellers</h2>
      <p className="elevate-text_b">Elevate your day with a wide range of our top-rated delicious products.</p>
    </div>
    <div className="arrowButtons">
      <button className="leftArrow">
        <ArrowBackIosIcon style={{ color: "black" ,borderRadius:"50px"}} />
      </button>
      <button className="rightArrow">
        <ArrowForwardIosIcon style={{ color: "black",borderRadius:"50px" }} />
      </button>
    </div>
  </div>
        <div className="productsGrid_b">
          {products.map((product) => (
            <div key={product.id} className="card_b">
              <div className="favoriteIconContainer_b" onClick={() => toggleFavorite(product.id)}>
                {favorites[product.id] ? (
                  <FavoriteIcon className="favoriteIcon" />
                ) : (
                  <FavoriteBorderIcon className="favoriteIcon" />
                )}
              </div>
              {product.badge && <span className="badge_b">{product.badge}</span>}
              <img src={product.image} alt={product.name} className="image" />
              <p className="categoryText">Traditional sweets</p>
              <h3 className="productName">{product.name}</h3>
              <p className="price">{product.price}</p>
              <div className="ratingContainer">
                <Rating name={`rating-${product.id}`} value={5} readOnly className="greenStars" />
                <span className="ratingText">{product.rating}</span>
              </div>
              <div className="buttonContainer">
                <Button variant="contained" endIcon={<KeyboardArrowDownIcon />} className="weightButton">
                  {product.weight}
                </Button>
                {/* Show quantity controls if product is in the cart */}
                {cartItems[product.id] ? (
                  <div className="quantityControls_b">
                    <button
                      onClick={() => decrementQuantity(product.id)}
                      style={{ color: "black", backgroundColor: "transparent", border: "none" }} // Inline style for color black
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
                  <button className="addToCartButton_b" onClick={() => handleAddToCart(product.id)}>
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
    </div>
  );
};

export default Best;
