import React, { useState, FC } from "react"

export const LoginContext = React.createContext<any>({} as any)

type Props = {
    children?: React.ReactNode
};

export const LoginProvider: FC<Props> = ({children}) => {
    const [user, setUser] = useState({ auth: false});

    const login = () => {
        setUser((user) => ({
            auth: true
        }));
    };

    const logout = () => {
        setUser((user) => ({
            auth: false
        }));
    };

    return (
        <LoginContext.Provider value={{user, login, logout }}>
            { children }
        </LoginContext.Provider>
    )
}