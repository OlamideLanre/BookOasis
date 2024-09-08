import {
  UserOutlined,
  ShoppingCartOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { dosignout } from "../auth";
import { useAuth } from "./Authcontext";
import user_ from "../assets/user_40px.png";
// itemInCartCount
export const NavBar = ({ inputValue, setInputValue, alreadyInCart,onCategoryChange }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  function handleInput(e) {
    setInputValue(e.target.value);
    // console.log(inputValue);
  }
  const avatarUrl = currentUser.photoURL
    ? currentUser.photoURL // Use Google avatar if available
    : user_; // Fallback to a default avatar

    const handleCategoryClick = (category) => {
      onCategoryChange(category); // Send category to parent component
      console.log(category + "selected");
      
    };

  return (
    <>
      <div className="navbar bg-white border-b-2">
        <div className="flex-1">
          <Link
            className="btn btn-ghost text-xl text-green-500"
            to="/"
            title="home"
          >
            BookOasis
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search e.g 'science'"
              value={inputValue}
              onChange={handleInput}
              className="inputField input-bordered w-24 md:w-auto bg-gray-100 pr-24 pl-5 py-2 rounded-md"
              title="Enter a key word e.g love, science etc"
            />
          </div>
          <div className="dropdown dropdown-end category">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn text-green-500 "
            >
              Category <DownOutlined />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li onClick={() => handleCategoryClick('All') 
              }>
                <a>All</a>
              </li>
              <li onClick={() => handleCategoryClick('Fiction') 
              }>
                <a>Fiction</a>
              </li>
              <li onClick={() => handleCategoryClick('Science')}>
                <a>Science</a>
              </li>
              <li onClick={() => handleCategoryClick('Romance')}>
                <a>Romance</a>
              </li>
              <li onClick={() => handleCategoryClick('History')}>
                <a>History</a>
              </li>
            </ul>
          </div>
          <Link
            to="/cart"
            className="btn btn-ghost btn-circle avatar cartIcon"
            title="cart"
          >
            <span className="indicator-item badge bg-green-400">{alreadyInCart}</span>
            <ShoppingCartOutlined />
          </Link>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="profile">
                <UserOutlined />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu flex flex-col gap-3 items-center justify-between menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className="avatar">
                <div className="ring-green-400 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={avatarUrl} />
                </div>
              </div>
              <p className="font-semibold max-w-45 p-1 rounded-md text-center inline h-max bg-blue-100 break-all break-words">
                {currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email}{" "}
              </p>

              <li>
                <a
                  onClick={() => {
                    dosignout().then(() => {
                      navigate("/signin");
                    });
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobileFormCtrl">
        <input
          type="text"
          placeholder="Search e.g 'science'"
          value={inputValue}
          onChange={handleInput}
          className="mobileInput input-bordered p-2 pr-10 pl-5 md:w-auto bg-white rounded-2xl "
          title="Enter a key word e.g love, science etc"
        />
      </div>
    </>
  );
};
