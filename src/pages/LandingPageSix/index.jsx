import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import C1LandingPageOneRowTwo from "../../components/C1LandingPageOneRowTwo";
import Footer from "../../components/Footer";

export default function LandingPageSixPage() {
  return (
    <>
      <Helmet>
        <title>g nine</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[120px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-end justify-start w-full gap-[9px]">
            <div className="h-[1304px] w-full relative">
              <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="h-[1038px] w-full relative">
                  <div className="flex flex-col items-end justify-start w-1/2 left-[13%] top-[3%] m-auto absolute">
                    <C1LandingPageOneRowTwo className="flex flex-row justify-between w-full" />
                    <Heading as="h1" className="mt-[99px] mr-[91px] !text-white-A700">
                      Events
                    </Heading>
                    <Img
                      src="images/img_vector_amber_a700.svg"
                      alt="vector_one"
                      className="h-[15px] mt-[17px] mr-[97px]"
                    />
                  </div>
                  <Img
                    src="images/img_div_bg_image_822x1223.png"
                    alt="divbgimage_one"
                    className="h-[822px] w-[64%] left-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_div_bg_image_822x697.png"
                    alt="divbgimage"
                    className="h-[822px] w-[37%] right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_section_divider1_png.png"
                    alt="section_one"
                    className="h-[107px] w-full bottom-[21%] right-0 left-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_h2_shape9_png_540x258.png"
                    alt="h2shape9png_one"
                    className="h-[540px] w-[14%] right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_pngwing_7.png"
                    alt="pngwingseven"
                    className="h-[627px] w-[33%] bottom-0 right-0 left-0 m-auto object-cover absolute rounded-[310px]"
                  />
                </div>
                <Img
                  src="images/img_h2_shape2_png_319x127.png"
                  alt="h2shape2png_one"
                  className="w-[7%] mt-[-53px] z-[1] object-cover"
                />
              </div>
              <Heading as="h2" className="w-max bottom-[3%] right-0 left-0 m-auto absolute">
                Hotel G Nine Surat
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-start w-[88%]">
              <div className="flex flex-row justify-start items-start w-full">
                <div className="flex flex-col items-start justify-start w-[86%] mb-10 gap-4 z-[1]">
                  <Text size="xl" as="p" className="ml-[11px] !text-gray-500_05 !font-inter">
                    Our prime motive is to provide the best in both food and service.
                  </Text>
                  <div className="flex flex-col items-center justify-start gap-[15px]">
                    <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                      our multi-cuisine restaurant boasts of highly trained chefs & service personnel which provides you
                      with rich hospitality& scrumptious taste complemented by our pleasant ambience & atmosphere.
                    </Text>
                    <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                      The team here has created an excellent menu that will appeal to anyone who loves the taste of
                      fresh and pure food and has an appreciation for great service.
                    </Text>
                    <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                      Our skilful chefs personals that provide you the best culinary experience every time you visit us.
                      Menu carefully curated for you with the dishes from around the world that will teleport you to the
                      world of flavours. Our lavish tropical restaurant ambience for your comfort and jolly experience.
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_red_chili_2_png_176x240.png"
                  alt="redchili2png"
                  className="w-[15%] mt-[182px] ml-[-1px] object-cover"
                />
              </div>
              <Heading as="h3" className="mt-[83px] ml-[431px]">
                Events Gallery
              </Heading>
              <div className="flex flex-col items-center justify-start w-full mt-10 mx-auto max-w-[1440px]">
                <div className="flex flex-row w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-[49%] mb-[462px] gap-[30px]">
                    <Img
                      src="images/img_rectangle_1940.png"
                      alt="image"
                      className="w-full object-cover rounded-[20px]"
                    />
                    <Img
                      src="images/img_rectangle_4373.png"
                      alt="image_one"
                      className="w-full object-cover rounded-[20px]"
                    />
                    <Img
                      src="images/img_rectangle_1944.png"
                      alt="image_two"
                      className="w-full object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[49%] mt-[111px] gap-[30px]">
                    <Img
                      src="images/img_rectangle_1941_986x705.png"
                      alt="image"
                      className="w-full object-cover rounded-[20px]"
                    />
                    <Img
                      src="images/img_rectangle_1943.png"
                      alt="image_one"
                      className="w-full object-cover rounded-[20px]"
                    />
                    <Img
                      src="images/img_rectangle_1945.png"
                      alt="image_two"
                      className="w-full object-cover rounded-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
