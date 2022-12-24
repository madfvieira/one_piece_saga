import React from 'react';
const TabOption = ({
    id,
    name,
    onClick,
}) => {
    return (
        <button
            id={id}
            onClick={onClick}
        >
            {name}
        </button>
    );
};

export default TabOption;
