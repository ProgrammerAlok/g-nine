import { Heading, Img, Text } from "components";

const PageDescription = ({ title, desctiption, list }) => {
  return (
    <div className="relative w-full">

      {/* images */}
      <div className="absolute top-[-4rem] -z-10 md:hidden">
        <Img
          src="images/img_h2_shape2_png_319x127.png"
          alt="h2shape2png_one"
          className="w-[30%] z-[1] object-cover"
        />
      </div>
      <div className="absolute right-0 bottom-[-8rem] -z-10 md:hidden">
        <Img
          src="images/img_red_chili_2_png_176x240.png"
          alt="h2shape2png_one"
          className=" h-[10rem] -z-[1] object-cover"
        />
      </div>

      {/* content */}
      <div className="flex flex-col items-center justify-start w-[90%] mx-auto gap-8 md:gap-4 max-w-[1440px] ">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <Heading as="h2">{title}</Heading>
          {desctiption && (
            <Text
              size="xl"
              as="p"
              className=" w-[90%]  text-center !text-[#333333] !font-inter"
            >
              {desctiption}
            </Text>
          )}
        </div>
        <div className="">
          <ul className="flex flex-col gap-4">
            {list.map((item, key) => (
              <li key={key} className="list-disc ml-4 text-gray-500_05">
                <Text
                  size="xl"
                  as="p"
                  className="!text-gray-500_05 !font-inter"
                >
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageDescription;
