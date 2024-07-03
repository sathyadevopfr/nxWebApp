import React from 'react'
import { LiaNpm } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";
import '../Styles/header2.css'
// import SignIn from '../SignUp/signup'
import { Link } from 'react-router-dom';
import Body from '../Body/body';
const Header2 = () => {
  return (
      <>
          <div className='fle'>
              <LiaNpm className='size1' />
              <div className='inp'>
                  <FaSearch className='size2'  />
                  <input type="text" name="search" className="inpu " placeholder='search packages'/>
                    <button >Search</button>
              </div>
            
              <button className='but b1'><Link to="/signup">SignUp</Link></button>
               <button className='but b2'> <Link to="/signin">SignIn</Link></button>
              
         </div>
           <Body/>
      </>
  )
}

export default Header2;