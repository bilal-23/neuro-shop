import classes from './button.module.css'

function Button(props) {
    return (
        <button className={classes.button}>{props.children}</button>
    )
}
export default Button;