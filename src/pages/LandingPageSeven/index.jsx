import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import C1LandingPageOneRowTwo from "../../components/C1LandingPageOneRowTwo";
import Footer from "../../components/Footer";

export default function LandingPageSevenPage() {
  return (
    <>
      <Helmet>
        <title>g nine</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[120px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[1108px] w-full relative">
              <div className="h-[822px] w-[64%] left-0 top-0 m-auto absolute">
                <Img
                  src="images/img_div_bg_image_822x1223.png"
                  alt="divbgimage_one"
                  className="justify-center h-[822px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-col items-end justify-start w-[79%] right-[2%] top-[4%] m-auto absolute">
                  <C1LandingPageOneRowTwo className="flex flex-row justify-between w-full" />
                  <Heading as="h1" className="mt-[97px] mr-[49px] !text-white-A700">
                    About Us
                  </Heading>
                  <Img
                    src="images/img_vector_amber_a700.svg"
                    alt="vector_one"
                    className="h-[15px] mt-[19px] mr-[111px]"
                  />
                </div>
              </div>
              <Img
                src="images/img_div_bg_image_822x697.png"
                alt="divbgimage"
                className="h-[822px] w-[37%] right-0 top-0 m-auto object-cover absolute"
              />
              <Img
                src="images/img_section_divider1_png.png"
                alt="section_one"
                className="h-[107px] w-full bottom-[26%] right-0 left-0 m-auto object-cover absolute"
              />
              <Img
                src="images/img_h2_shape9_png_540x258.png"
                alt="h2shape9png_one"
                className="h-[540px] w-[14%] right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-row justify-center items-center w-[66%] bottom-0 right-0 left-0 m-auto absolute">
                <Img src="images/img_about_6_1_png.png" alt="about61png_one" className="w-[73%] object-cover" />
                <Img
                  src="images/img_about_6_2_png.png"
                  alt="about62png_one"
                  className="w-1/2 ml-[-273px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-start w-full mt-[83px]">
              <Img src="images/img_h2_shape2_png_319x127.png" alt="h2shape2png_one" className="w-[7%] object-cover" />
              <div className="flex flex-row justify-center items-start w-[88%] mt-8">
                <div className="flex flex-col items-center justify-start w-[86%] mb-[121px] gap-[55px]">
                  <div className="flex flex-col items-center justify-start w-[44%] gap-4">
                    <Heading as="h2">G Nine</Heading>
                    <Text size="lg" as="p" className="!text-blue_gray-900_01 !font-inter">
                      Hotel G Nine boasts of a unique, new concept – offering 31 rooms.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                      Whether you are travelling for work or leisure; With our 24 hour front desk to take care of your
                      every need; our hospitality makes sure you bask in the feeling of being at home & ease at G Nine.
                    </Text>
                    <Text size="xl" as="p" className="mt-[21px] ml-[11px] !text-gray-500_05 !font-inter">
                      These rooms varies across categories being; Deluxe Rooms, Premium rooms.
                    </Text>
                    <Text size="xl" as="p" className="mt-4 !text-gray-500_05 !font-inter">
                      Choose our comfortable and marvellous ambience. GNINE offer 31 rooms with the category from Deluxe
                      to Premium suites. Restaurant at GNINE serves various cuisines which can delight your taste buds.
                      A well equipped elegant banquet, perfect for all your corporate or family events. Our hospitality
                      staff is always delighted to take care of your essential needs. At GNINE there’s plenty room for
                      your comfort but no room for the discomfort. Whether travelling for leisure or work our 24*7
                      available staff takes care of your every minute need that matter in your stay.
                    </Text>
                    <Text size="xl" as="p" className="mt-[15px] !text-gray-500_05 !font-inter">
                      Whether you are travelling for work or leisure; With our 24 hour front desk to take care of your
                      every need; our hospitality makes sure you bask in the feeling of being at home & ease at G Nine.
                    </Text>
                    <Text size="xl" as="p" className="mt-[15px] !text-gray-500_05 !font-inter">
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look
                      like readable English. Many desktop.
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_red_chili_2_png_176x240.png"
                  alt="redchili2png"
                  className="w-[15%] mt-[663px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full mt-[-1px] max-w-[1555px]">
              <Img src="images/img_pngwing_4.png" alt="pngwingfour_one" className="w-[41%] object-cover" />
              <div className="flex flex-col items-start justify-start w-[53%] gap-2.5">
                <Heading size="2xl" as="h3">
                  our vision
                </Heading>
                <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#39;t
                  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                  tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </Text>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-full mt-[120px] gap-[19px] max-w-[1554px]">
              <div className="flex flex-col items-start justify-start w-[53%] gap-2.5">
                <Heading size="2xl" as="h4">
                  our mission
                </Heading>
                <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don&#39;t.
                </Text>
                <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old.
                </Text>
              </div>
              <Img src="images/img_pngwing_6.png" alt="pngwingsix_one" className="w-[46%] object-cover" />
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
