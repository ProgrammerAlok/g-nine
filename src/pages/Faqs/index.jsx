import { FaqData } from "Data/FaqData";
import { Heading, Img, Text } from "components";
import MainLayout from "layout/MainLayout";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel, AccordionItemHeading } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // You can include your own styles or use the provided ones
import { useState } from 'react';
import './style.css'


const Faqs = () => {
  return (
    <MainLayout title={`Faq's`} image="">
      <main className='bg-gray-100 mb-[8rem] '>
        <div>
          <Img
            src="images/img_section_divider1_png_59x1920.png"
            alt="section_three"
            className="w-full object-cover rotate-180"
          />
        </div>
        <div className="flex flex-row justify-end w-full max-w-[1440px] mx-auto bg-gray-100 py-10 ">
          <div className="h-[45rem] w-full relative">
            <div className="flex flex-col items-center justify-center w-full h-max gap-[50px] left-0 bottom-0 right-0 top-0 m-auto ">
              {/* headings */}
              <div className="flex flex-col items-center justify-start w-[69%] gap-5 relative">
                <div className="flex flex-row justify-center w-[22%]">
                  <div className="flex flex-row justify-between items-center w-full">
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
                </div>
                <Heading
                  size="2xl"
                  as="h2"
                  className="text-center !leading-[90px]"
                >
                  Frequently Asked And Questions{" "}
                </Heading>
                <div className='relative w-[75%] mx-auto'>
                  <div className=" absolute z-50 w-full">
                    <Accordian />
                  </div>
                </div>
              </div>

            </div>
            <div className="flex flex-col items-start justify-start w-full top-0 right-0 left-0 m-auto absolute">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-1/4 mt-[-1px] md:hidden">
                  <div className="h-[203px] w-[203px] ml-[35px] bg-gray-100" />
                  <Img
                    src="images/img_mask_group.png"
                    alt="image"
                    className="w-full mt-[-128px] object-cover"
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
      </main>
    </MainLayout>
  );
};

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <Accordion allowMultipleExpanded={false} preExpanded={['0']}>
    {FaqData.map((item, key) => (
        <AccordionItem key={key}>
            <AccordionItemHeading>
                <AccordionItemButton 
                  onClick={toggle}
                  aria-expanded={isOpen}
                >
                  <Text as={'span'} className="" >
                    {item.heading}
                  </Text>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Text as={'p'} >
                {item.content}
              </Text>
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>
  )
};

export default Faqs;
