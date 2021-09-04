import classes from './card.module.css'

function Card(props) {
    const { cardId } = props;
    return (
        <div className={`${classes.card} ${classes[cardId]}`}>
            <div className={classes.top}>
                <img src={`./assets/${cardId}.png`} alt={props.text} />
            </div>
            <div className={classes.mid}>
                <p>{props.text}</p>
            </div>
            <div className={classes.bottom}>
                <a href="#">Shop now</a>
            </div>
        </div>
    )
}
export default Card;