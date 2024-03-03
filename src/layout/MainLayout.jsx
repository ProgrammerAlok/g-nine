import { Img } from 'components'
import Footer from 'components/Footer'
import { Helmet } from 'react-helmet'

const MainLayout = ({ 
  children,
  title,
  image= `images/img_pngwing_7.png`
}) => {
  return (
    <>
      <Helmet>
        <title>{title || 'GN'} - G Nine</title>         
      </Helmet>
      <Banner image={image} />
      {children}
      <Footer />
    </>
  )
}

const Banner = ({
  title,
  image
}) => {
  <div>
    <Img 
      src={image}
      className={``}
    />
  </div>
}

export default MainLayout