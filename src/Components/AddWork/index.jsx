import React, { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function AddWork() {
  const [works, setWorks] = useState({
    titre: '',
    description: '',
    challenge: '',
    goal: '',
    result: '',
    img_maquette: '',
    img_ref: '',
    likes: 0,
    couleurs: {
        couleur1: {
            hex: '',
            nom: ''
        },
        couleur2: {
            hex: '',
            nom: ''
        },
        couleur3: {
            hex: '',
            nom: ''
        },
        couleur4: {
            hex: '',
            nom: ''
        }
    },
    typo1: '',
    typo2: '',
    timeline: '',
    url: '',
    website: '',
    category: '',
  });

  const { getAuthorizationHeader } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorks({ ...works, [name]: value });
  };

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    const color = { ...works.couleurs[name], hex: value };
    setWorks({
      ...works,
      couleurs: {
        ...works.couleurs,
        [name]: color,
      },
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://api-portfolio-app.leo-graton.fr/works', works, getAuthorizationHeader())
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2>Ajouter une nouvelle réalisation</h2>
      <label>
        Titre :(Nom du client et aucun espace)**
        <input type="text" name="titre" value={works.titre} onChange={handleChange} required/>
      </label>
      <label>
        Description :(Maximum 255 caractère)**
        <textarea className='textarea' name="description" value={works.description} onChange={handleChange} required/>
      </label>
      <label>
        Challenge :(Maximum 255 caractère)**
        <textarea className='textarea' name="challenge" value={works.challenge} onChange={handleChange} required/>
      </label>
      <label>
        Goal :(Maximum 255 caractère)**
        <textarea className='textarea' name="goal" value={works.goal} onChange={handleChange} required/>
      </label>
      <label>
        Result :(Maximum 255 caractère)**
        <textarea className='textarea' name="result" value={works.result} onChange={handleChange} required/>
      </label>
      <label>
        Image Maquette :
        <input type="text" name="img_maquette" value={works.img_maquette} onChange={handleChange}/>
      </label>
      <label>
        Image Référence :
        <input type="text" name="img_ref" value={works.img_ref} onChange={handleChange}/>
      </label>
      <label>
        Couleur 1:
        <label className='hex-color'>
        hex_couleur
        <input 
            type="text" 
            name="couleur1" 
            value={works.couleurs.couleur1.hex} 
            onChange={handleColorChange}
            required
        />
        </label>
        <label className='nom-color'>
        nom_couleur
        <input 
            type="text" 
            name="nom_couleur1" 
            value={works.couleurs.couleur1.nom} 
            onChange={(e) => setWorks({
                ...works,
                couleurs: {
                    ...works.couleurs,
                    couleur1: {
                        ...works.couleurs.couleur1,
                        nom: e.target.value
                    }
                 }
            })}
            required
        />
        </label>
        </label>

        <label>
        Couleur 2:
        <label className='hex-color'>
        hex_couleur
        <input 
            type="text" 
            name="couleur2" 
            value={works.couleurs.couleur2.hex} 
            onChange={handleColorChange}
            required
        />
        </label>
        <label className='nom-color'>
        nom_couleur
        <input 
            type="text" 
            name="nom_couleur2" 
            value={works.couleurs.couleur2.nom} 
            onChange={(e) => setWorks({
                ...works,
                couleurs: {
                    ...works.couleurs,
                    couleur2: {
                        ...works.couleurs.couleur2,
                        nom: e.target.value
                    }
                 }
            })}
            required
        />
        </label>
        </label>

        <label>
        Couleur 3:
        <label className='hex-color'>
        hex_couleur
        <input 
            type="text" 
            name="couleur3" 
            value={works.couleurs.couleur3.hex} 
            onChange={handleColorChange}
            required
        />
        </label>
        <label className='nom-color'>
        nom_couleur
        <input 
            type="text" 
            name="nom_couleur3" 
            value={works.couleurs.couleur3.nom} 
            onChange={(e) => setWorks({
                ...works,
                couleurs: {
                    ...works.couleurs,
                    couleur3: {
                        ...works.couleurs.couleur3,
                        nom: e.target.value
                    }
                 }
            })}
            required
        />
        </label>
        </label>

        <label>
        Couleur 4:
        <label className='hex-color'>
        hex_couleur
        <input 
            type="text" 
            name="couleur4" 
            value={works.couleurs.couleur4.hex} 
            onChange={handleColorChange}
            required
        />
        </label>
        <label className='nom-color'>
        nom_couleur
        <input 
            type="text" 
            name="nom_couleur3" 
            value={works.couleurs.couleur4.nom} 
            onChange={(e) => setWorks({
                ...works,
                couleurs: {
                    ...works.couleurs,
                    couleur4: {
                        ...works.couleurs.couleur4,
                        nom: e.target.value
                    }
                 }
            })}
            required
        />
        </label>
        </label>

      <label>
        Typo1 :
        <input type="text" name="typo1" value={works.typo1} onChange={handleChange} required/>
      </label>
      <label>
        Typo2 :
        <input type="text" name="typo2" value={works.typo2} onChange={handleChange} required/>
      </label>
      <label>
        Timeline :
        <select
            name="timeline"
            value={works.timeline}
            onChange={handleChange} required>
                <option value="">-- Sélectionner une durée --</option>
                <option value="1semaine">1 Semaine</option>
                <option value="2semaine">2 semaines</option>
                <option value="3semaine">3 semaines</option>
                <option value="1mois">1 mois</option>
                <option value="2mois">2 mois</option>
                <option value="3mois">3 mois</option>
                <option value="4mois">4 mois</option>
                <option value="5mois">5 mois</option>
                <option value="6mois">6 mois</option>
        </select>
      </label>
      <label>
        url :
        <input type="text" name="url" value={works.url} onChange={handleChange} required/>
      </label>
      <label>
        Website :
        <input type="text" name="website" value={works.website} onChange={handleChange} required/>
      </label>
      <label>
        Category :
        <select
            name="category"
            value={works.category}
            onChange={handleChange} required>
                <option value="">-- Sélectionner une catégorie --</option>
                <option value="UX design">UX Design</option>
                <option value="UI design">UI Design</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value="Wordpress">Wordpress</option>
        </select>
      </label>

      <button className='btn-envoyer' type="submit">Ajouter ma réalisation</button>
    </form>
  );
}

export default AddWork;