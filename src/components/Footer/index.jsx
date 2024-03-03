import React from "react";
import { Text, Button, Img } from "./..";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full">
      <div className="flex flex-row justify-center w-full">
        <div className="h-[622px] w-full relative">
          <Img
            src="images/img_rectangle_1941.png"
            alt="image_four"
            className="justify-center h-[622px] w-full inset-0 m-auto object-cover absolute"
          />
          <div className="flex flex-col items-center justify-start w-full gap-[86px] top-0 right-0 left-0 m-auto absolute">
            <Img
              src="images/img_section_divider1_png_59x1920.png"
              alt="section_three"
              className="w-full object-cover rotate-180"
            />
            {/* up */}
            <div className="flex md:flex-col justify-between items-start w-[90%] mx-auto max-w-[1440px]">
              
              {/* heading */}
              <div className="flex flex-row justify-between items-start w-[18%]">
                <div className="flex flex-col items-start justify-start w-full mt-0.5 gap-[45px]">
                  <Img src="images/img_image_1.png" alt="imageone_three" className="w-[60%] object-cover" />
                  <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                    <div className="flex flex-col items-start justify-start gap-[7px]">
                      <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                        Followers
                      </Text>
                      <div className="h-[3px] w-[91%] bg-gradient" />
                    </div>
                    <div className="flex flex-row justify-start gap-2.5">
                      {[`images/img_link.svg`,`images/img_link.svg`,`images/img_link.svg`,`images/img_link.svg`].map((image, key) => (
                        <Button key={key} className="w-11">
                          <Img src={image} />
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* About restaurent */}
              <div className="flex flex-col items-start justify-start w-[23%] gap-[25px]">
                <div className="flex flex-col items-start justify-start gap-[7px]">
                  <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                    About Restaurant
                  </Text>
                  <div className="h-[3px] w-[49%] bg-gradient" />
                </div>
                <div className="flex flex-row justify-start">
                  <Text as="p" className="!leading-7">
                    Quickly supply alternative strategic
                    <br />
                    theme areas vis-a-vis B2C mindshare.
                    <br />
                    Objectively repurpose stand-alone
                    <br />
                    synergy via user-centric architectures.
                  </Text>
                </div>
              </div>

              {/* Link */}
              <div className="flex flex-col items-start justify-start w-[10%] gap-7">
                <div className="flex flex-col items-start justify-start gap-2">
                  <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                    link
                  </Text>
                  <div className="h-[3px] w-full bg-gradient" />
                </div>
                <div className="flex flex-col items-center justify-start w-[91%] ml-4">
                  <ul className="flex flex-col items-start justify-start w-full gap-[13px]">
                    {[`Home`, `About Us`, `Rooms`, `Banquet`, `Restaurant`, `Events`,
                       `FAQ's`, `Contact Us`].map((item, key) => (
                       <li key={key} className=' list-disc text-white-A700'>
                        <a href="#">
                          <Text as="p">{item}</Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-start justify-start w-[20%] gap-[25px]">
                <div className="flex flex-row justify-start w-[44%]">
                  <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                    <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                      Address
                    </Text>
                    <div className="h-[3px] w-3/5 bg-gradient" />
                  </div>
                </div>
                <Text as="p" className="!leading-7">
                  Gangani House, beside Aagam Emporio,Udhana – Magdalla Road,Vesu, Surat
                </Text>
              </div>

              {/* phone */}
              <div className="flex flex-col items-start justify-start w-[12%] gap-7">
                <div className="flex flex-row justify-start w-[59%]">
                  <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                    <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
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
            <div className="flex flex-col items-center justify-start w-full gap-3.5">
              <div className="h-px w-full bg-gray-800_01" />
              <div className="flex items-center justify-between mx-auto w-[90%] max-w-[1440px]">
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
