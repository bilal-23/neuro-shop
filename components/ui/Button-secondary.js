import classes from './Button-secondary.module.css';

function ButtonSecondary(props) {
    return (
        <button className={`${classes.btn} ${props.tall && classes.tall}`} type={props.type}>{props.children}
        </button>
    )
}
export default ButtonSecondary;