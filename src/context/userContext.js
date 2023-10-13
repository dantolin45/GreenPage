import {useState, createContext,useContext } from "react";

export const UserContext = createContext()

export function useUserContext()
{
    return useContext(UserContext);

}

export const UserProvider=({children})=>{
    const [User, setUser]= useState(null);
    const [isLogged, setisLogged] = useState(false)

    
    
    return <UserContext.Provider value={User}>
        {children}
    </UserContext.Provider>
}