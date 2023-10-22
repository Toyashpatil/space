"use client"
import React, { useState } from 'react'
import AuthContext from './AuthContext'

const Authstate = (props) => {

    const [planetIndex, setPlanetIndex] = useState(0)

    return (
        <AuthContext.Provider value={{ planetIndex, setPlanetIndex }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default Authstate