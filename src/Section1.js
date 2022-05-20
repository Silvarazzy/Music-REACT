import React, { useState } from 'react'
import illustrationhero from './IMAGES/illustration-hero.svg'
import music from './IMAGES/icon-music.svg'

const Section1 = () => {
    const [change, setChange] = useState("Annual plan")
    const [duration, setDuration] =useState("$59.99/year")

        function newPlan() {
        if(change ==='Annual plan'){
            setChange('Monthly plan')
            setDuration('$4.99/month')
        }else{
            setChange('Annual plan')
            setDuration('$59.99/year')
        }
    }

  return (
    <div className='Music'>
        <img className='img' src={illustrationhero} alt="" />
        <div className='order'>
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, <br/>audiobooks and podcasts on any device  <br />anywhere you like!</p>
            <div className='flex'>
                <div className='music'> <img src={music} alt="" /> </div>
                <div className='Annual'> <strong>{change} </strong> <br /> {duration} </div>
                <div className='href'> <a onClick={newPlan} href="#">Change</a></div>
            </div>
        </div>
        <button className='btn'>Proceed to Payment</button>
        <p className='last'>Cancel order</p>

    </div>
  )
}

export default Section1