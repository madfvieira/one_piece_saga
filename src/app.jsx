import { getOPCards } from './OPcards.js';
import { ModePicker } from './modePicker.jsx';
import styles from './styles.jsx';

const appEl = document.getElementById('app');
const root  = ReactDOM.createRoot(appEl);

const OPcards = getOPCards();

const insertAppStyles = (CssStyles) => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = CssStyles;
    document.head.appendChild(styleTag);
};

const renderAllCards = () => {
    root.render(
        <>
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
