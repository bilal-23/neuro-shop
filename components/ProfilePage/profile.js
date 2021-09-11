import { useState } from 'react';
import classes from './profile.module.css';

function Profile() {
    const [navSelected, setNavSelected] = useState();
    return (
        <section className={classes.profile}>
            <div className={classes.profile_nav}>
                <ul>
                    <li className={classes.active} onClick={() => setNavSelected('history')} >Purchase History</li>
                    <li >Logout</li>
                </ul>
            </div>
            <div className={classes.profile_nav_content}>
                <h2>Purchase history</h2>
            </div>
        </section>
    )
}
export default Profile;