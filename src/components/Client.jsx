import React from 'react'
import './client.css'
import '../App.css'
import client1 from '../assets/client-1.png'
import client2 from '../assets/client-2.png'
import client3 from '../assets/client-3.png'
import client4 from '../assets/client-4.png'
import client5 from '../assets/client-5.png'
import client6 from '../assets/client-6.png'



const Client = () => {

  return (
    <div className="client box">
        <div className="box client-container ">
            <div className='client-img' ><img src={client1} alt="client" /></div>
            <div className='client-img' ><img src={client2} alt="client" /></div>
            <div className='client-img' ><img src={client3} alt="client" /></div>
            <div className='client-img' ><img src={client4} alt="client" /></div>
            <div className='client-img' ><img src={client5} alt="client" /></div>
            <div className='client-img' ><img src={client6} alt="client" /></div>
        </div>
    </div>
  )
}

export default Client