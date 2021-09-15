import { useState } from 'react';
import Image from 'next/image';
import Skeleton from '@material-ui/lab/Skeleton';
import classes from './image-skeleton.module.css';


function SkeletonImage(props) {
    const [imageIsLoaded, setImageIsLoaded] = useState(false);
    function imageLoadHandler() {
        setImageIsLoaded(true);
    }
    return (
        <>  <Image src={props.src} alt={props.alt} height={props.width} width={props.height}
            onLoad={(e) => {
                e.target.src.indexOf('data:image/gif;base64') < 0 && imageLoadHandler()
            }} />
            {!imageIsLoaded && <div className={classes.skeleton}>
                <Skeleton variant="rect" width={props.width - 100} height={props.height - 100} animation="wave" />
            </div>}

        </>
    )
}

export default SkeletonImage;