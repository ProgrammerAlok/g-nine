import { Heading, Img, Text } from "components";
import MainLayout from "layout/MainLayout";

const Banquet = () => {
  const Data = [
    `A perfect destination for all your special occasions of life offering Lavish banqueting and catering solutions. With its modern, elegant and spacious banquets it creates a perfect celebratory ambience for all the precious occasions.`,
    `Celebrate life's milestones and remarkable occasions at G Nine Banquet hall. We are able to make settings that can be intimate and grand, with our Spacious & aesthetically royal venues you are sure to cherish every memory you make here for life!`,
    `Our banquet strives to make your every event a memorable and cherished one. From corporate event to friends and family celebrations, we are there for you. A lavish experience with wide variety of cuisines to try from, every event has a new and better experience.`,
  ];

  return (
    <MainLayout title={`Banquet`} image="">
      <main className=" mb-[8rem] relative ">
        <div className="flex flex-col items-center justify-start w-[90%] max-w-[1440px] mx-auto gap-[49px]">
          <Heading as="h2">Hotel G Nine Surat</Heading>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[736px] w-full relative">
              <Img
                src="images/img_rectangle_4371_586x888.png"
                alt="image"
                className="h-[586px] w-[62%] left-0 top-[5%] m-auto object-cover absolute rounded-[10px]"
              />
              <Img
                src="images/img_rectangle_4386.png"
                alt="image_one"
                className="h-[627px] w-[19%] bottom-0 right-0 m-auto object-cover absolute border-x-8 border-white-A700"
              />
              <Img
                src="images/img_rectangle_4385.png"
                alt="image_two"
                className="h-[564px] w-[19%] right-[15%] top-0 m-auto object-cover absolute border-x-8 border-white-A700"
              />
              <Img
                src="images/img_rectangle_4384.png"
                alt="image_three"
                className="h-[614px] w-[19%] bottom-[4%] right-[30%] m-auto object-cover absolute border-x-8 border-white-A700"
              />
            </div>
            <div>
              <ul className="text-gray-500_05">
                {Data.map((text, key) => (
                  <li key={key} className="list-disc">
                    <Text
                      size="xl"
                      as="p"
                      className="mt-[50px] !text-gray-500_05 !font-inter"
                    >
                      {" "}
                      {text}{" "}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* images */}
        <Img
          src="images/img_h2_shape2_png_378x158.png"
          alt="h2shape2png_one"
          className="w-[10rem] right-0 top-[-6rem] m-auto object-cover absolute -z-10"
        />

        <Img
          src="images/img_testi_card_shape_1_png_383x213.png"
          alt="testicard_one"
          className="w-[10rem] object-cover left-0 bottom-0 absolute -z-10"
        />
      </main>
    </MainLayout>
  );
};

export default Banquet;
