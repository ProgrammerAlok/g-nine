import { Img } from "components";
import React from "react";

const NavBar = ({
    NavItems
}) => {
  return (
    <nav className="flex w-[60%] py-2">
      <div>
        <Img
          src="images/img_image_1.png"
          alt="imageone_one"
          className="w-[30%] aspect-auto object-cover"
        />
      </div>
      <div className="ml-[-5rem] h-full my-auto w-full">
        <ul className="flex justify-center items-center gap-6">
          <NavItems />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
