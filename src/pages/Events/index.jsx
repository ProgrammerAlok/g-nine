import { Heading, Img } from "components";
import PageDescription from "components/PageDescription";
import MainLayout from "layout/MainLayout";

const Events = () => {
  const Data = [
    `Our prime motive is to provide the best in both food and service.`,
    `our multi-cuisine restaurant boasts of highly trained chefs & service personnel which provides you with rich hospitality& scrumptious taste complemented by our pleasant ambience & atmosphere.`,
    `The team here has created an excellent menu that will appeal to anyone who loves the taste of fresh and pure food and has an appreciation for great service.`,
    `Our skilful chefs personals that provide you the best culinary experience every time you visit us. Menu carefully curated for you with the dishes from around the world that will teleport you to the world of flavours. Our lavish tropical restaurant ambience for your comfort and jolly experience.`,
  ];

  return (
    <MainLayout title={`Events`} image="">
      <main>
        <PageDescription title={`Hotel G Nine Surat`} list={Data} />

        {/* event gallery */}
        <div className="event-gallery-wrapper my-[6rem] ">
          <div className="event-gallery flex flex-col items-center gap-10 justify-center w-[90%] mx-auto max-w-[1440px] ">
            <Heading as="h3" className="">
              Events Gallery
            </Heading>
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-col items-center justify-start w-[49%] mb-[462px] gap-[30px]">
                <Img
                  src="images/img_rectangle_1940.png"
                  alt="image"
                  className="w-full object-cover rounded-[20px]"
                />
                <Img
                  src="images/img_rectangle_4373.png"
                  alt="image_one"
                  className="w-full object-cover rounded-[20px]"
                />
                <Img
                  src="images/img_rectangle_1944.png"
                  alt="image_two"
                  className="w-full object-cover rounded-[20px]"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[49%] mt-[111px] gap-[30px]">
                <Img
                  src="images/img_rectangle_1941_986x705.png"
                  alt="image"
                  className="w-full object-cover rounded-[20px]"
                />
                <Img
                  src="images/img_rectangle_1943.png"
                  alt="image_one"
                  className="w-full object-cover rounded-[20px]"
                />
                <Img
                  src="images/img_rectangle_1945.png"
                  alt="image_two"
                  className="w-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Events;
