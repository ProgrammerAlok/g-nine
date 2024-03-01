import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import C1LandingPageOneRowTwo from "../../components/C1LandingPageOneRowTwo";

export default function LandingPageFivePage() {
  return (
    <>
      <Helmet>
        <title>g nine</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[120px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[1038px] w-full relative">
              <div className="flex flex-col items-end justify-start w-1/2 left-[13%] top-[3%] m-auto absolute">
                <C1LandingPageOneRowTwo className="flex flex-row justify-between w-full" />
                <Heading as="h1" className="mt-[99px] mr-9 !text-white-A700">
                  Restaurant
                </Heading>
                <Img
                  src="images/img_vector_amber_a700.svg"
                  alt="vector_one"
                  className="h-[15px] mt-[17px] mr-[181px]"
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
              <Img
                src="images/img_red_chili_2_png_176x203.png"
                alt="redchili2png"
                className="h-44 w-[11%] bottom-[4%] right-0 m-auto object-cover absolute"
              />
            </div>
            <Heading as="h2" className="mt-[114px]">
              Hotel G Nine Surat
            </Heading>
            <div className="h-[828px] w-full mt-[49px] relative">
              <Img
                src="images/img_restaurant_interior.png"
                alt="restaurant"
                className="justify-center h-[828px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="justify-center h-[415px] w-4/5 left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="justify-center h-[415px] w-full left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border-2 border-solid absolute" />
                <div className="flex flex-row justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-row justify-center w-full p-[30px] bg-gray-900_e5 backdrop-opacity-[0.5] blur-[10.00px]">
                    <div className="flex flex-col items-start justify-start w-full pt-1.5 gap-4 max-w-[1440px]">
                      <Text size="xl" as="p" className="ml-[11px] !text-white-A700 !font-inter">
                        Our prime motive is to provide the best in both food and service.
                      </Text>
                      <div className="flex flex-col items-center justify-start gap-[15px]">
                        <Text size="xl" as="p" className="!text-white-A700 !font-inter">
                          our multi-cuisine restaurant boasts of highly trained chefs & service personnel which provides
                          you with rich hospitality& scrumptious taste complemented by our pleasant ambience &
                          atmosphere.
                        </Text>
                        <Text size="xl" as="p" className="!text-white-A700 !font-inter">
                          The team here has created an excellent menu that will appeal to anyone who loves the taste of
                          fresh and pure food and has an appreciation for great service.
                        </Text>
                        <Text size="xl" as="p" className="!text-white-A700 !font-inter">
                          Our skilful chefs personals that provide you the best culinary experience every time you visit
                          us. Menu carefully curated for you with the dishes from around the world that will teleport
                          you to the world of flavours. Our lavish tropical restaurant ambience for your comfort and
                          jolly experience.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Heading as="h3" className="mt-[123px]">
              Restaurant Gallery
            </Heading>
            <div className="flex flex-row justify-between items-start w-full mt-10 max-w-[1680px]">
              <Img
                src="images/img_h2_shape2_png_319x158.png"
                alt="h2shape2png_one"
                className="w-[10%] mt-[111px] object-cover"
              />
              <div className="flex flex-row justify-center w-[86%]">
                <div className="flex flex-row justify-start w-full gap-5">
                  <Img src="images/img_rectangle_4379.png" alt="image" className="w-1/2 object-cover rounded-[20px]" />
                  <div className="flex flex-col items-center justify-start w-1/2 gap-5">
                    <div className="flex flex-row justify-start w-full gap-5">
                      <Img
                        src="images/img_rectangle_4380.png"
                        alt="image_one"
                        className="w-[49%] object-cover rounded-[20px]"
                      />
                      <Img
                        src="images/img_rectangle_4381.png"
                        alt="image_two"
                        className="w-[49%] object-cover rounded-[20px]"
                      />
                    </div>
                    <div className="flex flex-row justify-start w-full gap-5">
                      <Img
                        src="images/img_rectangle_4382.png"
                        alt="image_three"
                        className="w-[49%] object-cover rounded-[20px]"
                      />
                      <Img
                        src="images/img_rectangle_4383.png"
                        alt="image_four"
                        className="w-[49%] object-cover rounded-[20px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="h-[622px] w-full relative">
              <Img
                src="images/img_rectangle_1941.png"
                alt="image_five"
                className="justify-center h-[622px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-start w-full gap-[88px] top-0 right-0 left-0 m-auto absolute">
                <Img
                  src="images/img_section_divider1_png_59x1920.png"
                  alt="section_three"
                  className="w-full object-cover"
                />
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-[83px]">
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
                        <ul className="flex flex-col items-center justify-start gap-[9px]">
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
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
