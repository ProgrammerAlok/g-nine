import { Heading, Img, Text } from "components";
import Footer from "components/Footer";
import { Helmet } from "react-helmet";
import "./style.css";

const MainLayout = ({
  children,
  title,
  image = `images/img_pngwing_7.png`,
  NavBar,
  NavItems,
}) => {
  return (
    <>
      <Helmet>
        <title>{title || "GN"} - G Nine</title>
      </Helmet>
      <Banner title={title} image={image} NavBar={NavBar} NavItems={NavItems} />
      {children}
      <Footer />
    </>
  );
};

const Banner = ({ title, image, NavBar, NavItems }) => {
  return (
    <div>
      <div className="home-banner-wrapper h-[30rem] relative ">
        <div className="max-w-[1440px] w-[90%] mx-auto ">
          {/* nav */}
          <NavBar NavItems={NavItems} />

          {/* heading */}
          <div className="flex flex-col items-end justify-start left-[33%] top-[1%] m-auto absolute">
            <Heading as="h1" className="mt-[108px] mr-[66px] !text-white-A700">
              {title}
            </Heading>
            <Img
              src="images/img_vector_amber_a700.svg"
              alt="vector_one"
              className="h-[15px] mt-2 mr-[105px]"
            />
          </div>

          {/* image div */}
          <div className="absolute bottom-[-42%] right-[40%] z-10 ">
            <Img
              src="images/img_pngwing_7.png"
              alt="food image"
              className="h-[23rem]"
            />
          </div>
          <Img
            src="images/img_section_divider1_png_59x1920.png"
            alt="section_three"
            className="w-screen object-cover absolute bottom-0 left-0"
          />
        </div>
      </div>
      <div className=" mb-[20%] " />
    </div>
  );
};

export default MainLayout;
