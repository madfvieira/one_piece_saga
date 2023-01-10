import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { OPfactsWrapper } from './OPcards.js';
import { ModePicker } from './modePicker.jsx';
import { sagas } from './config.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const spurious = 'spurious'; // just a spurious change to trigger deploy

import styles from './styles.jsx';

const appEl = document.getElementById('app');
const root  = createRoot(appEl);

const store = createStore(rootReducer)
const state = store.getState();

const insertAppStyles = (CssStyles) => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = CssStyles;
    document.head.appendChild(styleTag);
};

const renderAllCards = () => {
    root.render(
        <Provider store={store}>
            <>
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

                <OPfactsWrapper />
            </>
        </Provider>
    );
};

insertAppStyles(styles);
renderAllCards();
