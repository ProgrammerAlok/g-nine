import { Heading, Img, Text } from "components";

const OurService = () => {
  return (
    <div className="h-[1112px] w-full mt-[119px] relative">
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
                  <Img
                    src="images/img_svg.svg"
                    alt="svg_nine"
                    className="h-[39px]"
                  />
                  <Text
                    size="xl"
                    as="p"
                    className="!text-blue_gray-900_01 !font-inter !font-medium"
                  >
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
                <Heading
                  size="xl"
                  as="h4"
                  className="mt-6 !font-inter capitalize"
                >
                  RESTAURANT
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="mt-[9px] !text-gray-500_05 !font-inter"
                >
                  Our prime motive is to provide the best in both food and
                  service. our multi-cuisine restaurant boasts of highly trained
                  chefs & service
                </Text>
                <div className="flex flex-row justify-start items-center mt-[19px] gap-3">
                  <a href="#">
                    <Text
                      size="lg"
                      as="p"
                      className="!text-yellow-900 !font-inter"
                    >
                      Read More
                    </Text>
                  </a>
                  <Img
                    src="images/img_frame.svg"
                    alt="read_more_one"
                    className="h-[18px] w-[18px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[32%] p-[19px] bg-white-A700 rounded-[10px]">
                <Img
                  src="images/img_rectangle_1925_276x420.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <Heading
                  size="xl"
                  as="h4"
                  className="mt-6 !font-inter capitalize"
                >
                  ROOMS
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="mt-[9px] !text-gray-500_05 !font-inter"
                >
                  Stylish and Cosmopolitan rooms at G NINE is perfect for quick
                  get-away or attend a conference.
                </Text>
                <div className="flex flex-row justify-start items-center mt-[19px] gap-3">
                  <a href="#">
                    <Text
                      size="lg"
                      as="p"
                      className="!text-yellow-900 !font-inter"
                    >
                      Read More
                    </Text>
                  </a>
                  <Img
                    src="images/img_frame.svg"
                    alt="image_one"
                    className="h-[18px] w-[18px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[32%] p-[19px] bg-white-A700 rounded-[10px]">
                <Img
                  src="images/img_rectangle_1925_1.png"
                  alt="image"
                  className="w-full object-cover rounded-[10px]"
                />
                <Heading
                  size="xl"
                  as="h4"
                  className="mt-[25px] !font-inter capitalize"
                >
                  BANQUET
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="mt-2 !text-gray-500_05 !font-inter"
                >
                  A perfect destination for all your special occasions of life
                  offering Lavish banqueting and catering solutions.
                </Text>
                <div className="flex flex-row justify-start items-center mt-[19px] gap-3">
                  <a href="#">
                    <Text
                      size="lg"
                      as="p"
                      className="!text-yellow-900 !font-inter"
                    >
                      Read More
                    </Text>
                  </a>
                  <Img
                    src="images/img_frame.svg"
                    alt="image_one"
                    className="h-[18px] w-[18px]"
                  />
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
    </div>
  );
};

export default OurService;
