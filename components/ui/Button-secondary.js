import classes from './Button-secondary.module.css';

function ButtonSecondary(props) {
    return (
        <div className={`${classes.btn} ${props.tall && classes.tall}`} >{props.children}
        </div>
    )
}
export default ButtonSecondary;