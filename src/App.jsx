import Faq from "./component/faq/Faq"
import Feature from "./component/feature/Feature"
import Hero from "./component/hero/Hero"
import KeyFeature from "./component/keyFeature/KeyFeature"
import Footer from "./component/layout/footer/Footer"
import Header from "./component/layout/header/Header"
import Pricing from "./component/pricing/Pricing"
import Reviews from "./component/reviews/Reviews"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature/>
        <KeyFeature/>
        <Pricing/>
        <Reviews/>
        <Faq/>
      </main>
      <Footer />
    </>
  )
}

export default App
