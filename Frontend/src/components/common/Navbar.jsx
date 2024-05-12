import React, { useState } from "react";

import logo from "../../assets/logo2.png";
import { useNavigate, useNavigation } from "react-router-dom";
import { useAuthContext } from "../../hook/useAuthContext";
import { useLogout } from "../../hook/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();
  const setClicked = () => {
    if (flag == true) {
      setFlag(false);
      navigate("/login");
    } else {
      setFlag(true);
      navigate("/signup");
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className=" flex justify-between">
      <div className="flex flex-row gap-3 items-center m-2 ">
        <img src={logo} width={100} height={40} />
        <h1 className=' text-3xl font-bold text-gray-800 text-richblue-600'>
              Task Manager
          </h1>
      </div>

      <div className="mt-4">
        {!user ? (
          <button
            className="m-2 mr-10 p-5 rounded-[8px] border border-gray-800 bg-black text-white font-bold px-[12px] py-[8px]"
            onClick={() => setClicked()}
          >
            {flag ? "Login" : "Sign Up"}
          </button>
        ) : (
          <div>
            <span>{user.email}</span>
            <button
              className="m-2 mr-10 p-5 rounded-[8px] border border-gray-800 bg-black text-white font-bold px-[12px] py-[8px]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
