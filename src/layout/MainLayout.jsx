import { useState } from "react";
import { Heading, Img, Text } from "components";
import Footer from "components/Footer";
import { Helmet } from "react-helmet";
import { NavBar, NavBarSm, NavItems } from "components/Nav";
import "./style.css";

const MainLayout = ({
  children,
  title,
  image = `images/about-banner-image.svg`,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Helmet>
        <title>{title || "GN"} - G Nine</title>
      </Helmet>
      {!isOpen ? (
        <>
          <Banner title={title} image={image} toggle={toggle} />
          {children}
          <Footer />
        </>
      ) : (
        <NavBarSm toggle={toggle} />
      )}
    </>
  );
};

const Banner = ({ title, image, toggle }) => {
  return (
    <div>
      <div className="home-banner-wrapper h-[30rem] relative md:h-[15rem] ">
        <div className="max-w-[1440px] w-[90%] mx-auto ">
          {/* nav */}
          <NavBar NavItems={NavItems} toggle={toggle} />

          {/* heading */}
          <div className="flex flex-col items-end w-fit justify-start right-[40%] absolute">
            <Heading as="h1" className="mt-8 !text-white-A700">
              {title}
            </Heading>
            <Img
              src="images/img_vector_amber_a700.svg"
              alt="vector_one"
              className="h-[15px] md:h-[0.4rem] mt-2 mr-auto md:mr-0"
            />
          </div>

          {/* image div */}
          <div className=" relative bottom-[-35%] z-10 ">
            <Img
              src="images/img_pngwing_7.png"
              alt="food image"
              className="h-[23rem] md:h-[10rem] mx-auto mt-[15rem] md:mt-[5rem]"
            />
          </div>

          {/* corner image */}
          <Img
            src="images/img_section_divider1_png_59x1920.png"
            alt="section_three"
            className="w-full object-cover absolute bottom-0 left-0"
          />
        </div>
      </div>
      <div className=" mb-[18rem] md:mb-[8rem] " />
    </div>
  );
};

export default MainLayout;
