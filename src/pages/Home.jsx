import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import "./Home.css";
export const Home = ({ inputValue }) => {
  const [loading, setLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState([]);

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append(
    "x-apihub-key",
    "wjHb-wXzY1WzRJXe9hp05FsNqBg8Pn98GnTE1MisU29BUghC9Y"
  );
  myHeaders.append("x-apihub-host", "Big-Book-API.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "119056b9-68ee-424f-ad75-95f2664f9157");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const URL_REQUEST = `https://Big-Book-API.proxy-production.allthingsdev.co/search-books?query=books+about+${inputValue}&number=100`;
  const getBooks = async () => {
    try {
      let response = await fetch(URL_REQUEST, requestOptions);
      let data = await response.json();
      const details = data.books.flat();
      setBookDetails(details);
      if (bookDetails != []) {
        setLoading(false);
        console.log(bookDetails);
      }
      if (!response.ok) {
        console.log(
          "response not okay, here's the status code: " + response.status
        );
      }
    } catch (error) {
      console.log("error msg: " + error);
    }
  };
  useEffect(() => {
    getBooks();
  }, [inputValue]);

  return (
    <>
      <div className="container">
        <div className=" grid-container m-9 gap-3 justify-center items-center text-center">
          {loading ? (
            <div className="mr-auto ml-auto col-span-5 h-56 ">
              <LoadingOutlined />
            </div>
          ) : (
            bookDetails.map((book, index) => (
              <div key={index}>
                <div>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="ml-auto mr-auto "
                  />
                  <h2 className="text-black font-semibold">{book.title}</h2>
                  <button className="bg-green-400 px-5 py-2 rounded-lg text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
