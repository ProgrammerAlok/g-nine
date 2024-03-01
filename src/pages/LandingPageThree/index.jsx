import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Img, Heading, Text } from "../../components";
import C1LandingPageOneRowTwo from "../../components/C1LandingPageOneRowTwo";
import Footer from "../../components/Footer";

export default function LandingPageThreePage() {
  return (
    <>
      <Helmet>
        <title>g nine</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[120px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[120px]">
            <div className="h-[1038px] w-full relative">
              <Img
                src="images/img_div_bg_image_822x1223.png"
                alt="divbgimage_one"
                className="h-[822px] w-[64%] left-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-end justify-start w-1/2 left-[13%] top-[3%] m-auto absolute">
                <C1LandingPageOneRowTwo className="flex flex-row justify-between w-full" />
                <a href="#" className="mt-[99px] mr-[19px]">
                  <Heading as="h1" className="!text-white-A700">
                    contact Us
                  </Heading>
                </a>
                <Img
                  src="images/img_vector_amber_a700.svg"
                  alt="vector_one"
                  className="h-[15px] mt-[17px] mr-[106px]"
                />
              </div>
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
            <div className="flex flex-row justify-center w-full max-w-[1439px]">
              <div className="flex flex-col items-center justify-center w-full gap-[60px] px-14 py-20 bg-gray-100 rounded-[20px]">
                <div className="flex flex-col items-center justify-start w-[30%] gap-[11px]">
                  <div className="flex flex-row justify-start items-center w-3/5 gap-2.5">
                    <Img src="images/img_svg.svg" alt="svg_one" className="h-[39px]" />
                    <a href="#">
                      <Text size="xl" as="p" className="!text-blue_gray-900_01 !font-inter !font-medium">
                        CONTACT US
                      </Text>
                    </a>
                    <Img src="images/img_svg_yellow_900.svg" alt="svg_three" className="h-[29px]" />
                  </div>
                  <Heading size="2xl" as="h2">
                    Get in Touch
                  </Heading>
                </div>
                <div className="flex flex-row justify-between items-center w-[95%]">
                  <Img src="images/img_group_1000003806.svg" alt="image" className="h-[606px] opacity-0.9" />
                  <div className="flex flex-col items-start justify-start w-[56%] gap-[30px]">
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                      <Input type="text" name="name" placeholder="Your Name" className="w-full" />
                      <Input type="number" name="phoneNumber" placeholder="Phone Number" className="w-full" />
                      <Input type="email" name="email" placeholder="Your Email" className="w-full" />
                      <Input name="inquire_for" placeholder="Inquire For" className="w-full" />
                      <TextArea
                        name="group208"
                        placeholder="Your message (optional)"
                        className="w-full text-gray-600_02 font-inter"
                      />
                    </div>
                    <Button
                      color="orange_A200_01"
                      size="md"
                      shape="round"
                      className="font-poppins uppercase font-semibold min-w-[100px]"
                    >
                      Submit
                    </Button>
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
