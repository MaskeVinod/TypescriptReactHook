import React, { useContext } from 'react'
import { styleobjContext } from './StyleContext'

function Content() {

    const theme=useContext(styleobjContext)
  return (
    <div style={{color:theme.style2.theme}}>Content</div>
  )
}

export default Content