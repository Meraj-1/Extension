import React, { useState } from "react";
import extensions from "../data.js";
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
      className={`transition-all p-2 duration-300 md:px-90 md:py-10 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
    >
      {/* Header */}
      <header
        className={`flex px-4  py-3 justify-between md:items-center border-2 md:px-6 md:py-3 rounded-lg shadow-md mb-8 transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"
          }`}
      >
        <img className="w-25 md:w-50" src={Icon.logo} alt="Logo" />
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
          className={`text-2xl font-bold mb-10 ${isDark ? "color-black" : "color-white"
            }`}
        >
          Extension
        </h2>
      </div>
      {/* Grid Section */}
      <div className="md:px-30">
        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensions.map((ext, index) => (
            <div
              key={index}
              className={` ${isDark ? "text-white bg-gray-800" : "text-gray"
                } flex flex-col items-start border  rounded-md p-4   shadow-sm`}
            >
              <div classname="flex flex-row">
                <div>
                  <img
                    src={ext.logo}
                    alt={ext.name}
                    className="w-10 h-10 rounded-md mb-2"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{ext.name}</h2>
                  <p className="text-sm">{ext.description}</p>
                </div>
              </div>
              {/* <span
                className={`mt-2 text-xs font-medium ${
                  ext.isActive ? "text-green-400" : "text-red-400"
                }`}
              >
                {ext.isActive ? "Active" : "Inactive"}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
