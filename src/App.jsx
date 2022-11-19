import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import AboutMe from "./components/AboutMe"
import Carousel from "./components/Carousel"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const imgList = [
  {
    id: 1,
    url: 'https://www.artline.es/wp-content/uploads/2021/04/Dise%C3%B1o-gr%C3%A1fico-online-scaled.jpeg'
  }
]
function App() {
  return (
    <div className="font-main min-h-screen">
      <Navbar />
      <Jumbotron />
      <section className="bg-black">
        <AboutMe />
      </section>
      <section>
        <Carousel />
      </section>
      <section className="bg-black">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
