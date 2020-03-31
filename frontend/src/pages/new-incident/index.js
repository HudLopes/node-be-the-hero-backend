import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import logoImage from "../../assets/logo.svg";

export default function NewIncident() {
  const history = useHistory();

  // variaveis de formulario
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  //variaveis do storage
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const formulario = { title, description, value };
    try {
      await api.post('/incidents', formulario, { headers :{
        Authorization: ongId
      }});

      console.log('caiu aqui');

      history.push('/profile');
    } catch(err){
      alert('Não foi possivel cadastrar o incidente');
    }
  }

  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logoImage} alt="logoImage" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link " to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
            placeholder="Titulo do caso"
          ></input>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"
          ></textarea>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor em reais"
          ></input>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
