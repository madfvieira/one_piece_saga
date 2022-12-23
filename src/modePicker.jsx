import TabOption from './TabOption.jsx';

const ModesList = ({modes}) => {
    return (
        <>
            {modes.map( (mode, index) => {
                return (
                    <TabOption
                        id={mode.id}
                        name={mode.name}
                        onClick={mode.onClick}
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
