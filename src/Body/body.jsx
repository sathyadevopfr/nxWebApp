import React from 'react'
import '../Styles/body.css'
import Info from '../Info/nfo'
const Body = () => {
  return (
      <>
          <div className='bdymain'>
          <div className='center c1 c2 co '>
              <h1 className='f1'>Build amazing things</h1>
              <div>
                  <div className='we'>
                      We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.
                  </div>
                  <h2 className='f2'>Take your JavaScript development up a notch</h2>
                  <div className='f3'>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</div>
                  <div className=' bdbutt'>
                      <div className='bu'>
                          <button className='b1'>Sign up for free</button>
                      </div>
                      <div className='bu'>
                          <button className='b2'>Learn about Pro</button>
                      </div>
                  </div>
              </div>
          </div>

      </div>
      <Info/>
      </>
  )
}

export default Body