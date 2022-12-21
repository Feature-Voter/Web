import { useContext, useReducer, useState } from 'react'
import styles from '../styles/LoginForm.module.scss'
import { LoginContext } from './LoginContext'

function LoginForm() {
  const [userName, setUserName] = useState('')
  const [userPassword, setPassword] = useState('')
  const [loginError, setLoginError] = useState<number | null>(null);
  const [seePassword, setSeePassword] = useState(false)
  const { login } = useContext(LoginContext)

  function sendUserLogin(userName: String, password: String) {
    const data = JSON.stringify({userName: userName, password: userPassword})
    fetch('/api/login', {body: data, method: 'POST'})
      .then((res) => {
        if (res.status == 200) {
          return res
        }
        return Promise.reject(res.status)
      })
      .then((res) => res.json())
      .then((data) => {
        login()
        setLoginError(null)
      })
      .catch((err) => {
        console.log(err)
        setLoginError(err)
      })
  }

  function handleSubmit(){
    sendUserLogin(userName, userPassword)
  }

  function handleSeePassword() {
    setSeePassword(!seePassword)
  }

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      <h1>Anmelden</h1>
      <div className={styles.Center}>
        <input type="text" value={userName} placeholder="user name" onChange={ e => setUserName(e.target.value)} />
        <input type="password" value={userPassword} placeholder="password" onChange={ e => setPassword(e.target.value)} />
        <input type="button" value="see" className={styles.seeButton} onClick={handleSeePassword}/>
        {
          seePassword ? <span>{userPassword}</span> : null
         }
      </div>
      <div className={styles.Bottom}>
        <input type="button" value="Submit" className={styles.button} onClick={handleSubmit}/>
        <div className={styles.Error}>
          {loginError ? ( <>Error: {loginError}</>) : (<></>)}
        </div>
      </div>
    </form>
  )
}

export default LoginForm