import Card from './card.js';
import { OPfacts } from './config.js';

export const getOPCards = () => {
    // generate a card for each OP fact
    let cards = [];
    OPfacts.map((fact, index) => {
        cards.push(
            (() => {
                return (
                    <Card
                        title={fact.title}
                        description={fact.description}
                        saga={fact.saga}
                        arc={fact.arc}
                    >
                    </Card>
                );
            })()
        );
    });
    return cards;
}
