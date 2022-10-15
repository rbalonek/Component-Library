import React, {useState, useEffect} from 'react'
import BlankButton from '../../Buttons/BlankButton/BlankButton'
import "./PasswordLogin.css"

export default function PasswordLogin() {
  const [themeColor, setThemeColor] = useState("light")
  const [colorScheme, setColorScheme] = useState("password-login__card card-light")
  const [buttonColor, setButtonColor] = useState("btn__password-login btn-dark")
  const [seePassword, setSeePassword] = useState('password')
  const [isVisImg, SetIsVisImg] = useState("https://res.cloudinary.com/bobalobbadingdong/image/upload/v1665867900/Global%20Images/Eye_cfm479.png")

  useEffect(() => {
    if (themeColor === 'light') {
      setButtonColor("btn__password-login btn-light")
      setColorScheme("password-login__card card-light")
    }else if(themeColor === 'dark') {
      setButtonColor("btn__password-login btn-dark")
      setColorScheme("password-login__card card-dark")
    }else if(themeColor === 'blue') {
      setButtonColor("btn__password-login btn-blue")
      setColorScheme("password-login__card card-blue")
    }else if(themeColor === 'orange') {
      setButtonColor("btn__password-login btn-orange")
      setColorScheme("password-login__card card-orange")
    }
  }, [themeColor])

  const changeToLight = () => {
    setThemeColor('light')
  }
  const changeToBlue = () => {
    setThemeColor('blue')
  }
  const changeToDark = () => {
    setThemeColor('dark')
  }
  const changeToOrange = () => {
    setThemeColor('orange')
  }

  const passwordIsVis = () => {
    if (isVisImg === "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1665867900/Global%20Images/Eye_cfm479.png") {
      SetIsVisImg("https://res.cloudinary.com/bobalobbadingdong/image/upload/v1665867473/Global%20Images/Eye_mffqal.png")
      setSeePassword('text')
    } else {
      SetIsVisImg("https://res.cloudinary.com/bobalobbadingdong/image/upload/v1665867900/Global%20Images/Eye_cfm479.png")
      setSeePassword('password')
    }
  }

  return (
    <div className='password-login__container'>
      <div className={colorScheme}>
        <div className='password__card-content-holder'>
          <h2>Enter Password</h2>
          <div className='password__card-login-info' >
            <img className='password__card-avatar' alt="profile-pic" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1632612710/robertbalonek.com/Headshots/Headshot_ejamnv.jpg" />
            <div className='password__card-name-title'>
            <p className='password__card-title'>Software Engineer</p>
              <p className='password__card-name'>Bob Balonek</p>
            </div>
            </div>
            <form style={{display:'flex', flexDirection:'column'}}>
            <label style={{fontWeight:'600', fontSize:'x-small', marginBottom:'5px'}}>Password</label>
            <div style={{width:'100%', position:'relative', bottom:'10px'}}>
            <input type={seePassword} className="password__card-input" id="fname" name="fname"></input>
            <img onClick={passwordIsVis} style={{height:'20px',width:'20px', position:'relative', top:'5px', backgroundColor:'white', borderRadius:'50%', cursor:'pointer'}} alt="isVis" src={isVisImg}/> 
            </div>
          </form>
        </div>
        
        <div className='password__card-btn-holder'>
        <p className='password-login__reset'>Reset Password</p>
        <BlankButton
        name="Continue"
        className={buttonColor}
        />
        </div>
      </div>
      <div className='password__card-button-choice__holder'>
        <button className='color-change-btn' onClick={changeToLight}>Light</button>
        <button className='color-change-btn' onClick={changeToBlue}>Blue</button>
        <button className='color-change-btn' onClick={changeToOrange}>Orange</button>
        <button className='color-change-btn' onClick={changeToDark}>Dark</button>
      </div>
    </div>
  )
}
