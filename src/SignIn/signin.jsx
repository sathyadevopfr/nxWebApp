import React from 'react'
import { TbBrandNpm } from "react-icons/tb";
import '../Styles/signin.css'
import Doll from '../Assets/chalu.png'
import { Link } from 'react-router-dom';
const Signin = () => {
  return (
    <>
      <div className='com' >
        <div className="header1"></div>
        <TbBrandNpm className='ab' />
        <div className='siup' id="c453">
           <div class="circle f89">
              <img src={Doll} alt="" />
          </div>
          <div>
            <form action="">
               <h1 className='h7 ' id='h87'>Sign In</h1>
              <hr className='hori' />
              <div className='ld'>
                <label htmlFor="Us" className='l1 ' >Username *</label>
                <input type="text" className='sinp'/>
              </div>
               <div className='ld'>
                <label htmlFor="Us" className='l1 ' >Email address</label>
                <input type="text" className='sinp'/>
              </div>
              <div className='l72002' ><p className='l78672 i903'> <Link to="/signin" >Sign In</Link></p></div>
              <div>
                <p className='p43'> <Link to="/signup" >Create Account</Link></p>
              </div>
            </form>
          </div>
         </div>
        </div>
    </>
  )
}

export default Signin