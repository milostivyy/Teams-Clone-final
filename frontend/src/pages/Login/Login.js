import React, {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';//Adding  the PropType from the new prop and destructure the props object to pull out the setToken prop.
import axios from 'axios'


const projectID = '07f18633-a1ef-4a59-80fd-914176516a2e';
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }//Create an async function called loginUser. 
   //The function will take credentials as an argument, then it will call the fetch method using the POST option:
   // creating a function to make a POST request to the server. 

export const Login = ({setToken}) => {
    const [username,setUsername] = useState();//create a local state to capture the Username.
    const [password,setPassword] = useState();
    const [error, setError] = useState('');
    ////create a local state to capture the Password.



    const handelSubmit = async e => {

     
        e.preventDefault();
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
        console.log("now")
        console.log(username)
        console.log(password)
        try {
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });  
          setError('');

          const token = await loginUser({
            username,
            password
        });
        localStorage.setItem('username',username)
        localStorage.setItem('password', password)
        setToken(token);
        }

        catch (err) {
          setError('Oops, incorrect credentials.');
        }
        

    }//create a form submit handler called handleSubmit that will call loginUser with the username and password.
    // Call setToken with a successful result. Call handleSubmit using the onSubmit event handler on the <form>.
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit = {handelSubmit}>
        <label>
          <p>Username</p>
          <input type="text"  onChange = {e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange = {e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}
Login.propTypes = {
    setToken : PropTypes.func.isRequired
}