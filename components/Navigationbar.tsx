import { useContext } from "react"
import { LoginContext } from "./LoginContext"
import styles from "../styles/Navigationbar.module.scss"

export default function Navigationbar() {
    const { logout } = useContext(LoginContext)

    function handleLogout() {
        logout()
    }

    return (<>
     <nav className={styles.nav}>
        <div>
            <h1>feature-voter</h1>
        </div>
        <div>

        </div>
        <div>
            <input type="button" value="Logout" onClick={handleLogout}/>
        </div>
     </nav>
    </>)
}