import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Layout from "../shared/Layout";

import "./checkout.styles.scss";

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);

  return (
    <Layout>
      <div className="checkout">
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h3>{`Amount to Pay: $${total}`}</h3>
      </div>
    </Layout>
  );
};

export default Checkout;