import React, {useState} from 'react'
import Footer from '../Components/Footer';
import About from '../Components/About';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Information from '../Components/Information';
import { Projects } from '../Components/Information/Data';
import SocialLinks from '../Components/SocialLinks';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle}/>
      <SocialLinks />
      <About />
      <Information {...Projects}/>
      <Footer /> {/* TODO: get rid of white space from footer */}  
    </>
  )
}

export default Home