import React, {useState} from 'react'
import Auth from './Auth'
import Todos from './Todos'


export default () => {

    const [user, setUser] = useState(null)

    return (
        <div>
            {user ? (
                <>
                    <button onClick={() => setUser(null)}>logout</button>
                    <Todos />
                </>
            ) : (
                <Auth onAuth={setUser} />
            )}

        </div>
    )
}