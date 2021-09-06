import classes from './Button-secondary.module.css';

function ButtonSecondary(props) {
    return (
        <div className={classes.btn}>
            <a href={props.link}>{props.children}</a>
        </div>
    )
}
export default ButtonSecondary;