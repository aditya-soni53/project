import Faq from "./component/faq/Faq"
import Feature from "./component/feature/Feature"
import Hero from "./component/hero/Hero"
import KeyFeature from "./component/keyFeature/KeyFeature"
import Footer from "./component/layout/footer/Footer"
import Header from "./component/layout/header/Header"
import ScrollToTop from "./component/layout/scrollToTop/ScrollToTop"
import Pricing from "./component/pricing/Pricing"
import Reviews from "./component/reviews/Reviews"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <>
      <Header />
      <main className="main-container">
        <Hero />
        <Feature/>
        <KeyFeature/>
        <Pricing/>
        <Reviews/>
        <Faq/>
      </main>
      <Footer />
      <ScrollToTop/>
    </>
  )
}

export default App
