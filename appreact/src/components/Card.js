import React from "react"
import compass from "../images/compass.png"

export default function Card(props) {
    return (
        <div className="card-all">
            <img src={props.imageUrl} alt="imgPlace" className="card--image"></img>
            <div className="texto">
            <div>
                <h2 className="card--location"><img src={compass} className="compass" alt="compass"></img> {props.location} <a href={props.googleMapsUrl} className="card--link">View in Google Maps</a></h2>
            </div>
                <h1 className="card--title">{props.title}</h1>
                <div className="div--date">
                    <h3 className="start-">{props.startDate} - {props.endDate}</h3>
                </div>
                <p className="card--text">{props.description}</p>
            </div>
        </div>
    )
}