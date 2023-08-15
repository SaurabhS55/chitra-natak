import React from 'react'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/app_logo.png'
import { auth, provider } from '../../config'
import { signInWithPopup } from '@firebase/auth'
const Login = () => {
  const [user, setUser] = React.useState(null)
  const navigate = useNavigate()
  const signIn = () => {
    signInWithPopup(auth,provider).then((result) => {
      setUser(result.user.email)
      localStorage.setItem('user', JSON.stringify(result.user.email))
    }).catch((error) => {
      alert(error.message)
    })
  }
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      setUser(user)
    }
  }, [])

  const loginpage=(
    <div className={classes.login_container}>
    <div className={classes.login}>
      <div className={classes.login_head}>
        <img src={logo} alt="#" />
        <h1>Login</h1>
      </div>
      <div className={classes.login_body}>
        <button onClick={signIn}>Continue with Google</button>
      </div>
    </div>
  </div>)
  return (
    (user)?navigate('/'):loginpage
  )
}

export default Login