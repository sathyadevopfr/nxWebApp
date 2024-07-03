import React from 'react'
import { TbBrandNpm } from "react-icons/tb";
import '../Styles/signup.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/header';
const signup = () => {
  
  return (
      <>
      <div className='com'>
         <div className="header1"></div>
         <TbBrandNpm className='ab' />
          <div className='siup'>
          <div>
            <form action="">
              <h1 className='h7'>Sign Up</h1>
              <hr className='hori' />
              <div className='ld'>
                <label htmlFor="Us" className='l1 ' >Username *</label>
                <input type="text" className='sinp'/>
              </div>

              <div className='ld'>
                <label htmlFor="Us" className='l1 ' >Email address</label>
                <input type="text" className='sinp'/>
              </div>
              <p className='sip'>Your email address will be added to the metadata of packages that you publish, so it may be seen publicly.</p>
                  <div className='ld'>
                <label htmlFor="Us" className='l1 ' >Password</label>
                <input type="text" className='sinp1' />
                <button className='sinp2' >show</button>
                
              </div>
              <p className='siper'>Minimum of 10 characters and must meet our password guidelines</p>
              <div><input type="checkbox" name="" id=""  className='hale'/>
              <label className='nali'>I agree to the End User License Agreement and the Privacy </label></div>
             <div className='creaAcc'><p>Create an Account</p></div>
            </form>
          </div>
        
        </div >
        <div>
           <p className='yes'>Already have an account?</p>
           <p  className='yes y1'> <Link to="/signin">Sign In</Link></p>
         </div>
          </div>
      </>
  )
}

export default signup