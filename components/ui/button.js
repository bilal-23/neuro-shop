import classes from './button.module.css'

function Button(props) {
    return (
        <button className={classes.button} disabled={props.disable && true}>{props.children}</button>
    )
}
export default Button;