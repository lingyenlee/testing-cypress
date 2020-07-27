import React, {useState} from 'react'

const Auth = ({onAuth}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isNewUser, setIsNewUser] = useState(true)


    async function onButtonClick(){
        onAuth({email})
    }

    return (
        <div>
            <input 
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
            <button onClick={onButtonClick}>{isNewUser ? "Signup" : "Login"}</button>
            <input
                type="checkbox"
                value={isNewUser}
                onChange={() => setIsNewUser(!isNewUser)}
            />
            I have an account
        </div>
    )
}

export default Auth