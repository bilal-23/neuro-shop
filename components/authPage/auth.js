import { useEffect, useRef, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import ButtonSecondary from '../ui/Button-secondary';
import { signIn } from 'next-auth/client'
import classes from './auth.module.css';

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState(false);
    const [success, SetSuccess] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setError(false);
            SetSuccess(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        }
    }, [error, success]);

    //toggle sign in create-account form
    function toggleHandler() {
        setIsLogin(prevState => !prevState);
    }

    //auth handler
    async function authHandler(e) {
        e.preventDefault();
        const enteredEmail = emailRef.current.value.trim();
        const enteredPassword = passwordRef.current.value.trim();

        if (!enteredEmail || !enteredPassword || enteredPassword.length < 6 || enteredEmail.length < 10) {
            setError('Invalid Inputs');
            return;
        }
        if (isLogin) {
            try {
                const result = await signIn('credentials', {
                    redirect: false,
                    email: enteredEmail,
                    password: enteredPassword
                });
                console.log(result);
                SetSuccess("loggedin");
            } catch (err) {
                setError(err.message);
                console.log(error);
            }


        } else {
            //create account logic
            console.log(enteredEmail, enteredPassword)
            try {
                const res = await fetch('/api/auth/signup', {
                    method: 'POST',
                    body: JSON.stringify({ email: enteredEmail, password: enteredPassword }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await res.json();
                console.log("res", res);
                console.log("data", data);
                if (!res.ok) {
                    throw new Error(data.error);
                } else {
                    SetSuccess(data.message);
                }

            } catch (error) {
                setError(error.message);
            }
        }
    }

    return (
        <>
            {error && <Alert severity="error" className="alert">{error}</Alert>}
            {success && <Alert severity="success" className="alert">{success}</Alert>}
            <section className={classes.auth}>
                <div className={classes.auth_heading}>
                    {isLogin && <h3>Sign In</h3>}
                    {!isLogin && <h3>Create Your Account</h3>}
                </div>
                <form onSubmit={authHandler}>
                    <div className={classes.form_input_group}>
                        <input type="email" placeholder="Email" ref={emailRef} />
                    </div>
                    <div className={classes.form_input_group}>
                        <input type="password" placeholder="Password" ref={passwordRef} min="6" />
                    </div>
                    <div className={classes.form_input_group}>
                        <ButtonSecondary type="submit" tall={true}>{isLogin ? 'Sign In' : 'Create Account'}</ButtonSecondary>
                    </div>
                </form>
                <div className={classes.auth_change}>
                    {isLogin && <p>Don&apos;t have an account? <span onClick={toggleHandler}>Create One</span></p>}
                    {!isLogin && <p>Already have an account? <span onClick={toggleHandler}>Sign In</span></p>}
                </div>
            </section>
        </>
    )
}
export default Auth;