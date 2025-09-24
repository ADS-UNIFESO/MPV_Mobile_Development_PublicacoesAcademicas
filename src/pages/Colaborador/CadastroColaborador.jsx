import React, { useState } from "react";
import MenuSuperior from "components/MenuSuperior";
import styles from "./styles.module.css";

export default function CadastroColaborador() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula cadastro
    setSucesso(true);
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <>
      <MenuSuperior />
      <div className={styles.container} style={{marginTop: '80px'}}>
        <h2 style={{color: '#006b64', textAlign: 'center', fontWeight: 'bold'}}>Cadastro de Colaborador</h2>
        <form onSubmit={handleSubmit} className={styles.form} style={{maxWidth: '400px', margin: '0 auto', background: '#f6f6f6', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
          <label>Nome:<br />
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} required style={{width: '100%', marginBottom: '12px'}} />
          </label>
          <label>Email:<br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{width: '100%', marginBottom: '12px'}} />
          </label>
          <label>Senha:<br />
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required style={{width: '100%', marginBottom: '12px'}} />
          </label>
          <button type="submit" style={{background: '#006b64', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '4px', padding: '10px 24px', cursor: 'pointer'}}>Cadastrar</button>
        </form>
        {sucesso && <p style={{color: '#008F85', textAlign: 'center', marginTop: '16px'}}>Colaborador cadastrado com sucesso!</p>}
      </div>
    </>
  );
}
