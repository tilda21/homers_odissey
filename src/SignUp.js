import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');

    const updateEmailField = (e) => {
        setEmail(e.target.value);
    }
    return (
        <form>
            <label>
                <h1>{email}</h1>
                <input onChange={updateEmailField} type="email" name="email"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default SignUp;