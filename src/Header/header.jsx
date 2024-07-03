import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/header.css'
import { TiHeart } from "react-icons/ti";
import Header2 from './header2';
const Header = () => {
    let manipu = () => {
        let ma = document.getElementById('mani')
        ma.innerHTML='Numbers Probably Matter'
     }
//       let mo = document.getElementById('mani').addEventListener('click', manipu);
//      let text = ['Nine Percent Milk','Npm t20 guess','NonLinear Programming Methods','Nelothitic Programming Machine']
   
//      let currentIndex=0
  
//          mo.innerText =text[currentIndex];
//          currentIndex=currentIndex+1% text.length;
        
//       }
  return (
      <>
          <div className="header1"></div>
          <div className="the">
              <div className="navbar n1"> 
                 
                  <div className='se'>
                       <div className='sep '>
                      <TiHeart icon='heart' className='size' />
                  </div>
                   <div className='sep s1'>
                         <button id='mani' onClick={manipu} >Nestable Processes 
                              Mutate</button>
                </div>
                 </div>
                      </div>
              
              <div className="navbar n2">
                  <ul>
                      <li><Link to="/">Pro</Link></li>
                      <li><Link to="/">Teams</Link></li>
                      <li ><Link to="/">Projects</Link></li>
                      <li><Link to="/">Documentation</Link></li>
                  </ul>
              </div>
  
          </div>
               <Header2/>
      </>
      
  )
      
}

export default Header;