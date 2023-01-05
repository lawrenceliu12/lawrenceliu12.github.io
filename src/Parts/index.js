import React, {useState} from 'react'
// import Footer from '../Components/Footer';
import About from './About';
import Projects from './Projects'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import SocialLinks from '../Components/SocialLinks';
import Experiences from './Experiences/'
import Contact from './Contact';

// import Information from '../Components/Information'
// import { ProjectsHelper } from '../Components/Information/Data';


const All = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle}/>
      <About />
      <Projects />
      <Experiences />
      <SocialLinks />
      <Contact />
      {/* <Footer /> TODO: get rid of white space from footer   */}
    </>
  )
}

export default All