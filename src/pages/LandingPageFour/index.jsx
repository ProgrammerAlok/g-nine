import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import C1LandingPageOneRowTwo from "../../components/C1LandingPageOneRowTwo";
import Footer from "../../components/Footer";

export default function LandingPageFourPage() {
  return (
    <>
      <Helmet>
        <title>g nine</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[120px] bg-white-A700">
        <div className="h-[2369px] w-full relative">
          <Img
            src="images/img_div_bg_image_822x1223.png"
            alt="divbgimage_one"
            className="h-[822px] w-[64%] left-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex flex-col items-end justify-start w-1/2 left-[13%] top-[1%] m-auto absolute">
            <C1LandingPageOneRowTwo className="flex flex-row justify-between w-full" />
            <Heading as="h1" className="mt-[108px] mr-[66px] !text-white-A700">
              Banquet
            </Heading>
            <Img src="images/img_vector_amber_a700.svg" alt="vector_one" className="h-[15px] mt-2 mr-[105px]" />
          </div>
          <Img
            src="images/img_div_bg_image_822x697.png"
            alt="divbgimage"
            className="h-[822px] w-[37%] right-0 top-0 m-auto object-cover absolute"
          />
          <Img
            src="images/img_section_divider1_png.png"
            alt="section_one"
            className="h-[107px] w-full top-[30%] right-0 left-0 m-auto object-cover absolute"
          />
          <Img
            src="images/img_h2_shape9_png_540x258.png"
            alt="h2shape9png_one"
            className="h-[540px] w-[14%] right-0 top-0 m-auto object-cover absolute"
          />
          <Img
            src="images/img_pngwing_7.png"
            alt="pngwingseven"
            className="h-[627px] w-[33%] top-[17%] right-0 left-0 m-auto object-cover absolute rounded-[310px]"
          />
          <div className="flex flex-row justify-start items-center w-[88%] gap-[27px] bottom-0 left-0 m-auto absolute">
            <Img
              src="images/img_testi_card_shape_1_png_383x213.png"
              alt="testicard_one"
              className="w-[13%] object-cover"
            />
            <div className="flex flex-col items-center justify-start w-[86%] gap-[49px]">
              <Heading as="h2">Hotel G Nine Surat</Heading>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[736px] w-full relative">
                  <Img
                    src="images/img_rectangle_4371_586x888.png"
                    alt="image"
                    className="h-[586px] w-[62%] left-0 top-[5%] m-auto object-cover absolute rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_4386.png"
                    alt="image_one"
                    className="h-[627px] w-[19%] bottom-0 right-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_rectangle_4385.png"
                    alt="image_two"
                    className="h-[564px] w-[19%] right-[15%] top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_rectangle_4384.png"
                    alt="image_three"
                    className="h-[614px] w-[19%] bottom-[4%] right-[30%] m-auto object-cover absolute"
                  />
                </div>
                <Text size="xl" as="p" className="mt-[50px] !text-gray-500_05 !font-inter">
                  A perfect destination for all your special occasions of life offering Lavish banqueting and catering
                  solutions. With its modern, elegant and spacious banquets it creates a perfect celebratory ambience
                  for all the precious occasions.
                </Text>
                <Text size="xl" as="p" className="mt-[15px] !text-gray-500_05 !font-inter">
                  Celebrate life\&#96;s milestones and remarkable occasions at G Nine Banquet hall. We are able to make
                  settings that can be intimate and grand, with our Spacious & aesthetically royal venues you are sure
                  to cherish every memory you make here for life!
                </Text>
                <Text size="xl" as="p" className="mt-[15px] !text-gray-500_05 !font-inter">
                  Our banquet strives to make your every event a memorable and cherished one. From corporate event to
                  friends and family celebrations, we are there for you. A lavish experience with wide variety of
                  cuisines to try from, every event has a new and better experience.
                </Text>
              </div>
            </div>
          </div>
          <Img
            src="images/img_h2_shape2_png_378x158.png"
            alt="h2shape2png_one"
            className="h-[378px] w-[9%] right-0 bottom-0 top-0 m-auto object-cover absolute"
          />
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
