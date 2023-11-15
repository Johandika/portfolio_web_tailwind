import CodingSkills from "./sections/CodingSkills"
import HeroSection from "./sections/HeroSection"
import Navbar from "./sections/Navbar"

const Home = () => {
  return (
    <div className="font-Poppins">
      <Navbar/>
      <HeroSection/>
      <CodingSkills/>
    </div>
  )
}

export default Home