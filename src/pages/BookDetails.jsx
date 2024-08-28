import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";
import {
  DollarOutlined,
  LoadingOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BookDetails = () => {
  const { bookID } = useParams();
  const [bookInfo, setBookInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from localStorage if available
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems && savedCartItems !== "undefined"
      ? JSON.parse(savedCartItems)
      : [];

    // return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const CART_ITEMS = [];
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append(
    "x-apihub-key",
    "ht-Y1oRt4gDHzJDgAbGKXdQge6JxueERvp-1hc47mpwJa6A6uI"
  );
  myHeaders.append("x-apihub-host", "Big-Book-API.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "119056b9-68ee-424f-ad75-95f2664f9157");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const INFO_URL = `https://Big-Book-API.proxy-production.allthingsdev.co/${bookID}`;

  const getDetails = async () => {
    try {
      let response = await fetch(INFO_URL, requestOptions);
      let data = await response.json();
      setBookInfo(data);
      if (bookInfo != []) {
        setLoading(false);
      }
    } catch (error) {
      console.log("an error occured: " + error);
    }
  };
  useEffect(() => {
    getDetails();
  }, [bookID]);

  function AddToCart() {
    let newItem = {
      ID: bookInfo.id,
      Title: bookInfo.title,
      Cover: bookInfo.image,
      Price: bookInfo.title.length,
    };
    if (CART_ITEMS.push(newItem)) {
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
      // Save the updated cart to localStorage to keep the data persistent
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast("Book added to cart!");
      // console.log(CART_ITEMS);
    } else {
      toast("Item not added");
    }
  }
  return (
    <>
      <div className="parent">
        {loading ? (
          <div className="mr-auto ml-auto h-52 w-28 mt-20">
            <LoadingOutlined />
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-3xl text-green-600 text-center">
              {bookInfo.title}
              {/* hello */}
            </h1>
            <div className="flex gap-5 py-4 details-container">
              <div>
                <img
                  src={bookInfo.image}
                  alt={bookInfo.title}
                  className="w-64 "
                />
              </div>
              <div className="textDiv">
                <p className="font-semibold">
                  Subtitle:{" "}
                  {bookInfo.subtitle
                    ? bookInfo.subtitle
                    : "No subtitle available"}
                </p>
                <p>Description: {bookInfo.description}</p>
                <p>Publish date: {bookInfo.publish_date}</p>
                <p className="font-semibold text-black">
                  Price: ${bookInfo.title.length}
                </p>
                <button
                  className="px-10 py-2 text-white bg-green-900 rounded-lg mt-3 font-semibold"
                  onClick={AddToCart}
                >
                  Add to cart
                  <ShoppingOutlined className="ml-2" />
                  <ToastContainer position="top-left" />
                </button>
                {/* <button className="px-10 py-2 text-white bg-green-900 rounded-lg mt-3 font-semibold ml-3">
                  Buy now
                  <DollarOutlined className="ml-2" />
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
