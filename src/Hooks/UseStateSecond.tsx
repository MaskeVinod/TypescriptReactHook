import React, { useState } from 'react'

function UseStateSecond() {
    interface userDataType {
        name: String,
        lname: String
    }
    const [user, setUser] = useState<userDataType | null>(null)

    const handelShow = () => {
        setUser({
            name: 'vinod',
            lname: 'maske'
        })
    }

    const handelHide = () => {
        setUser(null)
    }

    return (
        <>
            <button onClick={handelShow}>Show</button>
            <button onClick={handelHide}>Hide</button>
            <div>{user?.name}</div>
            <div>{user?.lname}</div>
        </>
    )
}

export default UseStateSecond