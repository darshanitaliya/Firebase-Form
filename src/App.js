import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter ,Routes, Route,Navigate} from 'react-router-dom'

import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Container,Row,Col } from 'react-bootstrap';
import { auth } from './firebase';

function App() {
  // const user=auth.currentUser;
  // const user=useUserAuth();
  // const [user,setUser]=useState();
  console.log('App',auth.currentUser)
  
//   useEffect(()=>{
//     const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
//         if(currentUser) setUser(currentUser)
//     });
//     return ()=>unsubscribe();
// },[]);

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col> 
          <UserAuthContextProvider>
            <Routes>
              <Route path='/' element={<Navigate to='/home'/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/singup' element={<Signup/>}/>
              <Route path='/home' element={<Home/>}/>
            </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;