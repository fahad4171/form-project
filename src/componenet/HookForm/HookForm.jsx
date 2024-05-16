/* note is not complete watch video again */

/* using custom hook we created */

const HookForm = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/> {/* always is name property */}
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <button type="submit" value="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;