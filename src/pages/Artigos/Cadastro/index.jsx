import React, { useState } from "react";
import styles from "./styles.module.css";


export default function CadastroArtigo() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [resumo, setResumo] = useState("");
  const [arquivo, setArquivo] = useState(null);
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMensagem("Artigo cadastrado com sucesso!");
    setTitulo("");
    setAutor("");
    setResumo("");
    setArquivo(null);
  }

  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Cadastro de Novo Artigo</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Título:
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </label>
            <label>
              Autor:
              <input
                type="text"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                required
              />
            </label>
            <label>
              Resumo:
              <textarea
                value={resumo}
                onChange={(e) => setResumo(e.target.value)}
                required
              />
            </label>
            <label>
              Arquivo:
              <input
                type="file"
                onChange={(e) => setArquivo(e.target.files[0])}
              />
            </label>
            <button type="submit">Cadastrar Artigo</button>
          </form>
          {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
        </div>
      </div>
    </>
  );
}