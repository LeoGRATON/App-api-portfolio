import './styles/index.scss'
import Card from './Components/Card';
import Button from './Components/UI/Button';
import Article from './Components/Article';
import UserContext from "./context/UserContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

function App() {

  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    window.location = '/login'; // Rediriger l'utilisateur vers la page de connexion après la déconnexion
  };

  if(!user.token) {window.location = '/login'}

  return (
    <div>
      <div className='div-home-api'>
      <h1>API Portfolio</h1>
      <Button className='btn-trash' children='Deconnexion' onClick={handleLogout}/>
      </div>
      <Link to='/addrealisation'>
      <Button className='btn-add' children='Ajouter une réalisation'/>
      </Link>
      <Link to='/addarticle'>
      <Button className='btn-add-artcile' children='Ajouter un article'/>
      </Link>
      <Card/>
      <Article/>
    </div>
  )
}

export default App
