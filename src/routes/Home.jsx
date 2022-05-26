import React from 'react'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import Populares from '../components/Populares/Populares.jsx'
import Sponsors from '../components/Sponsors/Sponsors.jsx'
import Video from '../components/Video/Video.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Video/>
        <Populares/>
        <Sponsors/>
        <Footer/>
    </div>
  )
}

export default Home