import React, { useState } from "react";
import SideBar from "./SideBar";
import MenuBar from "./MenuBar";

const Layouts = () => {
  const [menubarOpen, setMenubarOpen] = useState(false);
  return (
    <div>
      <SideBar menubarOpen={menubarOpen} setMenubarOpen={setMenubarOpen} />
      {menubarOpen && <MenuBar />}
    </div>
  );
};

export default Layouts;
