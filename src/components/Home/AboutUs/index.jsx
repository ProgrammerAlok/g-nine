import { Button, Heading, Img, Text } from "components";

const AboutUs = () => {
  return (
    <div className=" max-w-[1440px] w-[90%] mx-auto flex md:flex-col justify-between items-center ">
      {/* left */}
      <div className="flex flex-row justify-start w-[48%] md:w-full left-[3%]">
        <div className="flex justify-center items-center w-full ">
          <Img
            src="images/img_about_6_1_png.png"
            alt="about61png_one"
            className="w-[50%] object-cover "
          />
          <Img
            src="images/img_about_6_2_png.png"
            alt="about62png_one"
            className="w-[50%] object-cover ml-[-15%] "
          />
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col items-start justify-start w-[48%] md:w-full">
        <div className="flex justify-start items-center w-full gap-4">
          <Img src="images/img_svg.svg" alt="svg_one" className="h-[39px]" />
          <Text
            size="xl"
            as="p"
            className="!text-blue_gray-900_01  !font-medium !text-[22px] !leading-[26.63px] md:text-[16px] md:leading-[19.63px] "
          >
            About Us
          </Text>
          {/* <div className="flex w-9 h-[29px]" /> */}
          <Img src="images/img_svg.svg" alt="svg_one" className="h-[39px] scale-x-[-1]" />
        </div>
        <Heading size="2xl" as="h1" className="mt-3 ">
          G Nine
        </Heading>
        <Text
          size="md"
          as="p"
          className="mt-[19px] !text-gray-500_05 !font-inter"
        >
          When Surat city, the Textile & diamond of hub of India, calls you; you
          have to stay at a place that is in the heart of the city
        </Text>
        <Text size="md" as="p" className="mt-2.5 !text-gray-500_05 !font-inter">
          Hotel G Nine keeps you within reach, be it conferences, meetings,
          workshops, corporate events, entertaining delegates or even your
          destination functions, celebrations or any other social gathering at
          your end.
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
    </div>
  );
};

export default AboutUs;
