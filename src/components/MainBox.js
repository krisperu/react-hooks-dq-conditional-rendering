import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const pageMap = {
    Profile: <Profile />, 
    Photos: <Photos />,
    Cocktails: <Cocktails />,
    Pokemon: <Pokemon />
  };

  const [selectedPage, setSelectedPage] = useState("Profile")
  
  return (
    <div>
      <MenuBar selectedPage={selectedPage} onMenuClick={setSelectedPage} />
      {pageMap[selectedPage]}
    </div>
  );
}

export default MainBox;
