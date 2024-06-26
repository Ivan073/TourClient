
import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import { Card } from 'react-materialize';
  
function Login() { 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const history = useNavigate(); 

    function setToken(token) {
        localStorage.setItem('jwt', token);
      //  document.cookie = `token=${token}; HttpOnly; Secure; SameSite=Strict`;
      }
  
    const handleLogin = async () => { 
        try { 
            if (!username || !password) { 
                setError('Please enter both username and password.'); 
                return; 
            } 
  
            const response = await axios.post('http://localhost:8080/auth/signin', { username, password }); 
            setToken(response.data.jwt);
            console.log('jwt:' +response.data.jwt);
            console.log('Login successful:', response.data); 
            history('/dashboard'); 
        } catch (error) { 
            console.error('Login failed:', error.response ? error.response.data : error.message); 
            setError('Invalid username or password.'); 
        } 
    }; 
  
    return ( 
        <div className="d-flex justify-content-center align-items-center vh-100"> 
            <div className="border rounded-lg p-4" style={{ width: '500px', height: 'auto' }}> 
                <Card className="p-3"> 
                    <h2 className="mb-4 text-center">Login Page</h2> 
                    <input wrapperClass='mb-4' placeholder='Логин' id='email' value={username} type='text' onChange={(e) => setUsername(e.target.value)} /> 
                    <input wrapperClass='mb-4' placeholder='Пароль' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                    {error && <p className="text-danger">{error}</p>}
                    <button className="mb-4 d-block btn-primary" style={{ height:'50px',width: '100%' }} onClick={handleLogin}>Sign in</button> 
                    <div className="text-center"> 
                        <p>Not a member? <a href="/signup" >Register</a></p> 
                    </div> 
                </Card> 
            </div> 
        </div> 
    ); 
} 
  
export default Login; 