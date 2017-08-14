import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.eng}</div>
            </div>
            <div className="back">
                <div className="esp">{props.esp}</div>
            </div>
        </div>
    </div>
)

export default Card;