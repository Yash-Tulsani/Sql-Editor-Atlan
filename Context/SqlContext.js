"use client"

import {createContext, useState} from 'react'

export const SqlContext=createContext()

const SqlContextComponent=(props)=>{
    const [theme,setTheme]=useState('dark');
    
    return (
        <SqlContext.Provider value={{theme,setTheme}}>
            {props.children}
        </SqlContext.Provider>
    )
}


export default SqlContextComponent;