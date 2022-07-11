import React from 'react'
import './style.css'
function Moviecard(props) {
    return (
        <div>

            <div className="cards">
                <div className="card">
                    <img src={props.id} alt="myPic" className="card_img" height="200px" width="200px" />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title"> {props.name} </h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moviecard
