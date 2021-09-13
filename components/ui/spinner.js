import classes from './spinner.module.css';

function Spinner() {
    return (
        <div className={classes["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Spinner;