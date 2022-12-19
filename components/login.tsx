import { useReducer, useState } from 'react'
import styles from '../styles/LoginForm.module.scss'

function LoginForm() {
  const [userName, setUserName] = useState('')
  const [userPassword, setPassword] = useState('')

  function handleSubmit(){

  }

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      <h1>Anmelden</h1>
      <div className={styles.Center}>
        <input type="text" value={userName} placeholder="user name" onChange={ e => setUserName(e.target.value)} />
        <input type="text" value={userPassword} placeholder="password" onChange={ e => setPassword(e.target.value)} />
      </div>
      <div className={styles.Bottom}>
        <input type="button" value="Submit" className={styles.button} />
      </div>
    </form>
  )
}

export default LoginForm