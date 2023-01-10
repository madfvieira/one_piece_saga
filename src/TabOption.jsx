import React, { useState} from 'react';
import { connect } from 'react-redux';

const TabOption = ({
    id,
    name,
    addFilter,
    removeFilter,
}) => {
    const [active, setActive] = useState(false);

    return (
        <button
            id={id}
            style={{
                backgroundColor: active ? '#00364c' : ''
            }}
            onClick={() => {
                setActive(!active);
                if (active) {
                    removeFilter(id);
                } else {
                    addFilter(id);
                }
            }}
        >
            {name}
        </button>
    );
};

const mapStateToProps = (state) => {
    return ({
        filterOPfacts: state.filterOPfacts,
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFilter: (saga) => {
            return (
                dispatch(
                    { type: 'ADD_FILTER_OP_SAGA', payload: { 'saga': saga } }
                )
            );
        },
        removeFilter: (saga) => {
            return (
                dispatch(
                    { type: 'REMOVE_FILTER_OP_SAGA', payload: { 'saga': saga } }
                )
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabOption);
