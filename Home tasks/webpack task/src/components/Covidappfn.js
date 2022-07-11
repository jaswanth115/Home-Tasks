import React, { useEffect,useState } from 'react'
import './covid.scss'
import logo from './images/logo.jpg'

//import axios from 'axios'
function Covidappfn() {

    const[data,setData]=useState([]);

const getCovidData=async ()=>{
    try{
     const res= await fetch('https://data.covid19india.org/data.json');
        const data=await res.json();
        setData(data.statewise[0]);
        console.log("data is fetched");

     }
    catch(err){
        console.log(err);
        console.log("There might be some error while fetching the data");
    }
  
    
}

    useEffect(()=>{
        getCovidData();
    },[]);//[] is used to render the page only once

  return (
    <div className='main'>
       <h1 className='head1'><img src={logo} className="my_logo"/>Live covid tracker</h1>
        <h3 className='head2'>Get All updates here</h3>
        <section>
        <ul className='s1'>
            <li className='mycard'>
               <div className='card-main card1'>
                <div className='class-innner '>
                    <p className='class-title'><span className='sp1 '>   OUR </span><span>Country</span></p>
                    <p className='class-body'>INDIA</p>
                </div>
                </div> 
            </li>
            <li className='mycard'>
               <div className='card-main card2'>
                <div className='class-innner'>
                    <p className='class-title'><span className='sp1'>   TOTAL </span><span>RECOVERED</span></p>
                    <p className='class-body'>{data.recovered}</p>
                </div>
                </div> 
            </li>
            <li className='mycard'>
               <div className='card-main card3'>
                <div className='class-innner'>
                    <p className='class-title'><span className='sp1'>   TOTAL </span><span>CONFIRMED</span></p>
                    <p className='class-body'>{data.confirmed}</p>
                </div>
                </div> 
            </li>
            <li className='mycard'>
               <div className='card-main card4'>
                <div className='class-innner'>
                    <p className='class-title'><span className='sp1'>   TOTAL </span><span> DEATH</span></p>
                    <p className='class-body'>{data.deaths}</p>
                </div>
                </div> 
            </li>
            <li className='mycard'>
               <div className='card-main card5'>
                <div className='class-innner'>
                    <p className='class-title'><span className='sp1'>   TOTAL   </span><span>ACTIVE</span></p>
                    <p className='class-body'>{data.active}</p>
                </div>
                </div> 
            </li>
            <li className='mycard'>
               <div className='card-main card6'>
                <div className='class-innner'>
                    <p className='class-title'><span className='sp1'>   LAST    </span><span>UPDATED</span></p>
                    <p className='class-body'>{data.lastupdatedtime}</p>
                </div>
                </div> 
            </li>
        </ul>
        </section>
    </div>
  )
}

export default Covidappfn
