import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import "./Home.css";
export const Home = ({ inputValue }) => {
  const [loading, setLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState();

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

  const URL_REQUEST =
    "https://Big-Book-API.proxy-production.allthingsdev.co/search-books?query=books+about+wizards";
  const getBooks = async () => {
    try {
      let response = await fetch(URL_REQUEST, requestOptions);
      console.log(response);
      if (!response.ok) {
        console.log(
          "response not okay, here's the status code: " + response.status
        );
      } else {
        setLoading(false);
        let data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log("error msg: " + error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <div>
          <div>
            <p>hello</p>
          </div>
          {/* <h3>{console.log(bookDetails.title)}</h3> */}
        </div>
      )}
    </>
  );
};
