import React from "react";
import { Text, Heading, Img } from "./..";

export default function C1LandingPageOneRowTwo({
  home = "Home",
  aboutus = "About Us",
  rooms = "Rooms",
  banquet = "Banquet",
  restaurant = "Restaurant",
  events = "Events",
  faqs = "FAQ&#39;s",
  contactus = "Contact Us",
  ...props
}) {
  return (
    <div {...props}>
      <Img src="images/img_image_1.png" alt="imageone_one" className="w-[9%] object-cover" />
      <div className="flex flex-row justify-between w-auto gap-[45px]">
        <a href="#">
          <Heading size="s" as="h1" className="!text-yellow-900">
            {home}
          </Heading>
        </a>
        <a href="#">
          <Text as="p" className="!text-gray-300_04">
            {aboutus}
          </Text>
        </a>
        <a href="#">
          <Text as="p" className="!text-gray-300_04">
            {rooms}
          </Text>
        </a>
        <a href="#">
          <Text as="p" className="!text-gray-300_04">
            {banquet}
          </Text>
        </a>
        <a href="#">
          <Text as="p" className="!text-gray-300_04">
            {restaurant}
          </Text>
        </a>
        <a href="#">
          <Text as="p" className="!text-gray-300_04">
            {events}
          </Text>
        </a>
        <a href="#">
          <Text as="p" className="!text-gray-300_04">
            {faqs}
          </Text>
        </a>
        <a href="#">
          <Text as="p" className="!text-gray-300_04">
            {contactus}
          </Text>
        </a>
      </div>
    </div>
  );
}
