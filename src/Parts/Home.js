import React, {useState} from 'react'
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle}/>
      <HeroSection />
      <Footer />
    </>
  )
}

export default Home