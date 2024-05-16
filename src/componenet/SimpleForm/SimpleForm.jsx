/*------------------ METHOD - 1 ---------- 
----------------------------------------------*/


const SimpleForm = () => {

    /* using 'e' or 'event' as parameter */
    const handleSubmit = e =>{
        e.preventDefault(); /* to avoid reload or prevent default behavior */

        console.log(e.target.name.value); /* getting value from input */
        console.log(e.target.email.value);
        console.log(e.target.phone.value);


    }

    return (
        <div>
            {/* using onsubmit not onclick. onsubmit triggers when submit type button is clicked*/}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/> {/* always is name property */}
                <br />
                <input type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                <button type="submit" value="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;