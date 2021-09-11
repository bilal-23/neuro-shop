import { useRef, useState } from 'react';
import classes from './footer-form.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function FooterForm() {
    const [loading, setIsLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const emailRef = useRef();

    async function newletterRegistration(email) {
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                body: JSON.stringify({ email: email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setFormSubmitted(true);
        } catch (err) {
            setIsLoading(false);
            setErrorMessage('Something went wrong');
        }

    }

    function updateHandler(e) {
        e.preventDefault();
        setErrorMessage();
        setIsLoading(true);
        const enteredEmail = emailRef.current.value.trim();
        if (!enteredEmail || enteredEmail.length < 7 || !enteredEmail.includes('@')) {
            setIsLoading(false);
            setErrorMessage('Invalid Input');
            return;
        }
        newletterRegistration(enteredEmail);
    }



    if (!formSubmitted) {
        return (
            <form className={classes.form}>
                <p>Never miss an update</p>
                <div className={classes.form_input}>
                    <input type="email" placeholder="Email" required ref={emailRef} />
                    {!loading && <button onClick={updateHandler}>Register</button>}
                    {loading && <CircularProgress className={classes.spinner} />}
                </div>
                {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            </form>
        )
    }
    if (formSubmitted) {
        return (
            <form className={`${classes.form} ${classes.form_success}`}>
                <p className={classes.form_success_heading}>Thanks for subscribing!</p>
                <p className={classes.form_success_message}>Check your email for a confirmation message.</p>
            </form>
        )
    }
}

export default FooterForm;