import { Heading, Img, RatingBar, Text } from "components";

const Testimonials = () => {
  return (
    <div className="flex md:flex-col-reverse justify-between w-[90%] max-w-[1440px] mx-auto mt-[4rem] md:mt-0 ">
      {/* left */}
      <div className="flex flex-col items-center justify-start w-[46%] md:w-full mb-[30px] gap-10">
        <div className="flex flex-col items-start justify-start w-full gap-2.5">
          <div className="flex flex-row justify-start items-center w-full gap-2.5">
            <Img
              src="images/img_svg.svg"
              alt="svg_twentyone"
              className="h-[39px]"
            />
            <Text
              size="xl"
              as="p"
              className="!text-blue_gray-900_01 !font-inter !font-medium"
            >
              Testimonials
            </Text>
            <Img
              src="images/img_svg.svg"
              alt="svg_twentyone"
              className="h-[39px] scale-x-[-1]"
            />
          </div>
          <Heading size="2xl" as="h1" className="">
            <span className=""> What customer saying About Services </span>
          </Heading>
        </div>
        <div className="flex md:flex-col justify-start items-center w-full gap-7 md:gap-0">
          <div className="flex flex-row justify-start w-[91%] md:w-full">
            <div className="flex flex-row justify-start w-full">
              <div className="flex flex-row justify-center w-full p-10 md:p-2 bg-gray-100 rounded-[9px]">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Img
                      src="images/img_symbol.svg"
                      alt="symbol_three"
                      className="h-8 opacity-0.5"
                    />
                    <Text
                      size="md"
                      as="p"
                      className="!text-gray-500_05 !font-inter"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </Text>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-2/5 md:w-full gap-[15px]">
                        <Img
                          src="images/img_ellipse_591.png"
                          alt="circleimage"
                          className="h-[70px] w-[70px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[61%] gap-1.5">
                          <Heading
                            size="lg"
                            as="h5"
                            className="!text-black-900 !text-[23.12px]"
                          >
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

          {/* 1 2 3 */}
          <div className="flex flex-col items-center justify-start md:-my-[8rem] w-[5%] gap-2.5 md:-rotate-90">
            <div className="h-20 w-0.5 bg-gradient1" />
            <div className="flex flex-col w-full gap-2.5">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[35px] w-[34px] relative md:rotate-90">
                  <Img
                    src="images/img_group_6340.svg"
                    alt="image"
                    className="justify-center h-[35px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <Text
                    size="xs"
                    as="p"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-700_01 !font-inter text-center absolute pt-1 md:pt-2"
                  >
                    1
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[35px] w-[34px] relative  md:rotate-90">
                  <Img
                    src="images/img_group_6341.svg"
                    alt="image"
                    className="justify-center h-[35px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <Text
                    size="xs"
                    as="p"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 !font-inter text-center absolute pt-1 md:pt-2"
                  >
                    2
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[35px] w-[34px] relative  md:rotate-90">
                  <Img
                    src="images/img_group_6340.svg"
                    alt="image"
                    className="justify-center h-[35px] w-[34px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <Text
                    size="xs"
                    as="p"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-700_01 !font-inter text-center absolute pt-1 md:pt-2"
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

      {/* right */}
      <div className="flex flex-row justify-center w-[49%] md:w-[100%] mt-[30px]">
        <div className="h-[617px] md:h-[20rem] w-full relative">
          <div className="flex flex-row justify-start items-start w-full h-full left-0 bottom-0 top-0 m-auto absolute">
            <Img
              src="images/img_testi_card_shape_3_png.png"
              alt="testicard_one"
              className="w-[40%] mt-[66px] md:mt-1 z-[1] object-cover absolute"
            />
            <div className="flex w-[80%] my-auto aspect-square p-[38px] rounded-full border-red-A400 border-4 border-dashed mx-auto">
              <div className="w-full aspect-square opacity-0.3 rotate-[90deg] border-red-A400_75 border-4 border-dashed rounded-full" />
            </div>
          </div>
          <Img
            src="images/img_testi_card_img_png.png"
            alt="testicardimg"
            className="justify-center w-[60%] inset-0 m-auto object-cover absolute rounded-full "
          />
          <div className=" w-1/2 right-0 bottom-0 top-0 m-auto absolute">
            <Img
              src="images/img_testi_card_shape_1_png.png"
              alt="testicard_three"
              className="w-[70%] inset-0 m-auto object-cover absolute"
            />
            <Img
              src="images/img_testi_card_shape_2_png.png"
              alt="testicard_five"
              className="w-[62%] left-0 bottom-4  m-auto object-cover absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
