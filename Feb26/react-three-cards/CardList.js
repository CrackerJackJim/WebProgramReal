import React from "react";
import Card from "./Card";

const cardData = [
    { title: "Card 1", content: "This is the first card.", color: "#ffcccc", buttonColor: "#ff6666" },
    { title: "Card 2", content: "This is the second card.", color: "#ccffcc", buttonColor: "#66cc66" },
    { title: "Card 3", content: "This is the third card.", color: "#ccccff", buttonColor: "#6666ff" }
];

function CardList() {
    return (
        <div className="card-list">
            {cardData.map((card, index) => (
                <Card 
                    key={index} 
                    title={card.title} 
                    content={card.content} 
                    color={card.color} 
                    buttonColor={card.buttonColor} 
                />
            ))}
        </div>
    );
}

export default CardList;
