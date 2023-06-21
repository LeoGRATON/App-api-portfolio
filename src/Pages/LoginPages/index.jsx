import Button from "../../Components/UI/Button"
import { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function LoginPages() {

    const navigate = useNavigate();
    const { login, user } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  useEffect(() => {
    if (user.token) {
      navigate('/');
    }
  }, [user.token, navigate]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post('http://localhost:3002/login', {
        email,
        password
      })
        .then(response => {
          const token = response.data.token;
          login(email, password);
          navigate('/');
        })
        .catch(error => {
          setError('Erreur lors de l\'authentification. Veuillez vérifier vos identifiants.');
          console.error('Erreur lors de la récupération du token:', error);
        });
    };

  return (
    <div className="div-login">
      <form className='form-login' onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail :</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password :</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" className="btn-login">
            Login
          </Button>
      </form>
    </div>
  )
}

export default LoginPages
