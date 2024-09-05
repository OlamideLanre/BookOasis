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

export const Cart = ({alreadyInCart, setAlreadyInCart}) => {
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
  const [selectedItems, setSelectedItems] = useState([]); // Store selected items

  let itemsInCart= cartItems.length
  function cartCount() {
    setAlreadyInCart(itemsInCart)
  }

  function displayInCart() {
    if (cartItems != []) {
      setIsEmpty(false);
    }
  }

  useEffect(() => {
    displayInCart();
    cartCount()
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
    setAlreadyInCart(itemsInCart - 1)
  }

  function processCheckout(checkbox, cartItem) {
    if (checkbox.checked) {
      setItemCount(itemCount + 1);
      setTotalPrice(totalPrice + cartItem.Price);
      setSelectedItems([...selectedItems, cartItem]); // Add selected item
    } else {
      setItemCount(itemCount - 1);
      setTotalPrice(totalPrice - cartItem.Price);
      setSelectedItems(selectedItems.filter((item) => item.ID !== cartItem.ID)); // Remove deselected item
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
                  onClick={(e) => processCheckout(e.target, cart)}
                  id="checkBox"
                />

                <img src={cart.Cover} alt={cart.Title} width={"100px"} />
                <div>
                  <h2 className="font-semibold text-green-600">{cart.Title}</h2>
                  <p>${cart.Price}</p>
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
              className="text-red-600 clear-cart p-2 rounded-md mt-2"
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
                  <h1 className="text-black font-semibold">Total:</h1>
                </div>
                <div>
                  <p id="itemcount">{itemCount}</p>
                  <h1 className="text-black font-bold" id="total">
                    $ {totalPrice}
                  </h1>
                </div>
              </div>
            </div>
            <Link
              to="/checkout"
              title="cart"
              state={{
                totalPrice: totalPrice,
                selectedItems: selectedItems,
              }}
            >
              <button className="bg-green-600 font-semibold text-white px-12 py-2 rounded-md ml-auto mr-auto flex mt-7">
                Checkout({itemCount})
              </button>
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
        </div>
      </div>
    </>
  );
};
