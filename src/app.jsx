import { getOPCards } from './OPcards.js';
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
    root.render(OPcards);
};

insertAppStyles(styles);
renderAllCards();
