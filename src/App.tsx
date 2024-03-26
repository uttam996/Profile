import { Box } from "@chakra-ui/layout"
import HeroSection from "./Component/HeroSection"
import Navbar from "./Component/Navbar"
import Projects from "./Component/Projects"
import ContactFormWithSocialButtons from "./Component/ContactForm"
import WithSpeechBubbles from "./Component/Testimonils"
import './App.css'


function App() {


  return (
    <>
    <Box 
    // bgGradient="linear(to-b, #7928CA, #FF0080)"
    // bgGradient={"linear(to-b,  blue,white)"}
    style={{
      width: "100vw",
    }}
    >

    <Navbar/>
    <HeroSection/>
    <Projects/>
    <WithSpeechBubbles/>
    <ContactFormWithSocialButtons/>
    </Box>
     
    </>
  )
}

export default App
