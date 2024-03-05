import { Heading, Img, Text } from "components";

const WhyChooseUs = () => {
  return (
    <div className="h-[757px] w-[90%] mt-[73px] relative max-w-[1440px] mx-auto ">
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
                                <Img
                                  src="images/img_svg.svg"
                                  alt="svg_seventeen"
                                  className="h-[39px]"
                                />
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
                              <Text
                                size="md"
                                as="p"
                                className="!text-gray-500_05 !font-inter"
                              >
                                GNINE is a synonymous hotel with a world-class
                                banquet facility, lavish hotel rooms, and a
                                multi-cuisine restaurant. A paradise to break
                                the monotony of the city hustle and relish the
                                present moments.
                              </Text>
                              <Text
                                size="md"
                                as="p"
                                className="w-[99%] !text-gray-500_05 !font-inter"
                              >
                                An experience of luxury with excellent 24×7*
                                room service. A restaurant with flavorous
                                delicacy to delight you with every bite.
                              </Text>
                              <Text
                                size="md"
                                as="p"
                                className="w-[99%] !text-gray-500_05 !font-inter"
                              >
                                A banquet with spacious to celebrate every
                                occasion. An exquisite property in the center of
                                the city. GNINE is the answer to all your
                                hospitality needs.
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
    </div>
  );
};

export default WhyChooseUs;
