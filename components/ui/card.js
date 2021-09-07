import classes from './card.module.css'
import Image from 'next/image';

function Card(props) {
    const { cardId } = props;
    return (
        <div className={`${classes.card} ${classes[cardId]}`}>
            <div className={classes.top}>
                <Image src={`/assets/${cardId}.png`} alt={props.text} width={50} height={50} />
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