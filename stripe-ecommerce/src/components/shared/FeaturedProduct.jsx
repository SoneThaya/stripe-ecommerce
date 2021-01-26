import React, { useContext } from "react";
import { isInCart } from "../../helpers";
import { CartContext } from "../../context/CartContext";
import { withRouter } from "react-router-dom";
import "./featuredProduct.styles.scss";

const FeaturedProduct = (props) => {
  const { title, imageUrl, price, history, id, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const itemInCart = isInCart(product, cartItems);

  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!itemInCart && (
          <button
            onClick={() => addProduct(product)}
            className="button is-black nomad-btn"
          >
            ADD TO CART
          </button>
        )}
        {itemInCart && (
          <button
            onClick={() => {
              increase(product);
            }}
            className="button is-white nomad-btn"
            id="btn-white-outline"
          >
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
