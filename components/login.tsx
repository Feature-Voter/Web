import styles from '../styles/LoginForm.module.scss'

function LoginForm() {
  function handleSubmit(){

  }

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      {/* <input type="text" value={this.state.value} onChange={this.handleChange} />-c */}
    </form>
  )
}

export default LoginForm