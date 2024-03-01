import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import C1LandingPageOneRowTwo from "../../components/C1LandingPageOneRowTwo";

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>g nine</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[120px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-end justify-start w-full gap-[62px]">
            <div className="flex flex-row justify-end w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[1038px] w-full relative">
                    <div className="flex flex-col items-end justify-start w-1/2 left-[13%] top-[3%] m-auto absolute">
                      <C1LandingPageOneRowTwo className="flex flex-row justify-between w-full" />
                      <Heading as="h1" className="mt-[99px] mr-[92px] !text-white-A700">
                        Rooms
                      </Heading>
                      <Img
                        src="images/img_vector_amber_a700.svg"
                        alt="vector_one"
                        className="h-[15px] mt-[17px] mr-[104px]"
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
                <div className="flex flex-col items-center justify-start w-full mt-[-152px] gap-[55px] z-[1] max-w-[1440px]">
                  <Heading as="h2">Hotel G Nine Surat</Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-4">
                    <Text size="xl" as="p" className="ml-[11px] !text-gray-500_05 !font-inter">
                      Stylish and Cosmopolitan rooms at G NINE is perfect for quick get-away or attend a conference.
                    </Text>
                    <div className="flex flex-col items-center justify-start gap-[15px]">
                      <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                        Hotel GNINE is enveloped in the prime locations of the city Surat with abundance in serenity and
                        luxury with sheer comfort and 24×7 staff service. A modern interior with exemplify rich
                        experience. Wide range of amenities to keep you on the edge and a success work/casual trip.
                      </Text>
                      <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
                        Here are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don&#39;t look even
                        slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                        isn&#39;t anything embarrassing hidden in the middle of text.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end items-start w-[88%]">
              <div className="flex flex-col items-center justify-start w-[86%] mt-[61px]">
                <div className="flex flex-col items-center justify-start w-full gap-10">
                  <Heading as="h3">Room Gallery</Heading>
                  <div className="flex flex-row justify-start items-start w-full gap-[30px]">
                    <div className="flex flex-col items-center justify-start w-[49%] gap-[30px]">
                      <Img
                        src="images/img_rectangle_4371.png"
                        alt="image"
                        className="w-full object-cover rounded-[20px]"
                      />
                      <Img
                        src="images/img_rectangle_4373.png"
                        alt="image_one"
                        className="w-full object-cover rounded-[20px]"
                      />
                      <Img
                        src="images/img_rectangle_4375.png"
                        alt="image_two"
                        className="w-full object-cover rounded-[20px]"
                      />
                      <Img
                        src="images/img_rectangle_4377.png"
                        alt="image_three"
                        className="w-full object-cover rounded-[20px]"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[49%] mt-[148px] gap-[30px]">
                      <Img
                        src="images/img_rectangle_4372.png"
                        alt="image_four"
                        className="w-full object-cover rounded-[20px]"
                      />
                      <Img
                        src="images/img_rectangle_4374.png"
                        alt="image_five"
                        className="w-full object-cover rounded-[20px]"
                      />
                      <Img
                        src="images/img_rectangle_4376.png"
                        alt="image_six"
                        className="w-full object-cover rounded-[20px]"
                      />
                      <Img
                        src="images/img_rectangle_4378.png"
                        alt="image_seven"
                        className="w-full object-cover rounded-[20px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img src="images/img_red_chili_2_png_176x240.png" alt="redchili2png" className="w-[15%] object-cover" />
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="h-[622px] w-full relative">
              <Img
                src="images/img_rectangle_1941.png"
                alt="image_eight"
                className="justify-center h-[622px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-start w-full gap-[86px] top-0 right-0 left-0 m-auto absolute">
                <Img
                  src="images/img_section_divider1_png_59x1920.png"
                  alt="section_three"
                  className="w-full object-cover"
                />
                <div className="flex flex-row justify-between items-start w-full max-w-[1439px]">
                  <div className="flex flex-row justify-between items-start w-[39%]">
                    <div className="flex flex-col items-start justify-start w-[38%] mt-0.5 gap-[45px]">
                      <Img src="images/img_image_1.png" alt="imageone_three" className="w-[79%] object-cover" />
                      <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                            Followers
                          </Text>
                          <div className="h-[3px] w-[91%] bg-gradient" />
                        </div>
                        <div className="flex flex-row justify-start gap-2.5">
                          <Button className="w-11">
                            <Img src="images/img_link.svg" />
                          </Button>
                          <Button className="w-11">
                            <Img src="images/img_link.svg" />
                          </Button>
                          <Button className="w-11">
                            <Img src="images/img_link.svg" />
                          </Button>
                          <Button className="w-11">
                            <Img src="images/img_link.svg" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] gap-[25px]">
                      <div className="flex flex-col items-start justify-start gap-[7px]">
                        <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                          About Restaurant
                        </Text>
                        <div className="h-[3px] w-[49%] bg-gradient" />
                      </div>
                      <div className="flex flex-row justify-start">
                        <Text as="p" className="!leading-7">
                          Quickly supply alternative strategic
                          <br />
                          theme areas vis-a-vis B2C mindshare.
                          <br />
                          Objectively repurpose stand-alone
                          <br />
                          synergy via user-centric architectures.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[8%] gap-7">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                        link
                      </Text>
                      <div className="h-[3px] w-full bg-gradient" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-[91%] ml-[9px]">
                      <ul className="flex flex-col items-start justify-start w-full gap-[13px]">
                        <li>
                          <a href="#">
                            <Text as="p">Home</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">About Us</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Rooms</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Banquet</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Restaurant</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Events</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">FAQ&#39;s</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">Contact Us</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[16%] gap-[25px]">
                    <div className="flex flex-row justify-start w-[44%]">
                      <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                        <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                          Address
                        </Text>
                        <div className="h-[3px] w-3/5 bg-gradient" />
                      </div>
                    </div>
                    <Text as="p" className="!leading-7">
                      Gangani House, beside Aagam Emporio,Udhana – Magdalla Road,Vesu, Surat
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[9%] gap-7">
                    <div className="flex flex-row justify-start w-[59%]">
                      <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                        <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                          Phone
                        </Text>
                        <div className="h-[3px] w-[78%] bg-gradient" />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start w-full">
                      <ul className="flex flex-col items-center justify-start w-full gap-[9px]">
                        <li>
                          <a href="#">
                            <Text as="p">+91 96247 37644</Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p">+91 98700 37644</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-3.5">
                  <div className="h-px w-full bg-gray-800_01" />
                  <div className="flex flex-row justify-between w-full max-w-[1439px]">
                    <Text as="p" className="mb-px">
                      2021 Copyright Gnine. All Rights Reserved.
                    </Text>
                    <div className="flex flex-row justify-center">
                      <a href="#">
                        <Text as="p">gninehospitality@gmail.com</Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
