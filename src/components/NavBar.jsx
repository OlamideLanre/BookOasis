import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export const NavBar = () => {
  return (
    <>
      <div className="navbar bg-white border-b-2">
        <div className="btn btn-ghost btn-circle avatar cartIcon">
          <ShoppingCartOutlined />
        </div>
        <div className="flex-1 text-center justify-center">
          <a className="btn btn-ghost text-xl text-green-500">BookOasis</a>
        </div>

        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto bg-gray-100"
            />
          </div> */}
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
