import { Heading, Img, Text } from "components";
import PageDescription from "components/PageDescription";
import MainLayout from "layout/MainLayout";

const AboutUs = () => {
  const Data = [
    `Whether you are travelling for work or leisure; With our 24 hour front desk to take care of your every need; our hospitality makes sure you bask in the feeling of being at home & ease at G Nine.`,
    `These rooms varies across categories being; Deluxe Rooms, Premium rooms.`,
    `Choose our comfortable and marvellous ambience. GNINE offer 31 rooms with the category from Deluxe to Premium suites. Restaurant at GNINE serves various cuisines which can delight your taste buds. A well equipped elegant banquet, perfect for all your corporate or family events. Our hospitality staff is always delighted to take care of your essential needs. At GNINE there’s plenty room for your comfort but no room for the discomfort. Whether travelling for leisure or work our 24*7 available staff takes care of your every minute need that matter in your stay.`,
    `Whether you are travelling for work or leisure; With our 24 hour front desk to take care of your every need; our hospitality makes sure you bask in the feeling of being at home & ease at G Nine.`,
    `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop.`,
  ];

  const OurVisionMissionData = [
    {
      heading: `Our Vision`,
      image: `images/img_pngwing_4.png`,
      className: `gap-8 mt-[6rem] md:mt-[4rem]`,
    },
    {
      heading: `Our Mission`,
      image: `images/img_pngwing_6.png`,
      className: `gap-8 flex-row-reverse mb-[10rem] md:mb-[5rem] `,
    },
  ].map((item) => ({
    ...item,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`,
  }));

  return (
    <MainLayout title={`About Us`} image={``}>
      <main>
        <PageDescription
          title={`G Nine`}
          desctiption={`Hotel G Nine boasts of a unique, new concept – offering 31 rooms.`}
          list={Data}
        />

        <div className='flex flex-col justify-center items-center gap-[8rem] md:gap-8 max-w-[1440px] w-[90%] mx-auto ' >
          {OurVisionMissionData.map((item, key) => (
            <Card key={key} {...item} />
          ))}
        </div>
      </main>
    </MainLayout>
  );
};

const Card = ({
  key,
  image,
  heading,
  description,
  className
}) => {
  
  return (
    <div key={key} className={`flex justify-between items-center md:flex-col ${className}`}>
      <Img src={image} alt="pngwingfour_one" className={`w-[40%] md:w-full object-cover ${key&2===1?'scale-x-[-1]':''}`} />
      <div className="flex flex-col items-start justify-start w-[60%] md:w-full gap-2.5">
        <Heading size="2xl" as="h3">
          {heading}
        </Heading>
        <Text size="xl" as="p" className="!text-gray-500_05 !font-inter">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default AboutUs;
