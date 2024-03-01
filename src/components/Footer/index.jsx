import React from "react";
import { Text, Button, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row justify-center w-full">
        <div className="h-[622px] w-full relative">
          <Img
            src="images/img_rectangle_1941.png"
            alt="image_four"
            className="justify-center h-[622px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex flex-col items-center justify-start w-full gap-[86px] top-0 right-0 left-0 m-auto absolute">
            <Img
              src="images/img_section_divider1_png_59x1920.png"
              alt="section_three"
              className="w-full object-cover"
            />
            <div className="flex flex-row justify-between items-start w-full max-w-[1439px]">
              <div className="flex flex-row justify-between items-start w-[39%]">
                <div className="flex flex-col items-start justify-start w-[38%] mt-0.5 gap-[45px]">
                  <Img src="images/img_image_1.png" alt="imageone_three" className="w-[79%] object-cover" />
                  <div className="flex flex-col items-start justify-start w-full gap-[30px]">
                    <div className="flex flex-col items-start justify-start gap-[7px]">
                      <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                        Followers
                      </Text>
                      <div className="h-[3px] w-[91%] bg-gradient" />
                    </div>
                    <div className="flex flex-row justify-start gap-2.5">
                      <Button className="w-11">
                        <Img src="images/img_link.svg" />
                      </Button>
                      <Button className="w-11">
                        <Img src="images/img_link.svg" />
                      </Button>
                      <Button className="w-11">
                        <Img src="images/img_link.svg" />
                      </Button>
                      <Button className="w-11">
                        <Img src="images/img_link.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[49%] gap-[25px]">
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
              </div>
              <div className="flex flex-col items-start justify-start w-[8%] gap-7">
                <div className="flex flex-col items-start justify-start gap-2">
                  <Text size="2xl" as="p" className="!text-white-A700 !font-rubik">
                    link
                  </Text>
                  <div className="h-[3px] w-full bg-gradient" />
                </div>
                <div className="flex flex-col items-center justify-start w-[91%] ml-[9px]">
                  <ul className="flex flex-col items-start justify-start w-full gap-[13px]">
                    <li>
                      <a href="#">
                        <Text as="p">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Rooms</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Banquet</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Restaurant</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Events</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">FAQ&#39;s</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Contact Us</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[16%] gap-[25px]">
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
              <div className="flex flex-col items-start justify-start w-[9%] gap-7">
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
            <div className="flex flex-col items-center justify-start w-full gap-3.5">
              <div className="h-px w-full bg-gray-800_01" />
              <div className="flex flex-row justify-between w-full max-w-[1439px]">
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
