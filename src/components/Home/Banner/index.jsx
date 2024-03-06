import { Button, Heading, Img, Text } from "components";
import "./style.css";

const HomeBanner = ({ NavBar, NavItems, toggle }) => {
  return (
    <div className="home-banner-wrapper h-[43rem] md:h-[38rem] relative overflow-hidden ">
      <div className="max-w-[1440px] w-[90%] mx-auto  ">
        <NavBar NavItems={NavItems} toggle={toggle} />

        <div className="flex md:flex-col justify-between mt-16 md:mt-2 md:gap-8">
          {/* left */}
          <div className="w-1/2 md:w-[75%] ">
            <div className="flex flex-col items-start justify-start w-[60%] gap-0.5">
              <div className="flex flex-row justify-start items-center w-full gap-3">
                <Img
                  src="images/img_svg_white_a700.svg"
                  alt="svg_five"
                  className="h-[39px]"
                />
                <Text size="lg" as="p" className="!text-yellow-900 !font-inter">
                  Simply Delicious!
                </Text>
                <Img
                  src="images/img_svg_white_a700.svg"
                  alt="svg_five"
                  className="h-[39px] scale-x-[-1]"
                />
              </div>
              <div className="flex flex-row justify-start">
                <Heading as="h1" className="!text-white-A700">
                  Welcome to G Nine
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-2 max-w-[417px]">
              <Heading
                size="xl"
                as="h4"
                className="!text-yellow-900_04 tracking-[2.00px] !font-inter uppercase text-center !font-bold"
              >
                Opening hours
              </Heading>
              <Text
                size="3xl"
                as="p"
                className=" !text-white-A700 tracking-[2.00px] !font-inter capitalize"
              >
                Mon-sun: 11:00am to 11:00pm
              </Text>
            </div>
            <Button
              size="md"
              shape="round"
              className="text-white-A700 font-poppins uppercase font-bold !border-2 min-w-[152px] mt-3"
            >
              inquiry now
            </Button>
          </div>

          {/* right */}
          <div className="w-1/2 md:w-[90%] md:ml-auto">
            <div className="flex  w-fit">
              <div>
                <Img src="images/home-banner-img-1.svg" className={``} />
              </div>
              <div>
                <Img src="images/home-banner-img-2.svg" className={``} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Img
        src="images/img_section_divider1_png_59x1920.png"
        alt="section_three"
        className="w-full object-cover absolute bottom-0 z-10 "
      />
    </div>
  );
};

export default HomeBanner;
