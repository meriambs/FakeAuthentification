import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
    const [userNameL, setUserNameL] = useState('');
    const [passwordL, setPasswordL] = useState('');
//data fake data for users with email and password and any other details 
    const   usersL = [
        {id : 0, email : 'Mahmoud Zaouchi',photo : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',old : 27, adress : 'Mhamdia', password : '12345',gender : 'homme'},
        {id : 1, email : 'Iléne Slimene',photo : '/Ilene.jpg',old : 26, adress : 'Boumhal', password : '12345',gender : 'femme'},
        {id : 2, email : 'Achref Kamoun',photo : '/Achref.jpg',old : 26, adress : 'Mourouj', password : '12345',gender : 'homme'},
    ]


    const navigate =useNavigate()
    //the log fucntion it will putthe user we are login with via his email and verify if the password is the same , then navigate to the dashbord
    // if the  password is wrong it will show a message to the user
    const LogIn=()=>{
        
       const objF = usersL.find(el => el.email );
        if (objF.password === passwordL){navigate('/test')}else{alert('password incorrect')}
      
    }
  return (
    <div> <div>
 
    <div className="login">
        <div className="form">
          <form noValidate>
            <span>Login</span>

            <input
              type="email"
              name="email"
              placeholder="Enter email id / username"
              className="form-control inp_text"
              id="email"
              onChange={(e)=>setUserNameL(e.target.value)}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control"
              onChange={(e)=>setPasswordL(e.target.value)}
            />

            <button type="button" onClick={()=>LogIn()}>Login</button>
          </form>
        </div>
      </div>
  </div></div>
  )
}

export default Login

