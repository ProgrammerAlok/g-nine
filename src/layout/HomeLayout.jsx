import { Button, Heading, Img, Text } from "components";
import C1LandingPageOneRowTwo from "components/C1LandingPageOneRowTwo";
import React from "react";
import "./style.css";

const HomeLayout1 = ({ title }) => {
  return (
    <>
      <div className="h-[100vh] w-full relative">
        <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 absolute">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center items-center w-[79%]">
              <Img
                src="images/img_div_bg_image.png"
                alt="divbgimage_one"
                className="w-[50%] object-cover"
              />
              {/* <div className="w-[40rem] aspect-square ml-[-285px] bg-orange-400 shadow-bs rounded-[50%] absolute" /> */}
            </div>
            {/* <Img
              src="images/img_div_bg_image_1000x697.png"
              alt="divbgimage"
              className="w-[37%] ml-[-285px] object-cover"
            /> */}
          </div>
          <Img
            src="images/img_section_divider1_png.png"
            alt="section_one"
            className="w-full mt-[-91px] object-cover"
          />
        </div>

        {/* <div className="flex flex-row justify-end items-start w-[45%] right-[9%] top-[9%] m-auto absolute">
          <Img
            src="images/img_div_slider_shape.png"
            alt="divslider_one"
            className="w-[38%] mt-[100px] z-[1] object-cover"
          />
          <div className="flex flex-row justify-end items-start w-[86%] ml-[-196px]">
            <Img
              src="images/img_slider_dish_1_414x414_png.png"
              alt="sliderdishone"
              className="h-[414px] w-[414px] mt-[150px] z-[1] rounded-[50%]"
            />
            <div className="flex flex-row justify-end items-center w-[69%] ml-[-184px]">
              <Img
                src="images/img_div_slider_shape_197x324.png"
                alt="divslider_three"
                className="w-[65%] object-cover"
              />
              <div className="flex flex-col items-center justify-start w-[42%] ml-[-33px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row justify-center items-start w-full">
                    <div className="h-[774px] w-[72%] relative">
                      <Img
                        src="images/img_pseudo.png"
                        alt="pseudo_one"
                        className="justify-center h-[774px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col w-[66%] gap-[388px] right-[9%] top-[4%] m-auto absolute">
                        <div className="flex flex-col items-center justify-start w-[92%] mr-[7px] gap-1.5">
                          <Img
                            src="images/img_slider_dish_3_128x128_png.png"
                            alt="salad_mixed_one"
                            className="h-[89px] w-[89px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-center justify-start w-[79%] gap-px">
                            <Heading
                              size="xs"
                              as="h1"
                              className="!text-black-900_01 text-center !text-[12.6px]"
                            >
                              Salad mixed
                            </Heading>
                            <Heading
                              size="xs"
                              as="h2"
                              className="!text-black-900_01 text-center !text-[12.6px]"
                            >
                              fresh fruit
                            </Heading>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[92%] ml-[7px] gap-1.5">
                          <Img
                            src="images/img_slider_dish_2_128x128_png.png"
                            alt="sliderdishtwo"
                            className="h-[89px] w-[89px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-center justify-start w-[70%] gap-[3px]">
                            <Heading
                              size="xs"
                              as="h3"
                              className="!text-black-900_01 text-center !text-[12.6px]"
                            >
                              Salad with
                            </Heading>
                            <Heading
                              size="xs"
                              as="h4"
                              className="!text-black-900_01 text-center !text-[12.6px]"
                            >
                              vegetables
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[62%] mt-[258px] ml-[-68px] z-[1]">
                      <div className="flex flex-col items-start justify-start w-full gap-2">
                        <Img
                          src="images/img_slider_dish_1_128x128_png.png"
                          alt="sliderdishone"
                          className="h-32 w-32 rounded-[50%]"
                        />
                        <div className="flex flex-row justify-start ml-2">
                          <Heading
                            size="md"
                            as="h5"
                            className="!text-black-900_01 text-center !font-bold !leading-[23px] underline"
                          >
                            Spicy veg
                            <br />
                            Italian pasta
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <Heading
          size="4xl"
          as="h6"
          className="right-[27%] top-[10%] m-auto !text-white-A700 !font-lora absolute"
        >
          01
        </Heading> */}

        {/* chilly */}
        {/* <Img
          src="images/img_h2_shape9_png.png"
          alt="h2shape9png_one"
          className="h-[351px] w-[6%] right-0 top-0 m-auto object-cover absolute"
        /> */}

        {/* cherry */}
        {/* <Img
          src="images/img_h2_shape2_png.png"
          alt="h2shape2png_one"
          className="h-[308px] w-[9%] bottom-[27%] right-0 m-auto object-cover absolute"
        /> */}

        {/* <C1LandingPageOneRowTwo className="flex flex-row justify-between w-1/2 left-[13%] top-[2%] m-auto absolute" /> */}

        {/* <div className="flex flex-col items-start justify-start w-1/4 gap-[30px] left-[13%] top-[15%] m-auto absolute">
          <div className="flex flex-col items-start justify-start w-full gap-0.5">
            <div className="flex flex-row justify-start items-center w-[55%] gap-3">
              <Img
                src="images/img_svg_white_a700.svg"
                alt="svg_five"
                className="h-[39px]"
              />
              <Text size="lg" as="p" className="!text-yellow-900 !font-inter">
                Simply Delicious!
              </Text>
              <div className="flex w-9 h-[29px]" />
            </div>
            <div className="flex flex-row justify-start">
              <Heading as="h1" className="!text-white-A700">
                Welcome to G Nine
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-[13px] max-w-[417px]">
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
              className="ml-1 !text-white-A700 tracking-[2.00px] !font-inter capitalize text-center"
            >
              Mon-sun: 11:00am to 11:00pm
            </Text>
          </div>
          <Button
            size="md"
            shape="round"
            className="text-white-A700 font-poppins uppercase font-bold !border-2 min-w-[152px]"
          >
            inquiry now
          </Button>
        </div> */}
      </div>
    </>
  );
};

const HomeLayout = () => {
  const NavItem = [
    `Home`,
    `About Us`,
    `Rooms`,
    `Banquet`,
    `Restaurant`,
    `Events`,
    `FAQ's`,
    `Contact Us`,
  ];

  return (
    <div className="home-banner-wrapper h-screen md:h-[] ">
      <div className="max-w-[1440px] w-[90%] mx-auto ">
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
              {NavItem.map((item, key) => (
                <li key={key} className="">
                  <Text as="p" className="!text-gray-300_04">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="relative">

          <div className="relative ">
            <div className="w-[25rem] aspect-square bg-orange-400 shadow-bs rounded-[50%] absolute right-[16%] mt-[8.3%] overflow-hidden " />
            <div className="flex flex-row justify-end items-start w-[56%] right-0 top-[2%] m-auto absolute">
              <Img
                src="images/img_div_slider_shape.png"
                alt="divslider_one"
                className="w-[30%] mt-[100px] z-[1] object-cover"
              />
              <div className="flex flex-row justify-end items-start w-[86%] ml-[-198px]">
                <Img
                  src="images/img_slider_dish_1_414x414_png.png"
                  alt="sliderdishone"
                  className="w-[20rem] aspect-square mt-[150px] z-[1] rounded-[50%]"
                />
                <div className="flex flex-row justify-end items-center w-[69%] ml-[-184px]">
                  <Img
                    src="images/img_div_slider_shape_197x324.png"
                    alt="divslider_three"
                    className="w-[55%] object-cover mt-[15rem]"
                  />
                  <div className="flex flex-col items-center justify-start w-[42%] ml-[-33px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row justify-center items-start w-full">
                        <div className="h-[35em] w-[72%] relative">
                          <Img
                            src="images/img_pseudo.png"
                            alt="pseudo_one"
                            className="justify-center h-[48rem] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-col w-[66%] gap-[20rem] right-[9%] top-[0%] m-auto absolute">
                            <div className="flex flex-col items-center justify-start w-[92%] mr-[7px] gap-1.5">
                              <Img
                                src="images/img_slider_dish_3_128x128_png.png"
                                alt="salad_mixed_one"
                                className="w-[80px] aspect-auto rounded-[50%]"
                              />
                              <div className="flex flex-col items-center justify-start w-[79%] gap-px">
                                <Heading
                                  size="xs"
                                  as="h1"
                                  className="!text-black-900_01 text-center !text-[12.6px]"
                                >
                                  Salad mixed
                                </Heading>
                                <Heading
                                  size="xs"
                                  as="h2"
                                  className="!text-black-900_01 text-center !text-[12.6px]"
                                >
                                  fresh fruit
                                </Heading>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[92%] ml-[7px] gap-1.5">
                              <Img
                                src="images/img_slider_dish_2_128x128_png.png"
                                alt="sliderdishtwo"
                                className="w-[80px] rounded-[50%]"
                              />
                              <div className="flex flex-col items-center justify-start w-[70%] gap-[3px]">
                                <Heading
                                  size="xs"
                                  as="h3"
                                  className="!text-black-900_01 text-center !text-[12.6px]"
                                >
                                  Salad with
                                </Heading>
                                <Heading
                                  size="xs"
                                  as="h4"
                                  className="!text-black-900_01 text-center !text-[12.6px]"
                                >
                                  vegetables
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center justify-start w-[62%] mt-[13rem] ml-[-68px] z-[1]">
                          <div className="flex flex-col items-start justify-start w-full gap-2">
                            <Img
                              src="images/img_slider_dish_1_128x128_png.png"
                              alt="sliderdishone"
                              className="h-32 w-32 rounded-[50%]"
                            />
                            <div className="flex flex-row justify-start ml-2">
                              <Heading
                                size="md"
                                as="h5"
                                className="!text-black-900_01 text-center !font-bold !leading-[23px] underline"
                              >
                                Spicy veg
                                <br />
                                Italian pasta
                              </Heading>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start w-2/5 gap-[30px] left-0 mt-[8%] m-auto absolute">
            <div className="flex flex-col items-start justify-start w-full gap-0.5">
              <div className="flex flex-row justify-start items-center w-[55%] gap-3">
                <Img
                  src="images/img_svg_white_a700.svg"
                  alt="svg_five"
                  className="h-[39px]"
                />
                <Text size="lg" as="p" className="!text-yellow-900 !font-inter">
                  Simply Delicious!
                </Text>
                <div className="flex w-9 h-[29px]" />
              </div>
              <div className="flex flex-row justify-start">
                <Heading as="h1" className="!text-white-A700">
                  Welcome to G Nine
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[13px] max-w-[417px]">
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
                className=" !text-white-A700 tracking-[2.00px] !font-inter capitalize text-center"
              >
                Mon-sun: 11:00am to 11:00pm
              </Text>
            </div>
            <Button
              size="md"
              shape="round"
              className="text-white-A700 font-poppins uppercase font-bold !border-2 min-w-[152px]"
            >
              inquiry now
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
