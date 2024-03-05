import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, TextArea, Input, Heading, RatingBar } from "../../components";
import C1LandingPageOneRowTwo from "../../components/C1LandingPageOneRowTwo";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function LandingPageOnePage() {
  return (
    <>
      <Helmet>
        <title>g nine</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[126px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[1585px] w-full relative">
              <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 m-auto absolute">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-center items-center w-[79%]">
                    <Img src="images/img_div_bg_image.png" alt="divbgimage_one" className="w-[82%] object-cover" />
                    <div className="h-[570px] w-[570px] ml-[-285px] bg-orange-400 shadow-bs rounded-[50%]" />
                  </div>
                  <Img
                    src="images/img_div_bg_image_1000x697.png"
                    alt="divbgimage"
                    className="w-[37%] ml-[-285px] object-cover"
                  />
                </div>
                <Img
                  src="images/img_section_divider1_png.png"
                  alt="section_one"
                  className="w-full mt-[-91px] object-cover"
                />
              </div>
              <div className="flex justify-center w-24 h-[30px] left-0 bottom-0 right-0 top-0 m-auto absolute" />
              <div className="flex flex-row justify-end items-start w-[45%] right-[9%] top-[9%] m-auto absolute">
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
                                  <Heading size="xs" as="h1" className="!text-black-900_01 text-center !text-[12.6px]">
                                    Salad mixed
                                  </Heading>
                                  <Heading size="xs" as="h2" className="!text-black-900_01 text-center !text-[12.6px]">
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
                                  <Heading size="xs" as="h3" className="!text-black-900_01 text-center !text-[12.6px]">
                                    Salad with
                                  </Heading>
                                  <Heading size="xs" as="h4" className="!text-black-900_01 text-center !text-[12.6px]">
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
              </div>
              <Heading size="4xl" as="h6" className="right-[27%] top-[10%] m-auto !text-white-A700 !font-lora absolute">
                01
              </Heading>
              <Img
                src="images/img_h2_shape9_png.png"
                alt="h2shape9png_one"
                className="h-[351px] w-[6%] right-0 top-0 m-auto object-cover absolute"
              />
              <Img
                src="images/img_h2_shape2_png.png"
                alt="h2shape2png_one"
                className="h-[308px] w-[9%] bottom-[27%] right-0 m-auto object-cover absolute"
              />
              <div className="flex flex-row justify-between w-[6%] right-[34%] top-[9%] m-auto absolute">
                <div className="flex flex-col items-center justify-start">
                  <Text size="2xl" as="p" className="!text-amber-A700 !font-inter !font-normal rotate-[180deg]">
                    
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text size="2xl" as="p" className="!text-black-900_01 !font-inter !font-normal">
                    
                  </Text>
                </div>
              </div>
              <C1LandingPageOneRowTwo className="flex flex-row justify-between w-1/2 left-[13%] top-[2%] m-auto absolute" />
              {/* <Img
                src="images/img_div_slider_shape_224x215.png"
                alt="divslider_five"
                className="h-56 w-[12%] bottom-0 right-0 left-0 m-auto object-cover absolute"
              /> */}
              <div className="flex flex-col items-start justify-start w-[30%] bottom-[1%] right-[13%] m-auto absolute">
                <div className="flex flex-row justify-between items-center w-[34%]">
                  <Img src="images/img_svg.svg" alt="svg_one" className="h-[39px]" />
                  <Text size="xl" as="p" className="!text-blue_gray-900_01 !font-inter !font-medium">
                    About Us
                  </Text>
                  <div className="flex w-9 h-[29px]" />
                </div>
                <Heading size="2xl" as="h1" className="mt-3">
                  G Nine
                </Heading>
                <Text size="md" as="p" className="mt-[19px] !text-gray-500_05 !font-inter">
                  When Surat city, the Textile & diamond of hub of India, calls you; you have to stay at a place that is
                  in the heart of the city
                </Text>
                <Text size="md" as="p" className="mt-2.5 !text-gray-500_05 !font-inter">
                  Hotel G Nine keeps you within reach, be it conferences, meetings, workshops, corporate events,
                  entertaining delegates or even your destination functions, celebrations or any other social gathering
                  at your end.
                </Text>
                <Button
                  color="orange_A200_01"
                  size="md"
                  shape="round"
                  className="mt-10 font-poppins uppercase font-semibold min-w-[132px]"
                >
                  rEAD mORE
                </Button>
              </div>
              <div className="flex flex-row justify-start w-[48%] bottom-0 left-[3%] m-auto absolute">
                <div className="flex flex-row justify-start items-center w-full">
                  <Img src="images/img_about_6_1_png.png" alt="about61png_one" className="w-[73%] object-cover" />
                  <Img
                    src="images/img_about_6_2_png.png"
                    alt="about62png_one"
                    className="w-1/2 ml-[-198px] object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-1/4 gap-[30px] left-[13%] top-[15%] m-auto absolute">
                <div className="flex flex-col items-start justify-start w-full gap-0.5">
                  <div className="flex flex-row justify-start items-center w-[55%] gap-3">
                    <Img src="images/img_svg_white_a700.svg" alt="svg_five" className="h-[39px]" />
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
              </div>
            </div>
            {/* <div className="h-[1112px] w-full mt-[119px] relative">
              <div className="flex flex-row justify-start items-start h-[1008px] w-full top-0 right-0 left-0 py-1.5 m-auto bg-[url(/public/images/img_section.png)] bg-cover bg-no-repeat absolute">
                <div className="flex flex-col items-end justify-start w-full mb-36">
                  <Img
                    src="images/img_section_divider1_png_75x1907.png"
                    alt="section_three"
                    className="w-full object-cover"
                  />
                  <div className="flex flex-row justify-between items-start w-3/5 mt-[5px] mr-[74px]">
                    <div className="flex flex-col items-center justify-start w-[48%] mt-[63px] gap-[17px]">
                      <div className="flex flex-row justify-center w-2/5">
                        <div className="flex flex-row justify-start items-center w-full gap-2.5">
                          <Img src="images/img_svg.svg" alt="svg_nine" className="h-[39px]" />
                          <Text size="xl" as="p" className="!text-blue_gray-900_01 !font-inter !font-medium">
                            Our Service
                          </Text>
                          <div className="flex w-9 h-[29px]" />
                        </div>
                      </div>
                      <Heading size="2xl" as="h1">
                        Our Commitment
                      </Heading>
                    </div>
                    <div className="h-[104px] w-[11%] bg-gray-100" />
                  </div>
                  <div className="flex flex-row justify-start items-start w-full mt-[59px] gap-[23px] mx-auto max-w-[1622px]">
                    <div className="flex flex-row w-[89%] gap-[30px]">
                      <div className="flex flex-col items-start justify-start w-[32%] p-[19px] bg-white-A700 rounded-[10px]">
                        <Img
                          src="images/img_rectangle_1925.png"
                          alt="restaurant_one"
                          className="w-full object-cover rounded-[10px]"
                        />
                        <Heading size="xl" as="h4" className="mt-6 !font-inter capitalize">
                          RESTAURANT
                        </Heading>
                        <Text size="md" as="p" className="mt-[9px] !text-gray-500_05 !font-inter">
                          Our prime motive is to provide the best in both food and service. our multi-cuisine restaurant
                          boasts of highly trained chefs & service
                        </Text>
                        <div className="flex flex-row justify-start items-center mt-[19px] gap-3">
                          <a href="#">
                            <Text size="lg" as="p" className="!text-yellow-900 !font-inter">
                              Read More
                            </Text>
                          </a>
                          <Img src="images/img_frame.svg" alt="read_more_one" className="h-[18px] w-[18px]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[32%] p-[19px] bg-white-A700 rounded-[10px]">
                        <Img
                          src="images/img_rectangle_1925_276x420.png"
                          alt="image"
                          className="w-full object-cover rounded-[10px]"
                        />
                        <Heading size="xl" as="h4" className="mt-6 !font-inter capitalize">
                          ROOMS
                        </Heading>
                        <Text size="md" as="p" className="mt-[9px] !text-gray-500_05 !font-inter">
                          Stylish and Cosmopolitan rooms at G NINE is perfect for quick get-away or attend a conference.
                        </Text>
                        <div className="flex flex-row justify-start items-center mt-[19px] gap-3">
                          <a href="#">
                            <Text size="lg" as="p" className="!text-yellow-900 !font-inter">
                              Read More
                            </Text>
                          </a>
                          <Img src="images/img_frame.svg" alt="image_one" className="h-[18px] w-[18px]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[32%] p-[19px] bg-white-A700 rounded-[10px]">
                        <Img
                          src="images/img_rectangle_1925_1.png"
                          alt="image"
                          className="w-full object-cover rounded-[10px]"
                        />
                        <Heading size="xl" as="h4" className="mt-[25px] !font-inter capitalize">
                          BANQUET
                        </Heading>
                        <Text size="md" as="p" className="mt-2 !text-gray-500_05 !font-inter">
                          A perfect destination for all your special occasions of life offering Lavish banqueting and
                          catering solutions.
                        </Text>
                        <div className="flex flex-row justify-start items-center mt-[19px] gap-3">
                          <a href="#">
                            <Text size="lg" as="p" className="!text-yellow-900 !font-inter">
                              Read More
                            </Text>
                          </a>
                          <Img src="images/img_frame.svg" alt="image_one" className="h-[18px] w-[18px]" />
                        </div>
                      </div>
                    </div>
                    <div className="h-[205px] w-[10%] mt-[133px] bg-gray-100" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center w-full bottom-0 right-0 left-0 m-auto absolute">
                <Img
                  src="images/img_h2_shape2_png_319x146.png"
                  alt="h2shape2png"
                  className="w-[8%] z-[1] object-cover"
                />
                <Img
                  src="images/img_section_divider1_png_75x1907.png"
                  alt="section_five"
                  className="w-full ml-[-146px] object-cover"
                />
              </div>
              <Img
                src="images/img_image_6.png"
                alt="imagesix_one"
                className="h-[263px] w-[13%] bottom-[14%] right-0 m-auto object-cover absolute"
              />
            </div> */}
            {/* <div className="flex flex-row justify-between items-center w-full mt-[15px] max-w-[1439px]">
              <div className="flex flex-col items-start justify-start w-[39%] gap-10">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                    <div className="flex flex-col items-start justify-start w-[41%] gap-[18px]">
                      <div className="flex flex-row justify-between items-center w-[73%]">
                        <Img src="images/img_svg.svg" alt="svg_thirteen" className="h-[39px]" />
                        <Text size="xl" as="p" className="!text-blue_gray-900_01 !font-inter !font-medium">
                          Events
                        </Text>
                        <div className="flex w-9 h-[29px]" />
                      </div>
                      <Heading size="2xl" as="h1">
                        Gallery
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-2.5">
                      <Text size="md" as="p" className="w-[98%] !text-gray-500_05 !font-inter">
                        We have successfully organized 500+ events. Our expert staff has experience for organizing every
                        type of event, from birthday parts to corporate events, from spiritual pooja to wedding and
                        engagement functions.
                      </Text>
                      <Text size="md" as="p" className="!text-gray-500_05 !font-inter">
                        Our spacious banquet’s capacity is for 200+ people to enjoy the function.Our staff will handle
                        your entire event, all you have to make sure is that all your guests enjoy and make a memorable
                        event.
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  color="orange_A200_01"
                  size="md"
                  shape="round"
                  className="font-poppins uppercase font-semibold min-w-[132px]"
                >
                  rEAD mORE
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[57%] gap-5">
                <div className="flex flex-row justify-start items-end w-full gap-5">
                  <Img
                    src="images/img_rectangle_1929.png"
                    alt="image"
                    className="w-[27%] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_1927.png"
                    alt="image_one"
                    className="w-[42%] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_1928.png"
                    alt="image_two"
                    className="w-[27%] object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-row justify-start w-[10%] gap-[15px]">
                  <Button size="xs" shape="square" className="w-8">
                    <Img src="images/img_vector_yellow_900.svg" />
                  </Button>
                  <Button size="xs" shape="square" className="w-8 rotate-[180deg]">
                    <Img src="images/img_vector_yellow_900.svg" />
                  </Button>
                </div>
              </div>
            </div> */}
            {/* <div className="h-[757px] w-full mt-[73px] relative max-w-[1909px]">
              <Img
                src="images/img_h2_shape2_png_237x100.png"
                alt="h2shape2png"
                className="h-[237px] w-[6%] bottom-0 right-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
                <Img
                  src="images/img_hero_shape_2_6_png.png"
                  alt="heroshape2six"
                  className="w-[17%] ml-[453px] object-cover"
                />
                <div className="flex flex-row justify-start w-full mt-[-223px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-start items-center w-full">
                      <div className="flex flex-col items-center justify-start w-[21%] z-[1]">
                        <Img
                          src="images/img_div_slider_shape_412x390.png"
                          alt="divslider_seven"
                          className="w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-start items-center w-[93%] ml-[-241px]">
                        <Img
                          src="images/img_offer_img_png.png"
                          alt="offerimgpng_one"
                          className="w-[35%] z-[1] object-cover"
                        />
                        <div className="h-[670px] w-[82%] ml-[-285px] relative">
                          <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Img
                              src="images/img_section_divider1_png_64x1421.png"
                              alt="section_seven"
                              className="w-[99%] z-[1] object-cover"
                            />
                            <div className="h-[669px] w-full mt-[-63px] relative">
                              <Img
                                src="images/img_pseudo_669x1439.png"
                                alt="pseudo_three"
                                className="justify-center h-[669px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                              />
                              <div className="flex flex-col items-end justify-start w-[99%] gap-16 bottom-0 right-0 left-0 m-auto absolute">
                                <div className="flex flex-row justify-start items-center w-[70%] mr-6 gap-[46px]">
                                  <div className="flex flex-col items-start justify-start w-4/5 gap-[19px]">
                                    <div className="flex flex-col items-start justify-start w-[81%] gap-3">
                                      <div className="flex flex-row justify-start items-center w-[41%] gap-2.5">
                                        <Img src="images/img_svg.svg" alt="svg_seventeen" className="h-[39px]" />
                                        <Text
                                          size="xl"
                                          as="p"
                                          className="!text-blue_gray-900_01 !font-inter !font-medium"
                                        >
                                          Why Choose Us
                                        </Text>
                                        <div className="flex w-9 h-[29px]" />
                                      </div>
                                      <Heading size="2xl" as="h1">
                                        One Guest at a Time
                                      </Heading>
                                    </div>
                                    <div className="flex flex-col items-center justify-start gap-2.5">
                                      <Text size="md" as="p" className="!text-gray-500_05 !font-inter">
                                        GNINE is a synonymous hotel with a world-class banquet facility, lavish hotel
                                        rooms, and a multi-cuisine restaurant. A paradise to break the monotony of the
                                        city hustle and relish the present moments.
                                      </Text>
                                      <Text size="md" as="p" className="w-[99%] !text-gray-500_05 !font-inter">
                                        An experience of luxury with excellent 24×7* room service. A restaurant with
                                        flavorous delicacy to delight you with every bite.
                                      </Text>
                                      <Text size="md" as="p" className="w-[99%] !text-gray-500_05 !font-inter">
                                        A banquet with spacious to celebrate every occasion. An exquisite property in
                                        the center of the city. GNINE is the answer to all your hospitality needs.
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="h-40 w-[16%] bg-gray-100" />
                                </div>
                                <Img
                                  src="images/img_section_divider1_png_64x1421.png"
                                  alt="section_nine"
                                  className="w-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="h-[140px] w-[140px] left-[3%] top-[8%] m-auto bg-gray-100 absolute" />
                          <Img
                            src="images/img_hero_shape_2_6_png_312x236.png"
                            alt="heroshape2six"
                            className="h-[312px] w-[17%] bottom-[22%] left-[10%] m-auto object-cover absolute"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex flex-col items-center justify-start w-full mt-[78px] gap-[120px]">
              {/* <div className="flex flex-row justify-between w-full max-w-[1534px]">
                <div className="flex flex-col items-center justify-start w-[46%] mb-[30px] gap-10">
                  <div className="flex flex-col items-start justify-start w-full gap-2.5">
                    <div className="flex flex-row justify-start items-center w-[32%] gap-2.5">
                      <Img src="images/img_svg.svg" alt="svg_twentyone" className="h-[39px]" />
                      <Text size="xl" as="p" className="!text-blue_gray-900_01 !font-inter !font-medium">
                        Testimonials
                      </Text>
                      <div className="flex w-9 h-[29px]" />
                    </div>
                    <Heading size="2xl" as="h1" className="!leading-[80px]">
                      What customer saying
                      <br />
                      About Services
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[99%] gap-[30px]">
                    <div className="flex flex-row justify-start w-[91%]">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-center w-full p-10 bg-gray-100 rounded-[9px]">
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-col items-start justify-start w-full gap-3">
                              <Img src="images/img_symbol.svg" alt="symbol_three" className="h-8 opacity-0.5" />
                              <Text size="md" as="p" className="!text-gray-500_05 !font-inter">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                              </Text>
                              <div className="flex flex-row justify-between items-center w-full">
                                <div className="flex flex-row justify-start items-center w-2/5 gap-[15px]">
                                  <Img
                                    src="images/img_ellipse_591.png"
                                    alt="circleimage"
                                    className="h-[70px] w-[70px] rounded-[50%]"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[61%] gap-1.5">
                                    <Heading size="lg" as="h5" className="!text-black-900 !text-[23.12px]">
                                      Michel Clark
                                    </Heading>
                                    <RatingBar
                                      value={5}
                                      isEditable={true}
                                      color="#f08125"
                                      activeColor="#f08125"
                                      size={22}
                                      className="flex justify-between w-[110px] rounded-[1px]"
                                    />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_red_chili_2_png.png"
                                  alt="redchili2png"
                                  className="w-[27%] opacity-0.2 object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[5%] gap-2.5">
                      <div className="h-20 w-0.5 bg-gradient1" />
                      <div className="flex flex-col w-full gap-2.5">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[35px] w-[34px] relative">
                            <Img
                              src="images/img_group_6340.svg"
                              alt="image"
                              className="justify-center h-[35px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <Text
                              size="xs"
                              as="p"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-700_01 !font-inter text-center absolute"
                            >
                              1
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[35px] w-[34px] relative">
                            <Img
                              src="images/img_group_6341.svg"
                              alt="image"
                              className="justify-center h-[35px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <Text
                              size="xs"
                              as="p"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 !font-inter text-center absolute"
                            >
                              2
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[35px] w-[34px] relative">
                            <Img
                              src="images/img_group_6340.svg"
                              alt="image"
                              className="justify-center h-[35px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <Text
                              size="xs"
                              as="p"
                              className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-700_01 !font-inter text-center absolute"
                            >
                              3
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-20 w-0.5 bg-gradient1" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[49%] mt-[30px]">
                  <div className="h-[617px] w-full relative">
                    <div className="flex flex-row justify-start items-start w-[93%] h-full left-0 bottom-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_testi_card_shape_3_png.png"
                        alt="testicard_one"
                        className="w-[42%] mt-[66px] z-[1] object-cover"
                      />
                      <div className="flex flex-col items-center justify-start h-[617px] w-[617px] ml-[-212px] p-[38px] rounded-tl-[50%] rounded-tr-[308px] rounded-bl-[50%] rounded-br-[308px] border-red-A400 border-4 border-dashed">
                        <div className="h-[532px] w-[532px] opacity-0.3 rotate-[90deg] border-red-A400_75 border-4 border-dashed rounded-[50%]" />
                      </div>
                    </div>
                    <Img
                      src="images/img_testi_card_img_png.png"
                      alt="testicardimg"
                      className="justify-center h-[453px] w-[62%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[225px]"
                    />
                    <div className="h-[532px] w-1/2 right-0 bottom-0 top-0 m-auto absolute">
                      <Img
                        src="images/img_testi_card_shape_1_png.png"
                        alt="testicard_three"
                        className="h-[436px] w-full top-0 right-0 left-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="images/img_testi_card_shape_2_png.png"
                        alt="testicard_five"
                        className="h-[181px] w-[62%] bottom-0 left-0 m-auto object-cover absolute"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="flex flex-row justify-end w-full max-w-[2011px]">
                <div className="h-[1033px] w-full relative">
                  <div className="flex flex-col items-center justify-center w-max h-max gap-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-center justify-start w-[69%] gap-5">
                      <div className="flex flex-row justify-center w-[22%]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Img src="images/img_svg.svg" alt="svg_twentyfive" className="h-[39px]" />
                          <Text size="xl" as="p" className="!text-blue_gray-900_01 !font-inter !font-medium">
                            FAQ’S
                          </Text>
                          <div className="flex w-9 h-[29px]" />
                        </div>
                      </div>
                      <Heading size="2xl" as="h1" className="text-center !leading-[90px]">
                        Frequently Asked And Questions{" "}
                      </Heading>
                    </div>
                    <Accordion preExpanded={[0]} className="flex flex-col w-full gap-2.5">
                      {[...Array(4)].map((_, i) => (
                        <AccordionItem uuid={i} key={`expandablelistv${i}`}>
                          <div className="flex flex-col items-center justify-start w-full gap-[5px]">
                            <AccordionItemHeading className="w-full">
                              <AccordionItemButton>
                                <AccordionItemState>
                                  {(props) => (
                                    <>
                                      <div className="flex flex-row justify-between items-center w-full p-[22px] bg-white-A700 rounded-[5px]">
                                        <div className="flex flex-col items-center justify-start h-[19px] w-[19px] ml-3 gap-[199px] rotate-[90deg] bg-white-A700">
                                          {props?.expanded ? (
                                            <Img
                                              src="images/img_vector.svg"
                                              alt="vector_five"
                                              className="h-[15px] w-3.5"
                                            />
                                          ) : (
                                            <Img
                                              src="images/img_vector_gray_600_02.svg"
                                              alt="vector_seven"
                                              className="h-3.5 w-[15px]"
                                            />
                                          )}
                                        </div>
                                        <Heading
                                          size="md"
                                          as="h6"
                                          className="mt-[3px] ml-[19px] !text-yellow-900_04 !font-inter"
                                        >
                                          How do I Claim a Free Coupon?
                                        </Heading>
                                      </div>
                                    </>
                                  )}
                                </AccordionItemState>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="flex flex-row justify-center w-full p-[21px] bg-white-A700 rounded-[5px]">
                                <Text size="md" as="p" className="mb-[3px] mx-3.5 !text-gray-500_05 !font-inter">
                                  Restaurant are committed to honour any confirmed bookings we have generated. For added
                                  peace of mind you should always reconfirm your booking using the the link included in
                                  your reminder email, and it&#39;s also a good idea to take your confirmation email
                                  with you.{" "}
                                </Text>
                              </div>
                            </AccordionItemPanel>
                          </div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/defaultNoData.png" alt="createfrom_one" className="w-full object-cover" />
                    <Img
                      src="images/img_section_divider1_png_59x1920.png"
                      alt="section_eleven"
                      className="w-full mt-[-59px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Img
                        src="images/img_section_divider1_png_59x1920.png"
                        alt="section"
                        className="w-full z-[1] object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-1/4 mt-[-1px]">
                        <div className="h-[203px] w-[203px] ml-[35px] bg-gray-100" />
                        <Img
                          src="images/img_mask_group.png"
                          alt="image_three"
                          className="w-full mt-[-128px] object-cover"
                        />
                      </div>
                    </div>
                    <div className="h-[203px] w-[203px] mt-[-40px] ml-[35px] bg-gray-100_02" />
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="flex flex-col items-center justify-center w-full mt-[120px] gap-[60px] px-14 py-20 bg-gray-100 max-w-[1439px] rounded-[20px]">
              <div className="flex flex-col items-center justify-start w-[30%] gap-[11px]">
                <div className="flex flex-row justify-start items-center w-3/5 gap-2.5">
                  <Img src="images/img_svg.svg" alt="svg_twentynine" className="h-[39px]" />
                  <a href="#">
                    <Text size="xl" as="p" className="!text-blue_gray-900_01 !font-inter !font-medium">
                      CONTACT US
                    </Text>
                  </a>
                  <div className="flex w-9 h-[29px]" />
                </div>
                <Heading size="2xl" as="h1">
                  Get in Touch
                </Heading>
              </div>
              <div className="flex flex-row justify-between items-center w-[95%]">
                <Img src="images/img_group_1000003806.svg" alt="image_four" className="h-[606px] opacity-0.9" />
                <div className="flex flex-col items-start justify-start w-[56%] gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full gap-5">
                    <Input type="text" name="name" placeholder="Your Name" className="w-full" />
                    <Input type="number" name="phoneNumber" placeholder="Phone Number" className="w-full" />
                    <Input type="email" name="email" placeholder="Your Email" className="w-full" />
                    <Input name="inquire_for" placeholder="Inquire For" className="w-full" />
                    <TextArea
                      name="group241"
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
            </div> */}
          </div>
        </div>
        <footer className="flex flex-col w-full">
          <Img src="images/img_rectangle_1941.png" alt="image_five" className="w-full object-cover" />
          <div className="flex flex-col items-center justify-start w-full ml-[-1920px] gap-[85px]">
            <Img
              src="images/img_section_divider1_png_59x1920.png"
              alt="section_fifteen"
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
        </footer>
      </div>
    </>
  );
}
