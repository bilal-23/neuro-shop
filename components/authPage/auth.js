import ButtonSecondary from '../ui/Button-secondary';
import classes from './auth.module.css';
import { useState } from 'react';

function Auth() {
    const [signin, setSignin] = useState(true);
    function toggleHandler() {
        setSignin(prevState => !prevState);
    }

    return (
        <section className={classes.auth}>
            <div className={classes.auth_heading}>
                {signin && <h3>Sign In</h3>}
                {!signin && <h3>Create Your Account</h3>}
            </div>
            <form>
                <div className={classes.form_input_group}>
                    <input type="email" placeholder="Email" />
                </div>
                <div className={classes.form_input_group}>
                    <input type="password" placeholder="Password" />
                </div>
                <div className={classes.form_input_group}>
                    <ButtonSecondary type="submit" tall={true}>{signin ? 'Sign In' : 'Create Account'}</ButtonSecondary>
                </div>
            </form>
            <div className={classes.auth_change}>
                <p>Don&apos;t have an account? <span onClick={toggleHandler}>Create One</span></p>
            </div>
        </section>
    )
}
export default Auth;