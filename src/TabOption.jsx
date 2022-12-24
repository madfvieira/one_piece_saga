import React, { useState} from 'react';

const TabOption = ({
    id,
    name,
    onBtnClick,
}) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <button
            id={id}
            style={{
                backgroundColor: active ? '#8484ff' : ''
            }}
            onClick={toggleActive}
        >
            {name}
        </button>
    );
};

export default TabOption;
