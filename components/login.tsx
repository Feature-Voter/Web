import { useReducer, useState } from 'react'
import styles from '../styles/LoginForm.module.scss'

function LoginForm() {
  const [userName, setUserName] = useState('')
  const [userPassword, setPassword] = useState('')

  function handleSubmit(){
    const data = JSON.stringify({userName: userName, password: userPassword})
    fetch('/api/login', {body: data, method: 'POST'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      <h1>Anmelden</h1>
      <div className={styles.Center}>
        <input type="text" value={userName} placeholder="user name" onChange={ e => setUserName(e.target.value)} />
        <input type="text" value={userPassword} placeholder="password" onChange={ e => setPassword(e.target.value)} />
      </div>
      <div className={styles.Bottom}>
        <input type="button" value="Submit" className={styles.button} onClick={handleSubmit}/>
      </div>
    </form>
  )
}

export default LoginForm