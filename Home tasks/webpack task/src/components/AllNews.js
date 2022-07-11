import React, { Component } from 'react'
import './covid.scss'
import ig4 from './images/ig4.jpg'
import ig5 from './images/ig5.jpg'
import ig6 from './images/ig6.jpg'
import ig7 from './images/ig7.jpg'


class AllNews extends Component {
    render() {
        return (
            <div>
                <marquee width = "65%" 	
scrollamount="13"><h1 className='head3'>HERE ARE SOME NEWS CHANNELS TO FOLLOW LIVE COVID UPDATES IN INDIA</h1></marquee> 
                <ul className='mycard'>

                    <li>
                        <div className='card-3'>
                            <div className='card-3-main'>
                                <div className='card-3-head'>
                                    <a href='https://economictimes.indiatimes.com/coronavirus'><img src={ig4} className="my_ig4" /></a>

                                </div>
                                <div className='card-3-body'>
                                    <h3>THE ECONOMIC TIMES</h3>
                                    <h5>Since 1961</h5>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className='card-3'>
                            <div className='card-3-main'>
                                <div className='card-3-head'>
                                    <a href='https://www.ndtv.com/coronavirus'><img src={ig5} className="my_ig5" /></a>

                                </div>
                                <div className='card-3-body'>
                                    <h3>NDTV INDIA</h3>
                                    <h5>Since 1988</h5>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className='card-3'>
                            <div className='card-3-main'>
                                <div className='card-3-head'>
                                    <a href='https://www.indiatvnews.com/topic/coronavirus'><img src={ig6} className="my_ig6" /></a>

                                </div>
                                <div className='card-3-body'>
                                    <h3>INDIA TV</h3>
                                    <h5>Since 2004</h5>
                                </div>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className='card-3'>
                            <div className='card-3-main'>
                                <div className='card-3-head'>
                                    <a href='https://www.livemint.com/topic/coronavirus'><img src={ig7} className="my_ig7" /></a>

                                </div>
                                <div className='card-3-body'>
                                    <h3>THE MINT NEWS</h3>
                                    <h5>Since 2007</h5>
                                </div>
                            </div>

                        </div>
                    </li>
                </ul>

            </div>
        )
    }
}

export default AllNews
