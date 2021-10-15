import Image from 'next/image'
import classes from './zone-section.module.css';

function ZoneSection() {
    return (
        <section className={classes.section}>
            <div className={classes.zone_image}>
                <Image src="/assets/zone.gif" width={400} height={400} alt="Zone" />
            </div>
            <div className={classes.zone_content}>
                <h3>In the zone. Every day.</h3>
                <p>Never run out of Neuro with a monthly subscription. Members get 10% off and free shipping straight to your door.</p>
                <a href="#">Subscribe</a>
            </div>
        </section>
    )
}
export default ZoneSection;