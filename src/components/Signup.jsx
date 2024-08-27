import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from './Authcontext';

const Signup = () => {
    const {userLoggedIn} = useAuth();

    const navigate = useNavigate()
    
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [isRegistering, setIsRegistering]=useState("");
    const [errorMessage, setErrorMessage]=useState("");

    const onsubmit = async (e) => {
        e.preventDefault()
    }

  return (
    <div>
              {userLoggedIn && (<Navigate to={"/"} replace={true} />)}

    </div>
  )
}

export default Signup
