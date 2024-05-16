/* we can use same form for multiple purposes such as sign up, log in, updating profile without creating separate form for each of these */
/* providing a default name for submit */

const ReusableForm = ( {handleSubmit, formTitle, submitBtnText ='Submit'} ) => {
    /* instead of using submit handler for forms here, we will use it at App.jsx */

    /* creating handler to collect data from the form */
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.email.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            {/* making title of the form dynamic */}
            <h2>{formTitle}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/> {/* always is name property */}
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;