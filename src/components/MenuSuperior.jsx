import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import { useAuth } from '../auth/AuthContext';
export default function MenuSuperior() {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <nav className={styles.menu}>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={open ? styles.open : ''}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/ultimos-artigos">Últimos Artigos</Link></li>
        <li><Link to="/todos-artigos">Todos os Artigos</Link></li>
        <li><Link to="/cadastro-artigo">Cadastrar Artigo</Link></li>
        <li><Link to="/cadastro-colaborador">Cadastro Colaborador</Link></li>
        <li>
          <button
            onClick={handleLogout}
            style={{ background: '#008F85', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '4px', padding: '8px 18px', cursor: 'pointer', fontSize: '1rem' }}
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
}