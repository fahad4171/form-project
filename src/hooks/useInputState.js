
/* Step:1 
create a function
To manage the state,we can use react hook inside that function.
*/
const useInputState = (defaultValue= null) =>{
    const [value, setValue] = useState(defaultValue);
    
    /* step 2: */
    const handleChange = val =>{
        setValue(val);
    }

    /* step 3: return the functions, we can return as Array or object, depending on our needs */
    return [value, handleChange]

}

/* step 4: to use this overall function from anywhere, we need to export it  */

export default useInputState;