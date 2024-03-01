import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import C1LandingPageOneRowTwo from "../../components/C1LandingPageOneRowTwo";
import Footer from "../../components/Footer";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function LandingPageTwoPage() {
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
                <Heading as="h1" className="mt-[102px] mr-[110px] !text-white-A700">
                  FAQ’S
                </Heading>
                <Img src="images/img_vector_amber_a700.svg" alt="vector_one" className="h-[15px] mt-3.5 mr-[100px]" />
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
            <div className="flex flex-row justify-end w-full max-w-[2011px]">
              <div className="h-[1033px] w-full relative">
                <div className="flex flex-col items-center justify-center w-max h-max gap-[50px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-col items-center justify-start w-[69%] gap-5">
                    <div className="flex flex-row justify-center w-[22%]">
                      <div className="flex flex-row justify-between items-center w-full">
                        <Img src="images/img_svg.svg" alt="svg_one" className="h-[39px]" />
                        <Text size="xl" as="p" className="!text-blue_gray-900_01 !font-inter !font-medium">
                          FAQ’S
                        </Text>
                        <Img src="images/img_svg_yellow_900.svg" alt="svg_three" className="h-[29px]" />
                      </div>
                    </div>
                    <Heading size="2xl" as="h2" className="text-center !leading-[90px]">
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
                                            alt="vector_three"
                                            className="h-[15px] w-3.5"
                                          />
                                        ) : (
                                          <Img
                                            src="images/img_vector_gray_600_02.svg"
                                            alt="vector_five"
                                            className="h-3.5 w-[15px]"
                                          />
                                        )}
                                      </div>
                                      <Heading
                                        size="md"
                                        as="h3"
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
                                your reminder email, and it&#39;s also a good idea to take your confirmation email with
                                you.{" "}
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
                    alt="section_three"
                    className="w-full mt-[-59px] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_section_divider1_png_59x1920.png"
                      alt="section_five"
                      className="w-full z-[1] object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-1/4 mt-[-1px]">
                      <div className="h-[203px] w-[203px] ml-[35px] bg-gray-100" />
                      <Img src="images/img_mask_group.png" alt="image" className="w-full mt-[-128px] object-cover" />
                    </div>
                  </div>
                  <div className="h-[203px] w-[203px] mt-[-40px] ml-[35px] bg-gray-100_02" />
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
