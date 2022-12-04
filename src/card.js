import classNames from './classNames.js';

const Card = ({
    title,
    description,
    saga,
    arc,
    theme
}) => {
    const clx = classNames.OPcard;
    return (
        <div className={clx.wrapper}>
            <h3 className={clx.title}>{title}</h3>
            <p className={clx.description}>{description}</p>
            <strong className={clx.saga_and_arc}>{saga.title} - {arc.title}</strong>
        </div>
    );
};

export default Card;
