import HeaderBar from '../layouts/HeaderBar'
import MyNavbar from '../layouts/MyNavbar'
import Footer from '../layouts/Footer'
import FeatureSection from '../components/FeatureSection'

export default function ProductDetails({ products, loading }) {
  return (
    <div className='position-relative'>
        <div className='product-headerbar'>
        <HeaderBar/>
        </div>
        <div className='product-mynavbar'>
        <MyNavbar/>
        </div>
        <FeatureSection/>
        <Footer/>
    </div>
  )
}
