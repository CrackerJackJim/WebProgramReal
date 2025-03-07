// Card.js
import React from "react";
import "./Card.css"; // Import CSS Component

function Card({ title, content, color, buttonColor }) {
    const handleClick = () => {
        alert(`Card Title: ${title}`);
    };

    return (
        <div className="card" style={{ backgroundColor: color }}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button className="card-button" style={{ backgroundColor: buttonColor }} onClick={handleClick}>
                Click Me!
            </button>
        </div>
    );
}

export default Card;
