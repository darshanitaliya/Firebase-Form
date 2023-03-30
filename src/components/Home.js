import React from 'react'
import { Button } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {Spinner} from 'react-bootstrap';

function Home() {
    const {user} =useUserAuth();
    const navigate=useNavigate();
    // const user=auth.currentUser
    console.log('Home',user)

    const handleLogout=async()=>{
        try{
            await signOut(auth);
            navigate('/login')
        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(() => {
        if(user === null || user === undefined){
          navigate("/login")
        }
      }, [user,navigate]);
        return (
            <>
            <div className='p-4 box mt-3 text-center'>Hello Welcome <br />
            {user?
            user.email:
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
            </div>
            <hr />
            <div className='d-grid gap-2'>
                <Button variant='primary' onClick={handleLogout}>Log out</Button>
            </div>
        </>
            
        )
      
}

export default Home