import React from 'react';
import TabOption from './TabOption.jsx';

const ModesList = ({
    modes,
    allowMulti
}) => {
    return (
        <>
            {modes.map( (mode, index) => {
                return (
                    <TabOption
                        id={mode.id}
                        name={mode.name}
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
