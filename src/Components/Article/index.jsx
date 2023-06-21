import axios from "axios";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";

import Button from "../UI/Button";

import '../../styles/index.scss'

function Article() {

  const [blogs, setBlogs] = useState([]);
  const {getAuthorizationHeader } = useContext(UserContext);

  useEffect(() => {
    axios.get('https://api-portfolio-app.leo-graton.fr/blogs')
      .then(response => {
        setBlogs(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://api-portfolio-app.leo-graton.fr/blogs/${id}`, getAuthorizationHeader())
      .then(response => {
        console.log(response);
        // Mettre à jour la liste des réalisations après la suppression
        setBlogs(blogs.filter(blog => blog.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="dashboard">
    <h2>Listes des Articles</h2>
    <div className="cards">
      {blogs.map(blog => (
        <div className='card' key={blog.id}>
        <h3>{blog.titre}</h3>
        <p>Text : {blog.text.substring(0,100)}</p>
        <p>Author : {blog.author}</p>
        <p>Categorie : {blog.category}</p>
        <Button className='btn-trash' children="Supprimer" onClick={() => handleDelete(blog.id)}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Article
