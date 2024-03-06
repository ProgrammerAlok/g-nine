import { Img } from "components";

const NavBar = ({ NavItems, toggle }) => {
  return (
    <nav className="flex w-full items-center md:justify-between gap-8 py-2">
      <div className="w-[4rem]">
        <Img
          src="images/img_image_1.png"
          alt="imageone_one"
          className=" aspect-auto object-cover"
        />
      </div>
      <div className="h-full my-auto w-[80%] md:w-fit ">
        <ul className="flex justify-start items-center gap-6 md:hidden">
          <NavItems />
        </ul>
        <div className="hidden md:block" onClick={toggle}>
          <Img src="images/hamberger-logo.svg" className={`w-6`} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
