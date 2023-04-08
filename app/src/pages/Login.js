import NavBar from "../components/NavBar.js";
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { set } from 'mongoose';

export default function Login() {
  const [user, setUser] = useState({});
  
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
    client_id: "259863739990-of54uicbvqqdhcl4ahsuk96avimloobb.apps.googleusercontent.com",
    callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )

  },[]);

  // if no user then: show sign in button
  // if user then: show log out button


  return (
    <>
        <NavBar/>
      <div id='signInDiv'></div>
      { Object.keys(user).length != 0 && 
        <button onClick={ (e) => handleSignOut(e)}>sign out</button>
      }
      { user &&
        <div> 
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
    </>
  )
}
