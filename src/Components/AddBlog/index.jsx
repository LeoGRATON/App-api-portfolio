import React, { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

function AddBlog() {
  const [blogs, setBlogs] = useState({
    titre: '',
    text: '',
    category: '',
    author: 'Leo GRATON',
    date_creation: '',
    img_ref: '',
  });
  const { getAuthorizationHeader } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogs({ ...blogs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://api-portfolio-app.leo-graton.fr/blogs', blogs, getAuthorizationHeader())
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2>Ajouter une nouvelle article</h2>
      <label>
        Titre :(Nom du client et aucun espace)**
        <input type="text" name="titre" value={blogs.titre} onChange={handleChange} required/>
      </label>
      <label>
        Text :
        <textarea className='textarea' name="text" value={blogs.text} onChange={handleChange} required/>
      </label>
      <label>
        Image Référence :
        <input type="text" name="img_ref" value={blogs.img_ref} onChange={handleChange}/>
      </label>
      <label>
        Category :
        <select
            name="category"
            value={blogs.category}
            onChange={handleChange} required>
                <option value="">-- Sélectionner une catégorie --</option>
                <option value="UI Design">UI Design</option>
                <option value="UX Design">UX Design</option>
                <option value="React.js">React.js</option>
                <option value="Next.js">Next.js</option>
        </select>
      </label>

      <button className='btn-envoyer' type="submit">Ajouter l'article</button>
    </form>
  );
}

export default AddBlog;