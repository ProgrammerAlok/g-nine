import { Button, Heading, Img, Text } from "components";

const Gallery = () => {
  return (
    <div className="flex md:flex-col md:gap-4 justify-between items-center w-[90%] mx-auto max-w-[1440px] my-[5rem] md:my-5">
      <div className="flex flex-col items-start justify-start w-[39%] md:w-full gap-10">
        <div className="flex flex-row justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full gap-[13px]">
            <div className="flex flex-col items-start justify-start w-[41%] gap-[18px]">
              <div className="flex items-center gap-3">
                <Img
                  src="images/img_svg.svg"
                  alt="svg_thirteen"
                  className="h-[39px]"
                />
                <Text
                  size="xl"
                  as="p"
                  className="!text-blue_gray-900_01 !font-inter !font-medium"
                >
                  Events
                </Text>
                <Img
                  src="images/img_svg.svg"
                  alt="svg_thirteen"
                  className="h-[39px] scale-x-[-1]"
                />
              </div>
              <Heading size="2xl" as="h1">
                Gallery
              </Heading>
            </div>
            <div className="flex flex-col items-center justify-start gap-2.5">
              <Text
                size="md"
                as="p"
                className="w-[98%] !text-gray-500_05 !font-inter"
              >
                We have successfully organized 500+ events. Our expert staff has
                experience for organizing every type of event, from birthday
                parts to corporate events, from spiritual pooja to wedding and
                engagement functions.
              </Text>
              <Text size="md" as="p" className="!text-gray-500_05 !font-inter">
                Our spacious banquet’s capacity is for 200+ people to enjoy the
                function.Our staff will handle your entire event, all you have
                to make sure is that all your guests enjoy and make a memorable
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
      <div className="flex flex-col items-center justify-start w-[57%] md:w-full gap-5 md:gap-2">
        <div className="flex flex-row justify-between items-end w-full">
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
        <div className="flex flex-row justify-center w-full">
          <Button size="xs" shape="square" className="">
            <Img src="images/img_vector_arrow.svg"  className={`h-10 md:h-6`} />
          </Button>
          <Button size="xs" shape="square" className=" rotate-[180deg]">
            <Img src="images/img_vector_arrow.svg" className={`h-10 md:h-6`} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
