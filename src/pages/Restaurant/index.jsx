import { Heading, Img, Text } from "components";
import MainLayout from "layout/MainLayout";

const Restaurant = () => {
  const Data = [
    `Our prime motive is to provide the best in both food and service.`,
    `our multi-cuisine restaurant boasts of highly trained chefs & service personnel which provides you with rich hospitality& scrumptious taste complemented by our pleasant ambience & atmosphere.`,
    `The team here has created an excellent menu that will appeal to anyone who loves the taste of fresh and pure food and has an appreciation for great service.`,
    `Our skilful chefs personals that provide you the best culinary experience every time you visit us. Menu carefully curated for you with the dishes from around the world that will teleport you to the world of flavours. Our lavish tropical restaurant ambience for your comfort and jolly experience.`,
  ];

  return (
    <MainLayout title={`Restaurant`} image="">
      <main>
        {/* restaurant about */}
        <div>
          <Heading as="h2" className="text-center">
            Hotel G Nine Surat
          </Heading>
          <div className="h-[828px] md:h-[400px] w-full mt-[49px] md:mt-4 relative">
            <Img
              src="images/img_restaurant_interior.png"
              alt="restaurant"
              className="justify-center h-[828px] md:h-[400px] w-full inset-0 m-auto object-cover absolute"
            />
            {/* <div className="justify-center h-[415px] w-4/5 inset-0 m-auto absolute"> */}
            <div className="flex flex-row justify-center h-max inset-0 m-auto absolute max-w-[1440px] w-[90%] border-2 p-2">
              <div className="flex flex-row justify-center w-full p-[30px] bg-gray-900_e5 backdrop-opacity-[0.5] blur-[0px]">
                <div className="flex flex-col pt-1.5 gap-4  ">
                  <ul className="flex flex-col gap-4">
                    {Data.map((item, key) => (
                      <li key={key} className={`list-disc text-white-A700 ${key<=2?'':'md:hidden'} `}>
                        <Text
                          size="xl"
                          as="p"
                          className="ml-[11px] !text-white-A700 !font-inter"
                        >
                          {item}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* restaurant gallery */}
        <div className="restaurant-gallery-wrapper relative my-[6rem] md:my-5 ">
          <Img
            src="images/img_h2_shape2_png_319x158.png"
            alt="h2shape2png_one"
            className="w-[8rem] object-cover absolute bottom-0 left-0 -z-10 md:hidden"
          />
          <div className="restaurant-gallery flex flex-col justify-center items-center gap-4 max-w-[1440px] w-[90%] mx-auto ">
            <Heading as="h3" className="text-center">
              Restaurant Gallery
            </Heading>
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-row justify-center ">
                <div className="flex flex-row justify-start w-full gap-5 md:gap-1">
                  <Img
                    src="images/img_rectangle_4379.png"
                    alt="image"
                    className="w-[48%] object-cover rounded-[20px] md:rounded-md"
                  />
                  <div className="flex flex-col items-center justify-center w-1/2 gap-5 md:gap-1">
                    <div className="flex flex-row justify-start w-full gap-5 md:gap-1">
                      <Img
                        src="images/img_rectangle_4380.png"
                        alt="image_one"
                        className="w-[49%] object-cover rounded-[20px] md:rounded-md"
                      />
                      <Img
                        src="images/img_rectangle_4381.png"
                        alt="image_two"
                        className="w-[49%] object-cover rounded-[20px] md:rounded-md"
                      />
                    </div>
                    <div className="flex flex-row justify-start w-full gap-5 md:gap-1">
                      <Img
                        src="images/img_rectangle_4382.png"
                        alt="image_three"
                        className="w-[49%] object-cover rounded-[20px] md:rounded-md"
                      />
                      <Img
                        src="images/img_rectangle_4383.png"
                        alt="image_four"
                        className="w-[49%] object-cover rounded-[20px] md:rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Restaurant;
