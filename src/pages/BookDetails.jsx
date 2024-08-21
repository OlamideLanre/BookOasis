import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";
import { LoadingOutlined, ShoppingOutlined } from "@ant-design/icons";

export const BookDetails = () => {
  const { bookID } = useParams();
  const [bookInfo, setBookInfo] = useState();
  const [loading, setLoading] = useState(true);
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

  const INFO_URL = `https://Big-Book-API.proxy-production.allthingsdev.co/${bookID}`;

  const getDetails = async () => {
    try {
      let response = await fetch(INFO_URL, requestOptions);
      let data = await response.json();
      setBookInfo(data);
      // if (!response.ok) {
      //   console.log("response not okay: " + response.status);
      // }
      if (bookInfo != []) {
        setLoading(false);
        console.log("loading");
        console.log(bookInfo);
      }

      // console.log(data);
      // console.log(bookID);
      // console.log(response);
      // console.log(INFO_URL);
      // console.log(bookInfo);
    } catch (error) {
      console.log("an error occured: " + error);
    }
  };
  useEffect(() => {
    getDetails();
  }, [bookID]);

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
            <div className="flex gap-5 py-4">
              <div>
                <img
                  src={bookInfo.image}
                  alt={bookInfo.title}
                  className="w-64 "
                />
              </div>
              <div className="textDiv">
                <p>Description: {bookInfo.description}</p>
                <p>Publish date: {bookInfo.publish_date}</p>
                <p className="font-semibold text-black">
                  Price: ${bookInfo.title.length}
                </p>
                <button className="px-10 py-2 text-white bg-green-900 rounded-lg mt-3 font-semibold">
                  Add to cart
                  <ShoppingOutlined className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
