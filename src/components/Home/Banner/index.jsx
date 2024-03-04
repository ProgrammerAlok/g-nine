import React from 'react'
import { Button, Heading, Img, Text } from "components";
import "./style.css";

const HomeBanner = ({
  NavBar,
  NavItems
}) => {
  return (
    <div className="home-banner-wrapper h-[45rem] overflow-hidden ">
      <div className="max-w-[1440px] w-[90%] mx-auto  ">

        <NavBar NavItems={NavItems} />

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
  )
}

export default HomeBanner