import React from 'react';
import Card from './card.js';
import { OPfacts } from './config.js';

import { connect } from 'react-redux';

const generateOPCards = (sagas) => {
    // generate a card for each OP fact
    let cards = [];
    OPfacts.map((fact, index) => {
        if (sagas.indexOf(fact.saga.id) >= 0) {
            cards.push(
                (() => {
                    return (
                        <Card
                            title={fact.title}
                            description={fact.description}
                            saga={fact.saga}
                            arc={fact.arc}
                            key={`ReactElm_${index}`}
                        >
                        </Card>
                    );
                })()
            );
        }
    });
    return cards;
}

const OPfactsWrapperComp = ({
    OPfacts
}) => {
    return (OPfacts);
};

const mapStateToProps = (state) => {
    return ({
        OPfacts: generateOPCards(state.curSagas),
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export const OPfactsWrapper = connect(mapStateToProps, mapDispatchToProps)(OPfactsWrapperComp);
