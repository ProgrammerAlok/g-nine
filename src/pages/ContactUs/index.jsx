import { Button, Heading, Img, Input, Text, TextArea } from "components";
import MainLayout from "layout/MainLayout";

const ContactUs = () => {
  return (
    <MainLayout title={`Contact Us`} image="">
      <main>
        <ContactUsForm />
      </main>
    </MainLayout>
  );
};

export const ContactUsForm = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1440px] w-[90%] mx-auto gap-[60px] px-14 py-20 bg-gray-100 rounded-[20px] mb-[8rem] ">
      <div className="flex flex-col items-center justify-start w-[100%] gap-[11px]">
        <div className="flex flex-row justify-center items-center w-3/5 gap-2.5">
          <Img
            src="images/img_svg.svg"
            alt="svg_twentynine"
            className="h-[39px]"
          />
          <a href="#">
            <Text
              size="xl"
              as="p"
              className="!text-blue_gray-900_01 !font-inter !font-medium"
            >
              CONTACT US
            </Text>
          </a>
          <div className="flex w-9 h-[29px]" />
        </div>
        <Heading size="2xl" as="h1">
          Get in Touch
        </Heading>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <Img
          src="images/img_group_1000003806.svg"
          alt="image_four"
          className="w-[40%] opacity-0.9"
        />
        <div className="flex flex-col items-start justify-start w-[56%] gap-[30px]">
          <div className="flex flex-col items-center justify-start w-full gap-5">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full outline-transparent"
            />
            <Input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full"
            />
            <Input
              name="inquire_for"
              placeholder="Inquire For"
              className="w-full"
            />
            <TextArea
              name="group241"
              placeholder="Your message (optional)"
              className="w-full text-gray-600_02 font-inter"
            />
          </div>
          <Button
            color="orange_A200_01"
            size="md"
            shape="round"
            className="font-poppins uppercase font-semibold min-w-[100px]"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
