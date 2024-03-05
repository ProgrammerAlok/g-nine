import { Heading, Img, RatingBar, Text } from "components";

const Testimonials = () => {
  return (
    <div className="flex flex-row justify-between w-[90%] max-w-[1440px] mx-auto">
      <div className="flex flex-col items-center justify-start w-[46%] mb-[30px] gap-10">
        <div className="flex flex-col items-start justify-start w-full gap-2.5">
          <div className="flex flex-row justify-start items-center w-[32%] gap-2.5">
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
                      <div className="flex flex-row justify-start items-center w-2/5 gap-[15px]">
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
    </div>
  );
};

export default Testimonials;
