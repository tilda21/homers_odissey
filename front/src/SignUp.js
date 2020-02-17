import React, { useState } from 'react';


const SignUp = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordbis, setPasswordbis] = useState('');

    let json = {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        passwordbis: passwordbis
    };

    const updateEmailField = (e) => {
        console.log(e.target.form[3].value);
        let value = e.target.value;
        // eslint-disable-next-line no-unused-expressions
        e.target.name==='name' ? setName(value) : e.target.name==='lastname' ? setLastname(value) : e.target.name==='email' ? setEmail(value) : e.target.form[4].value===value ?(setPasswordbis(value), setPassword(value)) : console.log("Your password doesn't match your previous password input");
        
    }

    const handleSubmit = (e) => {
        //console.log(e.target.previousSibling.style.display);
        e.target.previousSibling.style.display='block';

        e.preventDefault();
    }


    return (
        
        <>
            <div id='jsonObject' style={{display:'none'}} >
                {JSON.stringify(json, 1, 1) }
            </div> 
            <form onSubmit={handleSubmit} >
                <label>
                    <h1>Name:</h1>
                    <input onChange={updateEmailField} type="text" name="name"/>
                    <h1>Lastname:</h1>
                    <input onChange={updateEmailField} type="text" name="lastname"/>
                    <h1>Email:</h1>
                    <input onChange={updateEmailField} type="email" name="email"/>
                    <h1>Password:</h1>
                    <input type="password" name="password"/>
                    <h1>Repeat password:</h1>
                    <input onChange={updateEmailField} type="password" name="passwordbis"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

/* const SignUp = () => {
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
} */

export default SignUp;