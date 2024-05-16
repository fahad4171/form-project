/* Method-4: (Uncontrolled element): useRef hook to create reference to the element and access value by using like: nameRef.current.value */

import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    /* we can also put cursor initially on our desired field0.(here, in name input)  */
    useEffect(() =>{
        nameRef.current.focus();
    })

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name"/> {/* always use name property */}
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <button type="submit" value="submit">Submit</button>
            </form>
        </div>
    );
};

export default RefForm;