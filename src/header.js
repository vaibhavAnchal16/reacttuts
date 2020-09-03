import React from "react";
import MenuItem from "./menuitem";

function Header({ a }) {
  {
    console.log("This is coming from Header.js file", a);
  }
  return (
    <div className="">
      <div className="header">
        This is Header
        <h1>
          <MenuItem a={a} />
        </h1>
      </div>
    </div>
  );
}

export default Header;
