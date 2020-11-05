import React from 'react'
import '../styles/card.css'
import {Link} from "react-router-dom";

export default function card(props) {
    return (
        <div className="card">
            <Link to={`/Country/${props.name}`}>
                <img src={props.flag} alt=""/>
                <div className="card-body">
                    <h2>{props.name}</h2>
                    <p><strong>Population:</strong> {props.population}</p>
                    <p><strong>Region:</strong> {props.region}</p>
                    <p><strong>Capital:</strong> {props.capital}</p>
                </div>
            </Link>
        </div>
    )
}
