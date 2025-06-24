import React, { useState } from "react";
import extensions from "../data.jsx";
import { Icon } from "./assets/assets";

function App() {
  const [theme, setTheme] = useState("light");

  const changetheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isDark = theme === "dark";

  return (
    // <div className="">
    <div
      className={`transition-all  pt-5  px-10  pb-10  md:px-40 duration-300 lg:h-screen   ${
        isDark ? "bg-gray-900 text-white" : "bg-blue-50 text-black"
      }`}
    >
      {/* Header */}
      <header
        className={`flex justify-between md:items-center  px-5 py-3 border-2 rounded-lg shadow-md mb-8 transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <img className="w-25 md:w-40" src={Icon.logo} alt="Logo" />
        <button onClick={changetheme} className="focus:outline-none">
          <img
            className="w-6 cursor-pointer"
            src={isDark ? Icon.sun : Icon.moon}
            alt="Toggle Theme"
          />
        </button>
      </header>
      <div>
        <h2
          className={`text-2xl font-bold mb-10 ${
            isDark ? "color-black" : "color-white"
          }`}
        >
          Extension
        </h2>
      </div>
      {/* Grid Section */}
      <div className="sm:px-20 md:px-10 lg:px-20 xl:px-40 2xl:px-40">
        <div className="grid px-20 sm:px-0   sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensions.map((ext, index) => (
            <div
              key={index}
              className={` ${
                isDark ? "text-white bg-gray-800" : "text-gray bg-white"
              } flex flex-row items-start border  rounded-md p-4   shadow-sm`}
            >
              {/* <div classname=""> */}
              <div classname="flex">
                <img
                  src={ext.logo}
                  alt={ext.name}
                  className="w-10 h-10 rounded-md mb-2"
                />
                {/* </div> */}
                {/* <div> */}
                <h2 className="text-md font-semibold">{ext.name}</h2>
                <p className="text-xs font-normal">{ext.description}</p>
              </div>
              {/* </div> */}
              <span
                className={`mt-2 text-xs font-medium ${
                  ext.isActive ? "text-green-400" : "text-red-400"
                }`}
              >
                {ext.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
