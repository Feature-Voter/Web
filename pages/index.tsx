import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import LoginForm from '../components/login'
import { LoginProvider } from '../components/LoginContext'
import SecureComponent, {UnsecureComponent} from '../components/SecureComponent'
import Navigationbar from '../components/Navigationbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>test </h1>
        <LoginProvider>
          <UnsecureComponent>
            <LoginForm />
          </UnsecureComponent>
          <SecureComponent>
            <Navigationbar />
            <h2>test</h2>
          </SecureComponent>
        </LoginProvider>
      </main>
    </>
  )
}
