
import './App.css'
//import RefForm from './componenet/RefForm/RefForm';
import ReusableForm from './componenet/Reuseableform/ReusableForm';
//import SimpleForm from './componenet/SimpleForm/SimpleForm'
//import StatefulForm from './componenet/StatefulForm/StatefulForm'


function App() {
  
  const handleSignUpSubmit = data =>{
    console.log('sign up data', data);
  }

  const handleUpdateProfile = data =>{
    console.log('update profile', data);
  }

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      <ReusableForm formTitle={'Sign up'} handleSubmit={handleSignUpSubmit}></ReusableForm>
      {/* updating button default name from submit to update for this form */}
      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}></ReusableForm>
      
     
    </>
  )
}

export default App;
