import {
  MinusOutlined,
  PlusOutlined,
  DeleteFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "./Cart.css";
import { Checkout } from "./Checkout";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from localStorage if available
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [isEmpty, setIsEmpty] = useState(true);

  function displayInCart() {
    if (cartItems != []) {
      setIsEmpty(false);
    }
  }

  useEffect(() => {
    displayInCart();
  }, []);

  function clearCart() {
    localStorage.clear();
    if (cartItems == []) {
      window.location.reload();
    }
  }

  return (
    <>
      <div className="text-2xl font-semibold   text-green-400 mb-4 ">
        <h1 className="text-center">Book Cart</h1>
      </div>

      {isEmpty ? (
        <div>Cart is empty</div>
      ) : (
        <div className="flex-parent">
          <div className="flex-container bg-white p-4 rounded-xl">
            {cartItems.map((cart, index) => (
              <div className="flex-items" key={cart.ID}>
                <input type="checkbox" />
                <img src={cart.Cover} alt="dummy img" width={"100px"} />
                <div>
                  <h2 className="font-semibold text-green-600">{cart.Title}</h2>
                  <p>${cart.Price}</p>
                  {/* <div className="quantity-ctrl">
                    <MinusOutlined /> <span className="qntity">1</span>
                    <PlusOutlined />
                  </div> */}
                </div>
              </div>
            ))}
         
            <p className="text-red-600">
              Clear cart <DeleteFilled onClick={clearCart} />{" "}
            </p>
          </div>
        </div>
      )}
      {/* <div className="float-right bg-black mr-52">
        <Checkout />
      </div> */}
    </>
  );
};
