import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export default function MenuSuperior() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/ultimos-artigos">Últimos Artigos</Link></li>
        <li><Link to="/todos-artigos">Todos os Artigos</Link></li>
        <li><Link to="/cadastro-artigo">Cadastrar Artigo</Link></li>
        <li><Link to="/cadastro-colaborador">Cadastro Colaborador</Link></li>
        <li>
          <button
            onClick={() => window.location.href = '/login'}
            style={{ background: '#008F85', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '4px', padding: '8px 18px', cursor: 'pointer', fontSize: '1rem' }}
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
}
