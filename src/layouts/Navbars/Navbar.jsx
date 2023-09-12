import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import logout from '../../assets/logout.svg'
import { Image } from "lucide-react";
const Navbar = () => {
  return (
    <div className=" w-28 pt-7 h-screen  border-r border-gray-200">
     <div className="flex flex-col items-center justify-between h-screen">
     <div className="flex items-center flex-col gap-5 ">
        <img src={logo} className="w-[4rem] pb-5" alt={'text'} />
        <Link to={"/"}>
          <span className=" text-[#901E75] flex items-center flex-col py-2 px-6 bg-[#FEDFE1] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z"
                fill="#901E75"
              />
            </svg>
            <span className=" text-[0.75rem]  font-normal">Home</span>
          </span>
        </Link>
        <Link to={"/courses"}>
          <span className="  flex items-center flex-col py-2 px-6 bg-[#E5E7EB] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 6H17V14.18C16.69 14.07 16.35 14 16 14C14.34 14 13 15.34 13 17C13 18.66 14.34 20 16 20C17.66 20 19 18.66 19 17V8H22V6ZM15 6H3V8H15V6ZM15 10H3V12H15V10ZM11 14H3V16H11V14Z"
                fill="#83858B"
              />
            </svg>
            <span className=" text-[0.75rem] text-[#83858B]  font-normal">Course</span>
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center cursor-pointer">
        <img src={logout} />
        <span className=" text-[0.75rem] text-[#83858B]  font-normal">Logout</span>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
