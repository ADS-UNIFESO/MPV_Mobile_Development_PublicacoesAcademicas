import React, { useState } from "react";
import MenuSuperior from "../../components/MenuSuperior";
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
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Cadastro de Colaborador</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Nome:<br />
              <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
            </label>
            <label>Email:<br />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>
            <label>Senha:<br />
              <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
            </label>
            <button type="submit">Cadastrar</button>
          </form>
          {sucesso && <p className={styles.sucesso}>Colaborador cadastrado com sucesso!</p>}
        </div>
      </div>
    </>
  );
}
