
/* METHOD - 2: (Controlled element) Use individual field state. if we want give an initial value of the fields  */

import { useState } from "react";


const StatefulForm = () => {

    /* declaring individual state to store input  */
    const [name, setName] = useState('polash'); /* if we want to set a initial value */
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    /* setting error state for password */
    const [error, setError] = useState('');

    /* this is handler for overall Form */
    const handleSubmit = e =>{
        e.preventDefault();
        if (password.length < 6){
            setError('Password must be at least 6 characters');
        }
        else{
            setError(''); 
        }
        console.log(name, email, password);
    }


    /* DECLARING, handler for individual input */
    /* this is handler for input field not form  and storing onChange value on email's state*/
    
    const handleNameChange = e =>{
        setName(e.target.value); 
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* The onChange event is used to update the state of the name variable when the value of the input element changes */}

                <input value={name} onChange={handleNameChange} type="text" name="name"/> {/* always use name property */}
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required/>
                <br />
                <button type="submit" value="submit">Submit</button>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;