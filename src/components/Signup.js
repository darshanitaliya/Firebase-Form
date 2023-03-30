import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Alert, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
// import { useUserAuth } from '../context/UserAuthContext';
import { auth } from "../firebase";

import {createUserWithEmailAndPassword} from 'firebase/auth'


function Signup() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    // const [name,setName]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const handleSubmit=async e=>{
        e.preventDefault();
        setError('')
        try{
            await createUserWithEmailAndPassword(auth, email,password)
            navigate('/login')
        }catch(err){
            setError(err.message)
        }
    }
  return (
    <>
        <div className='p-4 box'>
            {error && <Alert variant='danger'>{error}</Alert>}
            <h2 className='mb-4 text-center'>Sing Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
{/* 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" pattern='^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}' onChange={e=>setPassword(e.target.value)}/>
                    <Form.Text className="text-muted">
                Password should be 8-20 characters and include at least 1 letter,1 number and 1 special character!
                </Form.Text>
                </Form.Group>
                
                <div className='d-grid gap-2'>
                    <Button variant="primary" type="submit">
                        Sing up
                    </Button>
                </div>
            </Form>
        </div>
        <hr />
        <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to='/'> Log in </Link>
        </div>
    </>
  )
}

export default Signup