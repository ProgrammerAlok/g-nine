import { Heading, Img, Text } from "components";
import './style.css'

const OurService = () => {
  const Data = [
    {
      image: `images/img_rectangle_1925.png`,
      heading: `RESTAURANT`,
      description: `Our prime motive is to provide the best in both food and service. our multi-cuisine restaurant boasts of highly trained chefs & service`,
    },
    {
      image: `images/img_rectangle_1925_276x420.png`,
      heading: `ROOMS`,
      description: `Stylish and Cosmopolitan rooms at G NINE is perfect for quick get-away or attend a conference.`,
    },
    {
      image: `images/img_rectangle_1927.png`,
      heading: `BANQUET`,
      description: `A perfect destination for all your special occasions of life offering Lavish banqueting and catering solutions.`,
    },
  ];

  return (
    <div className="our-service-container-wrapper w-full relative py-[4rem] md:py-[2rem] bg-[#F9F6F1] mt-[4rem] md:mt-[2rem] ">
      <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col ">
        {/* heading */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex justify-center w-full">
            <div className="flex flex-row justify-center items-center w-full gap-2.5">
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
              <Img
                src="images/img_svg.svg"
                alt="svg_nine"
                className="h-[39px] scale-x-[-1]"
              />
            </div>
          </div>
          <Heading size="2xl" as="h1">
            Our Commitment
          </Heading>
        </div>

        {/* cards */}
        <div className="flex md:flex-col gap-4 justify-between mt-4">
          {Data.map((item, key) => (
            <Card key={key} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col items-start justify-start w-[32%] md:w-full p-4 bg-white-A700 rounded-[10px]">
      <Img
        src={image}
        alt="image"
        className="w-full aspect-[3/2] object-cover rounded-[10px]"
      />
      <Heading size="xl" as="h4" className=" !font-inter capitalize ">
        <p className='md:py-2 py-4'>{heading}</p>
      </Heading>
      <Text size="md" as="p" className="!text-gray-500_05 !font-inter">
        {description}
      </Text>
      <div className="flex flex-row justify-start items-center mt-4 gap-3">
        <a href="#">
          <Text size="lg" as="p" className="!text-yellow-900 !font-inter">
            Read More
          </Text>
        </a>
        <Img
          src="images/img_frame.svg"
          alt="image_one"
          className="w-[18px] aspect-square"
        />
      </div>
    </div>
  );
};

export default OurService;
