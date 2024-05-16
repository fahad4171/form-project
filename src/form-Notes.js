/* We can create forms in React by various methods

Method-1: use form tag and name to get values. also, onSubmit Handler with event (e) as parameter. From (e) access value using (e.target.name of the input field.value)

Method-2: (Controlled element): Use individual field state for each input field. if we want give an initial value of the fields

Method-3: (Controlled): but using one object in a state, holding all the input fields value.

Method-4: (Uncontrolled element): useRef hook to create reference to the element and access value by using like: nameRef.current.value

Method-5: use Hook to handle states, submit and error. example, react hook form
*/

/* CUSTOM HOOK */