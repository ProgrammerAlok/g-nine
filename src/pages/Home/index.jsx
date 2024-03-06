import Faqs from "components/Faqs/Faqs"
import { AboutUs, Gallery, OurService, Testimonials, WhyChooseUs } from "components/Home"
import HomeLayout from "layout/HomeLayout"
import { ContactUsForm } from "pages/ContactUs"

const Home = () => {
  return (
    <HomeLayout title={'Home'} >
        <main className=' w-full' >
          <AboutUs />
          <OurService />
          <Gallery />
          <WhyChooseUs />
          <Testimonials />          
          <Faqs />
          <ContactUsForm />
        </main>
    </HomeLayout>
  )
}

export default Home