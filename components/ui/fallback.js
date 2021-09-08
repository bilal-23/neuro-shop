import classes from './fallback.module.css';
import Skeleton from '@material-ui/lab/Skeleton';
function Fallback() {
    return (
        <section className={classes.fallback}>
            <div className={classes.fallback_image}>
                <Skeleton variant="rect" width={350} height={350} animation="wave" />
            </div>
            <div className={classes.fallback_detail}>
                <Skeleton variant="text" width={300} height={50} />
                <Skeleton variant="text" width={300} height={100} />
                <Skeleton variant="rect" width={300} height={250} />
                <Skeleton variant="text" width={300} height={50} />
            </div>
        </section>
    )
}
export default Fallback;