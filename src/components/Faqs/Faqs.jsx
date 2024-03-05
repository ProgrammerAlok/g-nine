import { FaqData } from "Data/FaqData";
import { Heading, Img, Text } from "components";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css"; // You can include your own styles or use the provided ones
import "./style.css";
import { useState } from "react";

const Faqs = () => {
  return (
    <div>
      <div>
        <Img
          src="images/img_section_divider1_png_59x1920.png"
          alt="section_three"
          className="w-full object-cover rotate-180"
        />
      </div>
      <div className="faq-container flex flex-row justify-end w-[90%] max-w-[1440px] mx-auto bg-gray-100 py-10 ">
        <div className="h-[45rem] md:h-[38rem] w-full relative">
          {/* form & heading */}
          <div className="flex flex-col items-center justify-center w-full h-max gap-[50px] left-0 bottom-0 right-0 top-0 m-auto ">
            <div className="flex flex-col items-center justify-start w-[69%] md:w-full gap-5 relative">
              <div className="flex flex-col justify-center w-full gap-4">
                <div className="flex flex-row justify-center md:justify-start gap-4 items-center w-full">
                  <Img
                    src="images/img_svg.svg"
                    alt="svg_one"
                    className="h-[39px]"
                  />
                  <Text
                    size="xl"
                    as="p"
                    className="!text-blue_gray-900_01 !font-inter !font-medium"
                  >
                    FAQ’S
                  </Text>
                  <Img
                    src="images/img_svg_yellow_900.svg"
                    alt="svg_three"
                    className="h-[29px]"
                  />
                </div>

                <Heading
                  size="2xl"
                  as="h2"
                  className="text-center md:text-left"
                >
                  Frequently Asked And Questions
                </Heading>
              </div>
              <div className="relative w-[75%] md:w-full mx-auto">
                <div className=" absolute z-50 w-full">
                  <Accordian />
                </div>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-1/4 md:hidden">
                <div className="w-[303px] bg-gray-100" />
                <Img
                  src="images/faq-image-01.png"
                  alt="image"
                  className="h-full mt-[-128px] object-cover scale-x-[-1] translate-y-[80%] -translate-x-[6rem] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Img
          src="images/img_section_divider1_png_59x1920.png"
          alt="section_three"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <Accordion allowMultipleExpanded={false} preExpanded={["0"]}>
      {FaqData.map((item, key) => (
        <AccordionItem key={key}>
          <AccordionItemHeading>
            <AccordionItemButton onClick={toggle} aria-expanded={isOpen}>
              <Text as={"span"} className="">
                {item.heading}
              </Text>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Text as={"p"}>{item.content}</Text>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faqs;
