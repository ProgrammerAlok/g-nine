import { Heading, Img, Text } from "components";

const WhyChooseUs1 = () => {
  return (
    <div className="h-[757px] mt-[73px] relative py-10 ">
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
              <div className="flex flex-row justify-start items-center w-[93%] ml-[-241px] ">
                <Img
                  src="images/img_offer_img_png.png"
                  alt="offerimgpng_one"
                  className="w-[35%] z-[1] object-cover"
                />
                <div className="h-[670px] w-full ml-[-285px] relative">
                  <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img
                      src="images/img_section_divider1_png_64x1421.png"
                      alt="section_seven"
                      className="w-full z-[1] object-cover mb-[1rem]"
                    />
                    <div className="h-[669px] w-full mt-[-63px] relative">
                      <div className="flex flex-col items-end justify-start w-full gap-16 bottom-0 right-0 left-0 m-auto absolute">
                        <div className="flex flex-row justify-start items-center w-[70%] mr-6 gap-[46px]">
                          <div className="flex flex-col items-start justify-start w-4/5 gap-[19px]">
                            {/* heading */}
                            <div className="flex flex-col items-start justify-start w-full gap-3">
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
                                <Img
                                  src="images/img_svg.svg"
                                  alt="svg_seventeen"
                                  className="h-[39px] scale-x-[-1]"
                                />
                              </div>
                              <Heading size="2xl" as="h1">
                                One Guest at a Time
                              </Heading>
                            </div>

                            {/* text */}
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
                        </div>
                        <Img
                          src="images/img_section_divider1_png_64x1421.png"
                          alt="section_nine"
                          className="w-full object-cover rotate-180"
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

export default function WhyChooseUs() {
  return (
    <div>
      <div className=" max-w-[1440px] w-full mx-auto relative ">
        <div className="w-[30%] md:w-full md:block hidden h-[12rem] mt-[5rem] ">
          <Img
            src="images/why-choose-us-image.svg"
            className={` absolute w-[16rem] z-20 mt-[-5rem] left-[20%] `}
          />
          <Img
            src="images/img_div_slider_shape_412x390.png"
            className={` absolute w-[15rem] top-[-3rem] `}
          />
        </div>
        <div className="w-[80%] md:w-[90%] ml-auto md:mx-auto  flex md:flex-col bg-[#F9F6F1] py-14 bg-imgtransbg1 bg-cover bg-center bg-no-repeat md:p-4 ">
          <div className="w-[30%] md:w-full md:hidden ">
            <Img
              src="images/why-choose-us-image.svg"
              className={` absolute w-[30rem] md:w-[10rem] left-[5rem]  mt-[-5rem] z-20 `}
            />
            <Img
              src="images/img_div_slider_shape_412x390.png"
              className={` absolute w-[30rem] left-[-8rem] md:left-0 bottom-[-2rem] `}
            />
          </div>
          <div className="w-[70%] md:w-full flex flex-col ">
            {/* heading */}
            <div className="flex flex-col items-start justify-start w-full gap-3">
              <div className="flex flex-row justify-start items-center w-full gap-2.5">
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
                <Img
                  src="images/img_svg.svg"
                  alt="svg_seventeen"
                  className="h-[39px] scale-x-[-1]"
                />
              </div>
              <Heading size="2xl" as="h1">
                One Guest at a Time
              </Heading>
            </div>

            {/* text */}
            <div className="flex flex-col items-center justify-start gap-2.5">
              <Text size="md" as="p" className="!text-gray-500_05 !font-inter">
                GNINE is a synonymous hotel with a world-class banquet facility,
                lavish hotel rooms, and a multi-cuisine restaurant. A paradise
                to break the monotony of the city hustle and relish the present
                moments.
              </Text>
              <Text
                size="md"
                as="p"
                className="w-[99%] !text-gray-500_05 !font-inter"
              >
                An experience of luxury with excellent 24×7* room service. A
                restaurant with flavorous delicacy to delight you with every
                bite.
              </Text>
              <Text
                size="md"
                as="p"
                className="w-[99%] !text-gray-500_05 !font-inter"
              >
                A banquet with spacious to celebrate every occasion. An
                exquisite property in the center of the city. GNINE is the
                answer to all your hospitality needs.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
