import { useState, createContext, useContext } from "react";

export const UserContext = createContext()

export function useUserContext() {
    
    return useContext(UserContext);

}

export const UserProvider = ({ children }) => {

    const [User, setUser] = useState(); 
    const changueUser = (e) => {

            setUser({
                name: e.name,
                password: e.password
            })

            window.localStorage.setItem('UserName', e.name);
            window.localStorage.setItem('isLogged', true);
        

    }
    const logOut = () => {
        const isLogged = window.localStorage.getItem('isLogged')
        
        if (isLogged === 'true') {
            window.localStorage.removeItem('UserName');
            window.localStorage.removeItem('isLogged');
            setUser(null)
        }
        else {
            alert("No hay usuario para cerrar sesion")
        }
    }

    return <UserContext.Provider value={{ User , changueUser,logOut }}>
        {children}
    </UserContext.Provider>
}