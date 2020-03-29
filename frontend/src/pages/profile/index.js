import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImage from "../../assets/logo.svg";

export default function Profile() {
  const ongName = localStorage.getItem("ongName");

  return (
    <div className="profile-content">
      <header>
        <img src={logoImage} alt="logoImage" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041"></FiPower>
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
      </ul>
    </div>
  );
}
