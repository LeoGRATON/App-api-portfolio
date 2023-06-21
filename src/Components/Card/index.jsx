import axios from "axios";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";

import Button from "../UI/Button";

import '../../styles/index.scss'

function Card() {

  const [works, setWorks] = useState([]);
  const { getAuthorizationHeader } = useContext(UserContext);

  useEffect(() => {
    axios.get('https://api-portfolio-app.leo-graton.fr/works')
      .then(response => {
        setWorks(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://api-portfolio-app.leo-graton.fr/works/${id}`, getAuthorizationHeader())
      .then(response => {
        console.log(response);
        // Mettre à jour la liste des réalisations après la suppression
        setWorks(works.filter(work => work.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="dashboard">
    <h2>Listes des réalisations</h2>
    <div className="cards">
      {works.map(work => (
        <div className='card' key={work.id}>
        <h3>{work.titre}</h3>
        <p>Description du projet : {work.description.substring(0,100)}</p>
        <p>Nombre de likes : {work.likes}</p>
        <p>Categorie : {work.category}</p>
        <Button className='btn-trash' children="Supprimer" onClick={() => handleDelete(work.id)}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Card
