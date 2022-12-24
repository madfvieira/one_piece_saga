import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { getOPCards } from './OPcards.js';
import { ModePicker } from './modePicker.jsx';
import { sagas } from './config.js';
import styles from './styles.jsx';

const appEl = document.getElementById('app');
const root  = createRoot(appEl);

const OPcards = getOPCards();

const insertAppStyles = (CssStyles) => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = CssStyles;
    document.head.appendChild(styleTag);
};

const renderAllCards = () => {
    root.render(
        <>
            <label>
                Sagas:
            </label>
            <ModePicker
                modes={
                    Object.values(sagas).map( (saga, index) => {
                        const sagaKey = Object.keys(sagas)[index];
                        return (
                            { id: sagaKey, name: saga.title, value: sagaKey }
                        );
                    })
                }
            >
            </ModePicker>

            <ModePicker
                modes={
                    [
                        { id:'full', name:'All at once', value: 'full' },
                        { id:'one_at_time', name:'1 at the time', value: 'one_at_time' },
                    ]
                }
            >
            </ModePicker>
            {OPcards}
        </>
    );

};

insertAppStyles(styles);
renderAllCards();
