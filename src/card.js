import React from 'react';

const Card = ({
    title,
    description,
    saga,
    arc,
    theme
}) => {
    return (
        <div className="op_card_wrapper">
            <h3 className="op_card_title">{title}</h3>
            <p className="op_card_description">{description}</p>
            <strong className="op_card_saga_and_arc">{saga.title} - {arc.title}</strong>
        </div>
    );
};

export default Card;
