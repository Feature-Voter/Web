import { useContext } from "react"
import { LoginContext } from "./LoginContext"

export default function Navigationbar() {
    const { logout } = useContext(LoginContext)

    function handleLogout() {
        logout()
    }

    return (<>
     <input type="button" value="Logout" onClick={handleLogout}/>
    </>)
}