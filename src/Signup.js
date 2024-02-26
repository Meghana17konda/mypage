import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './SignupValidation'
import axios from 'axios'

function Signup() {
    const [values,setValues]=useState({
        name:'',
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
        if(errors.name==="" && errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/signup',values)
            .then(res=> {
                navigate('/');
            })
            .catch(err=>console.log(err));        
        }
    }

  return (
    <div className='signup'>
        <div className='signup-card'>
        <h2>Sign-Up</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor="Name"><strong>Name</strong></label>
                    <input type="text" placeholder='Enter Name' name='name'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
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
                <button className='btn-1 w-100 rounded-0'><strong>Sign Up</strong></button>
                <p>Already have an account??</p>
                <Link to="/login" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Login</Link>

            </form>
        </div>
    </div>
  )
}

export default Signup