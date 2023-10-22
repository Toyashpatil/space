"use client"
import React, { useState } from 'react'
import AuthContext from './AuthContext'

const Authstate = (props) => {

    const [planetIndex, setPlanetIndex] = useState(0)
    const [open, setOpen] = useState(false)

    return (
        <AuthContext.Provider value={{ planetIndex, setPlanetIndex ,open,setOpen}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default Authstate