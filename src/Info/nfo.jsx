import React from 'react'
import '../Styles/nfo.css'
import Bub from '../Assets/bub.jpg'
import Footer from '../Footer/footer'
const Info = () => {
  return (
    <>
      <div className='nf'>
        <img src={Bub} alt="wrong path" className='im' />
        <h2 className='hu'>Bring the best of open source to you, your team, and your company</h2>
        <div className='huu'>Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level. </div>
      </div>
      <Footer/>
    </>
  )
}

export default Info