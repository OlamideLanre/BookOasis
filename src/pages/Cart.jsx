import {
  MinusOutlined,
  PlusOutlined,
  DeleteFilled,
  ArrowLeftOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./Cart.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from localStorage if available
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems && savedCartItems !== "undefined"
      ? JSON.parse(savedCartItems)
      : [];
    // return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [isEmpty, setIsEmpty] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  function displayInCart() {
    if (cartItems != []) {
      setIsEmpty(false);
    }
  }

  useEffect(() => {
    displayInCart();
  }, []);

  function clearCart() {
    localStorage.removeItem("cartItems");
    setCartItems([]);
    setItemCount(0);
    setTotalPrice(0);
  }

  function removeItem(id) {
    console.log(`Removing item with id: ${id}`);
    const updatedAfterRemove = cartItems.filter((item) => item.ID !== id);
    setCartItems(updatedAfterRemove);
    localStorage.setItem("cartItems", JSON.stringify(updatedAfterRemove));
  }

  function processCheckout(checkbox, price) {
    if (checkbox.checked) {
      setItemCount(itemCount + 1);
      setTotalPrice(totalPrice + price);
    } else {
      setItemCount(itemCount - 1);
      setTotalPrice(totalPrice - price);
    }
  }

  return (
    <>
      {isEmpty ? (
        <div>Cart is empty</div>
      ) : (
        <div className="flex-parent flex gap-12">
          <div className="flex-container bg-white p-4 rounded-xl">
            {cartItems.map((cart, index) => (
              <div className="flex-items" key={cart.ID}>
                <input
                  type="checkbox"
                  onClick={() => processCheckout(event.target, cart.Price)}
                  id="checkBox"
                />
                <img src={cart.Cover} alt={cart.Title} width={"100px"} />
                <div>
                  <h2 className="font-semibold text-green-600">{cart.Title}</h2>
                  <p>${cart.Price}</p>
                  {/* <div className="quantity-ctrl">
                    <MinusOutlined /> <span className="qntity">1</span>
                    <PlusOutlined />
                  </div> */}
                </div>
                <div>
                  <DeleteOutlined
                    onClick={() => {
                      removeItem(cart.ID);
                    }}
                  />
                </div>
              </div>
            ))}

            <button
              className="text-red-600 clear-cart p-2 rounded-md mt-2 "
              onClick={clearCart}
            >
              Clear cart <DeleteFilled />
            </button>
          </div>
          {/* checkout content */}
          <div className="summary bg-white w-64 p-3 rounded-xl">
            <div className="ml-3">
              <h1 className="font-bold text-2xl text-green-400">Summary</h1>
              <div className="text-lg flex justify-between">
                <div>
                  <p>items: </p>
                  {/* <p>discount: </p> */}
                  <h1 className="text-black font-semibold">Total:</h1>
                </div>
                <div>
                  <p id="itemcount">{itemCount}</p>
                  {/* <p> $0 </p> */}
                  <h1 className="text-black font-bold" id="total">
                    $ {totalPrice}
                  </h1>
                </div>
              </div>
            </div>
            <Link
              to="/checkout"
              title="cart"
            >
              <button className="bg-green-600 font-semibold text-white px-12 py-2 rounded-md ml-auto mr-auto flex mt-7">
                Checkout({itemCount})
              </button>{" "}
            </Link>
          </div>
        </div>
      )}
      <div className="mobileCheckout">
        <div className="bg-white flex justify-evenly p-1 rounded-md">
          <h1 className="text-black font-bold" id="total">
            Total: ${totalPrice}
          </h1>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="bg-green-600 font-semibold text-white px-6 py-1 rounded-2xl"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Checkout({itemCount})
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>

          {/* <button className="bg-green-600 font-semibold text-white px-6 py-1 rounded-md">
            Checkout({itemCount})
          </button> */}
        </div>
      </div>
    </>
  );
};
