import React from 'react'
import { ImNpm } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import '../Styles/footer.css'
const Footer = () => {
  return (
     
      <>
          <div className='foot'> 
              <div className="fot">
                  <ul>
                      <li> <ImNpm className='np'/></li>
                  <li> <FaGithub className='np'/> </li></ul>
              </div>
              <div className="fot f11">
                
                  <ul className='tex-ince'>
                      <h3 id='colo'>Support</h3>
                      <li>Help</li>
                      <li>Advisories</li>
                      <li> Status</li>
                      <li>Contact npm</li>
                  </ul>
              </div>
              <div className="fot f12">
                
                  <ul className='tex-ince'>
                      <li>  <h3 id='colo'>Company</h3></li>
                      <li>About </li>
                      <li>Blog</li>
                      <li>Press</li>
                  </ul>
              </div>
              <div className="fot f13">
                
                  <ul className='tex-ince'>
                      <li>  <h3 id='colo' >Terms & Policies</h3></li>
                      <li>Policies</li>
                      <li>Terms of Use</li>
                      <li>Code of Conduct</li>
                      <li> Privacy</li>
                  </ul>
              </div>
          </div>
             <div className="header1"></div>
      </>
  )
}

export default Footer