import React from 'react'
import Nav from "../component/Nav"
import pic from '../assets/shoes.jpeg'
import './Home.css'

const Home = () => {
  return (
    <>
        <Nav/>
        <div className="home">
            <div className='shoes'>
               <img src={pic} alt='shoes-pic'/>
            </div>
            <div className='text-box'>
                <h1>AIR MAX</h1>
                <h3>NIKE AIR MAX 90</h3>
                <h3>$96</h3>
                <p>Nothing as Fly, nothing is comfortable, nothing as proven-the 
                 Nike Air Max 90 step true to its rootswith the iconic Waffle shole, stiched overloys and classic TPU occents.</p>
                 <button className='btn'>ADD TO CART</button>
            </div>
        </div>
    </>
  )
}

export default Home