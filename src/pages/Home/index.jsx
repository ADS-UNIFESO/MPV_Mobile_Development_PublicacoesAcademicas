import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <img src="https://www.unifeso.edu.br/editora/images/logo.png" alt="Editora Unifeso" className={styles.logo} />
          <h1 className={styles.title}>Editora UNIFESO</h1>
          <p className={styles.description}>
            O portal busca ampliar o alcance da produção do conhecimento científico, tecnológico e de inovação gerada no UNIFESO, além de promover o intercâmbio entre instituições parceiras por meio de revistas eletrônicas publicadas periodicamente.
          </p>
          <section className={styles.section}>
            <div className={styles.card}>
              <img src="https://www.unifeso.edu.br/editora/images/periodicos.jpg" alt="Periódicos" />
              <h3>Periódicos</h3>
              <p>Revistas eletrônicas publicadas periodicamente.</p>
              <a href="https://www.unifeso.edu.br/editora/conteudo.php?c=periodicos" target="_blank" rel="noopener noreferrer">Saiba mais</a>
            </div>
            <div className={styles.card}>
              <img src="https://www.unifeso.edu.br/editora/images/ANAIS.jpg" alt="Anais" />
              <h3>Anais</h3>
              <p>Difusão dos trabalhos apresentados em eventos acadêmicos-científicos.</p>
              <a href="https://www.unifeso.edu.br/editora/conteudo.php?c=anais" target="_blank" rel="noopener noreferrer">Saiba mais</a>
            </div>
            <div className={styles.card}>
              <img src="https://www.unifeso.edu.br/editora/images/SERIES.jpg" alt="Séries" />
              <h3>Séries</h3>
              <p>Difusão da produção acadêmica dos cursos de graduação e pós-graduação.</p>
              <a href="https://www.unifeso.edu.br/editora/categorias.php" target="_blank" rel="noopener noreferrer">Saiba mais</a>
            </div>
          </section>
          <h2 className={styles.sectionTitle}>Lançamentos</h2>
          <section className={styles.section}>
            <div className={styles.card}>
              <img src="https://www.unifeso.edu.br/editora/images/revistas/b901f9c5198dfe51432e142f04379887.png" alt="AdmirAves II" />
              <h3>AdmirAves II</h3>
              <p>Organizador(es): Flávio Luiz de Castro Jesus e Verônica Santos Albuquerque<br />ISBN: 978-65-01-08749-8</p>
              <a href="https://unifeso.edu.br/editora/pdf/24f7a10776fb52fe878912796162915a.pdf" target="_blank" rel="noopener noreferrer">Baixar</a>
            </div>
            <div className={styles.card}>
              <img src="https://www.unifeso.edu.br/editora/images/revistas/premio_unifeso_2025.png" alt="Prêmio de Produção Acadêmica 2025" />
              <h3>Prêmio de Produção Acadêmica 2025</h3>
              <p>Editora UNIFESO<br />ISBN: 978-65-87357-70-6<br />N° de páginas: 108</p>
              <a href="https://www.unifeso.edu.br/editora/pdf/96329500b2ecdaa0e1982a8ed8680d62.pdf" target="_blank" rel="noopener noreferrer">Baixar</a>
            </div>
            <div className={styles.card}>
              <img src="https.unifeso.edu.br/editora/images/revistas/d47384caf6c084c8de50740b2f0eaf58.png" alt="Introdução à Economia e Economia Política" />
              <h3>Introdução à Economia e Economia Política</h3>
              <p>Autor: Jucimar André Secchin<br />ISBN: 978-65-87357-68-3<br />N° de páginas: 79</p>
              <a href="https://www.unifeso.edu.br/editora/pdf/a6385147b28da8838f41824451dffb3c.pdf" target="_blank" rel="noopener noreferrer">Acessar</a>
            </div>
          </section>
          <h2 className={styles.sectionTitle}>Publicações Populares</h2>
          <section className={styles.section}>
            <div className={styles.card}>
              <img src="https://www.unifeso.edu.br/editora/images/revistas/63ea5ff797bdf3b18911d62b6d232fc4.png" alt="Publicação Popular" />
              <h3>Parque Municipal Natural Montanhas de Teresópolis</h3>
              <p>Organizador(es): Flávio Luiz de Castro Jesus e Verônica Santos Albuquerque<br />ISBN: 978-85-93361-36-4</p>
              <a href="http://unifeso.edu.br/uploads/Livro-Parque_Municipal_Natural_Montanhas_de_Teresopolis_13-08-19.pdf" target="_blank" rel="noopener noreferrer">Detalhes</a>
            </div>
          </section>
          <div className={styles.newsletter}>
            <h3>Cadastre-se e receba novidades</h3>
            <form>
              <input type="email" placeholder="Seu e-mail" aria-label="Endereço de e-mail para receber novidades" />
              <button type="submit" aria-label="Assinar newsletter">Assinar</button>
            </form>
          </div>
          <footer className={styles.footer}>
            UNIFESO © 2025 - Todos os direitos reservados<br />
            Desenvolvido por Blue Inteligência
          </footer>
        </div>
      </div>
    </>
  );
}