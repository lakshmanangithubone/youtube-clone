import React from "react";

import { categories } from "../utils/constants";

const Sidebar = ({ selected, setSelected }) => {
  //   const selected = "New";
  return (
    <div className="sidebar">
      {/* <h1> sidebar</h1> */}
      <div className="btns-div">
        {categories.map((Category) => {
          return (
            <button
              className={
                Category.name === selected ? "highlight-btn" : "sidebar-btn"
              }
              key={Category.name}
              onClick={() => setSelected(Category.name)}
            >
              <span
                className={
                  Category.name === selected ? "highlight-icon" : "sidebar-icon"
                }
              >
                {Category.icon}
              </span>
              <span>{Category.name}</span>
            </button>
          );
        })}
      </div>

      <p className="feed-h2">Copyright 2023 Lakshmanan</p>
    </div>
  );
};

export default Sidebar;
