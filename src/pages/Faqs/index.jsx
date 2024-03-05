import MainLayout from "layout/MainLayout";
import Faqs from "components/Faqs/Faqs";

const FaqsPage = () => {
  return (
    <MainLayout title={`Faq's`} image="">
      <main className='bg-gray-100 mb-[8rem] '>
        <Faqs />
      </main>
    </MainLayout>
  );
};

export default FaqsPage;
