import React, { Component } from 'react'
import './covid.scss'
import ig1 from './images/ig1.jpg'
import ig2 from './images/ig2.jpg'
import ig3 from './images/ig3.jpg'

class Allupdates extends Component {
    render() {
        return (
            <div>

                <div className='card-2'>

                    <div className='card-2-main'>
                        <div className='card-2-head'>
                            <img src={ig1} alt='imag1' className='my_ig1' />
                            <img src={ig2} alt='image2' className='my_ig2' />
                        </div>
                        <div className='card-2-body'>
                            <h1>Do you want all updates on just one tap ?? </h1>
                            <h4>Click the link down below to stay updated every moment</h4>
                            <img src={ig3} alt='image3' className='my_ig3'/>
                        </div>
                        <button className='card-2-butt'><a href="https://www.mygov.in/covid-19">Clicke Me</a></button>
                    </div>
                   
                </div>
            </div>
        )
    } S
}

export default Allupdates
