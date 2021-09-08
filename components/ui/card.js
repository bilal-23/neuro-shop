import classes from './card.module.css'
import Image from 'next/image';
import Link from 'next/link';

function Card(props) {
    const { cardId } = props;
    return (
        <div className={`${classes.card} ${classes[cardId]}`}>
            <div className={classes.top}>
                {cardId !== 'card3' && <Image src={`/assets/${cardId}.png`} alt={props.text} width={50} height={50} />}
                {cardId === 'card3' && <Image src={`/assets/${cardId}.png`} alt={props.text} width={150} height={100} />}
            </div>
            <div className={classes.mid}>
                <p>{props.text}</p>
            </div>
            <div className={classes.bottom}>
                <Link href={props.link}> Shop now</Link>
            </div>
        </div >
    )
}
export default Card;