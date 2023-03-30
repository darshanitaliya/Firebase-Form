import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Form,Alert} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { auth } from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const handleSubmit= async e=>{
        e.preventDefault();
        setError('')
        try{
            await signInWithEmailAndPassword(auth,email,password);
            navigate('/home')
        }catch(err){
            setError(err.message)
        }
    }
  return (
    <>
        <div className='p-4 box'>
            {error && <Alert variant='danger'>{error}</Alert>}
            <h2 className='mb-4 text-center'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <div className='d-grid gap-2'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
        <hr />
        <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to='/singup'> Sign up </Link>
        </div>
    </>
  )
}

export default Login