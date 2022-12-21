import { useContext } from "react"
import { LoginContext } from "./LoginContext"

export default function Navigationbar() {
    const { logout } = useContext(LoginContext)

    function handleLogout() {
        logout()
    }

    return (<>
     <nav>
        <div>
            
        </div>
        <div>

        </div>
        <div>
            <input type="button" value="Logout" onClick={handleLogout}/>
        </div>
     </nav>
    </>)
}