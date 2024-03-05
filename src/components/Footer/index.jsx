import { Text, Button, Img } from "./..";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full">
      <div className="flex flex-row justify-center w-full">
        <div className="h-[642px] md:h-[51rem] w-full relative">
          <Img
            src="images/img_rectangle_1941.png"
            alt="image_four"
            className="justify-center h-full w-screen inset-0 m-auto object-cover absolute"
          />
          <div className="flex flex-col items-center justify-start w-full gap-20 md:gap-4 top-0 right-0 left-0 m-auto absolute">
            <Img
              src="images/img_section_divider1_png_59x1920.png"
              alt="section_three"
              className="w-full object-cover rotate-180"
            />
            {/* up */}
            <div className="flex md:flex-wrap md:gap-5 justify-between items-start w-[90%] mx-auto max-w-[1440px]">
              {/* heading */}
              <div className="flex flex-row justify-between items-start w-[18%] md:w-[50%] md:mx-auto ">
                <div className="flex flex-col items-start justify-start md:items-center w-full mt-0.5 gap-11 md:gap-6">
                  <Img
                    src="images/img_image_1.png"
                    alt="imageone_three"
                    className="w-[60%] object-cover"
                  />
                  <div className="flex flex-col items-start md:items-center justify-start w-full gap-8 md:gap-4">
                    <div className="flex flex-col items-start justify-start gap-2 md:gap-0">
                      <Text
                        size="2xl"
                        as="p"
                        className="!text-white-A700 !font-rubik"
                      >
                        Followers
                      </Text>
                      <div className="h-[3px] w-[91%] bg-gradient" />
                    </div>
                    <div className="flex flex-row justify-start gap-2.5 md:gap-2">
                      {[
                        `images/img_link.svg`,
                        `images/img_link.svg`,
                        `images/img_link.svg`,
                        `images/img_link.svg`,
                      ].map((image, key) => (
                        <Button key={key} className="w-11 md:w-8 md:h-8">
                          <Img src={image} alt="logo" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* About restaurent */}
              <div className="flex flex-col items-start justify-start w-[23%] md:w-full gap-[25px] md:gap-1">
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-white-A700 !font-rubik"
                  >
                    About Restaurant
                  </Text>
                  <div className="h-[3px] w-[49%] bg-gradient" />
                </div>
                <div className="flex flex-row justify-start">
                  <Text as="p" className="!leading-7">
                    Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare. Objectively repurpose stand-alone synergy via user-centric architectures.
                  </Text>
                </div>
              </div>

              {/* Link */}
              <div className="flex flex-col items-start justify-start w-[10%] md:w-[20%] gap-7 md:gap-1">
                <div className="flex flex-col items-start justify-start gap-2">
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-white-A700 !font-rubik"
                  >
                    link
                  </Text>
                  <div className="h-[3px] w-full bg-gradient" />
                </div>
                <div className="flex flex-col items-center justify-start w-[91%] ml-4">
                  <ul className="flex flex-col items-start justify-start w-full gap-[13px] md:gap-1">
                    {[
                      `Home`,
                      `About Us`,
                      `Rooms`,
                      `Banquet`,
                      `Restaurant`,
                      `Events`,
                      `FAQ's`,
                      `Contact Us`,
                    ].map((item, key) => (
                      <li key={key} className=" list-disc text-white-A700">
                        <a href="#">
                          <Text as="p">{item}</Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-start justify-start w-[20%] md:w-[70%] gap-[25px] md:gap-1">
                <div className="flex flex-row justify-start w-[44%]">
                  <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                    <Text
                      size="2xl"
                      as="p"
                      className="!text-white-A700 !font-rubik"
                    >
                      Address
                    </Text>
                    <div className="h-[3px] w-3/5 bg-gradient" />
                  </div>
                </div>
                <Text as="p" className="!leading-7">
                  Gangani House, beside Aagam Emporio,Udhana – Magdalla
                  Road,Vesu, Surat
                </Text>
              </div>

              {/* phone */}
              <div className="flex flex-col items-start justify-start w-[12%] md:w-full gap-7 md:gap-1">
                <div className="flex flex-row justify-start w-[59%]">
                  <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                    <Text
                      size="2xl"
                      as="p"
                      className="!text-white-A700 !font-rubik"
                    >
                      Phone
                    </Text>
                    <div className="h-[3px] w-[78%] bg-gradient" />
                  </div>
                </div>
                <ul className="flex flex-col items-center justify-start gap-[9px]">
                  <li>
                    <a href="#">
                      <Text as="p">+91 96247 37644</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">+91 98700 37644</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* bottom */}
            <div className="flex flex-col items-center justify-start w-full gap-3.5 md:gap-2">
              <div className="h-px w-full bg-gray-800_01" />
              <div className="flex flex-wrap md:gap-2 items-center justify-between md:justify-center mx-auto w-[90%] max-w-[1440px]">
                <Text as="p" className="mb-px">
                  2021 Copyright Gnine. All Rights Reserved.
                </Text>
                <div className="flex flex-row justify-center">
                  <a href="#">
                    <Text as="p">gninehospitality@gmail.com</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
