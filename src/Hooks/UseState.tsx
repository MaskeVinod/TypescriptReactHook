import React, { useState } from 'react'

function UseState() {
    const[isSignIn,setSignIn]=useState(false)
    return (
        <>
         <button onClick={()=>setSignIn(true)}>Sign In</button>
         <button onClick={()=>setSignIn(false)}>Sign Out</button>
         <h1>{isSignIn ? "SignIn" : 'SignOut'}</h1>
        </>
    )
}

export default UseState