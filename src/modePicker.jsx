import React from 'react';
import TabOption from './TabOption.jsx';

const ModesList = ({
    modes,
    allowMulti
}) => {
    const btnOnClick = (btn) => {
        if (allowMulti) {
        }
    };

    return (
        <>
            {modes.map( (mode, index) => {
                return (
                    <TabOption
                        id={mode.id}
                        name={mode.name}
                        onBtnClick={btnOnClick}
                        key={`ReactElm_${mode.id}`}
                    >
                    </TabOption>
                );
            })}
        </>
    );
}

export const ModePicker = ({
    modes,
}) => {
    return (
        <div className="op_mode_picker_wrapper">
            <ModesList
                modes={modes}
            />
        </div>
    );
};
