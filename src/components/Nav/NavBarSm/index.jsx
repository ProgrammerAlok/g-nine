import { Img } from "components";
import { NavItems } from "..";

const NavBarSm = ({ toggle }) => {
  return (
    <div className="h-screen w-screen bg-imgblack1 bg-cover bg-no-repeat">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between pt-6">
          <div>
            <Img src="images/img_image_1.png" className={`h-[6rem]`} />
          </div>
          <div onClick={toggle}>
            <Img src="images/img-vector-cross.svg" className={`mt-4`} />
          </div>
        </div>
        <ul className="flex flex-col justify-center items-center gap-4 mt-8">
          <NavItems />
        </ul>
      </div>
    </div>
  );
};

export default NavBarSm;
