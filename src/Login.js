import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './LoginValidation';
import validation from './LoginValidation';
import axios from 'axios'

function Login() {
    const [values,setValues]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate();

    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/signup',values)
            .then(res=> {
                if(res.data==="success")
                {
                    navigate('/');

                }
                else{
                    alert('No record existed')
                }
            })
            .catch(err=>console.log(err));        
        }
    }

    

  return (
    <div className='login'>
        <div className='login-card'>
        <h2>Log In</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn-1 w-100 rounded-0'><strong>Log in</strong></button>
                <p>Doesn't have an account?</p>
                <Link to="/signup" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Create Account</Link>

            </form>
        </div>
    </div>
  )
}

export default Login
