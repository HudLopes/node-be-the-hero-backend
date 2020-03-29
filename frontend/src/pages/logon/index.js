import React, {useState} from "react";
import "./style.css";
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";

import api from '../../services/api'

import heroesImage from "../../assets/heroes.png";
import logoImage from "../../assets/logo.svg";

export default function Logon() {
  const history = useHistory();
  const [id, setId] = useState('');

  async function handleLogin(e){
    e.preventDefault();

    try {
      const response = await api.post('/session', {id});
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.nome);

      history.push('/profile');
    } catch(err){
      alert('Falha no login');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="logo" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID"
          value={id} onChange={ e=> setId(e.target.value) }></input>


          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link "to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt="heroes" />
    </div>
  );
}
