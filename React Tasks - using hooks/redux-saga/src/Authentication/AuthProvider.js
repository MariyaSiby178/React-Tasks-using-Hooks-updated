import React, { createContext,useState } from 'react'

export const context = createContext({})
export const AuthProvider=({children})=> {
    const [authData,setAuthData] = useState(null)
    const obj = {
        authData,
        setAuthData,
    }
  return (
    <div>
      <context.Provider value={obj}>{children}</context.Provider>
    </div>
  )
}


