import { Heading, Img } from 'components';

const RoomGallery = () => {
    return (
      <div className="flex flex-col items-center max-w-[1440px] w-[90%] mx-auto justify-start gap-10 my-[5rem]">
        <Heading as="h3">Room Gallery</Heading>
        <div className="flex flex-row justify-start items-start w-full gap-[30px]">
          <div className="flex flex-col items-center justify-start w-[49%] gap-[30px]">
            <Img
              src="images/img_rectangle_4371.png"
              alt="image"
              className="w-full object-cover rounded-[20px]"
            />
            <Img
              src="images/img_rectangle_4373.png"
              alt="image_one"
              className="w-full object-cover rounded-[20px]"
            />
            <Img
              src="images/img_rectangle_4375.png"
              alt="image_two"
              className="w-full object-cover rounded-[20px]"
            />
            <Img
              src="images/img_rectangle_4377.png"
              alt="image_three"
              className="w-full object-cover rounded-[20px]"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[49%] mt-[148px] gap-[30px]">
            <Img
              src="images/img_rectangle_4372.png"
              alt="image_four"
              className="w-full object-cover rounded-[20px]"
            />
            <Img
              src="images/img_rectangle_4374.png"
              alt="image_five"
              className="w-full object-cover rounded-[20px]"
            />
            <Img
              src="images/img_rectangle_4376.png"
              alt="image_six"
              className="w-full object-cover rounded-[20px]"
            />
            <Img
              src="images/img_rectangle_4378.png"
              alt="image_seven"
              className="w-full object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    );
  };

export default RoomGallery