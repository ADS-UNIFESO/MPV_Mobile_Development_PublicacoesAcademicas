import React from "react";
import { Link } from "react-router-dom";
import MenuSuperior from "components/MenuSuperior";

export default function Home() {
  return (
    <>
      <MenuSuperior />
      <div style={{ marginTop: '80px', background: '#f6f6f6', minHeight: '100vh', paddingBottom: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
          <img src="https://www.unifeso.edu.br/editora/images/logo.png" alt="Editora Unifeso" style={{ width: '220px', marginBottom: '24px' }} />
          <h1 style={{ color: '#006b64', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '16px' }}>Editora UNIFESO</h1>
          <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '32px' }}>
            O portal busca ampliar o alcance da produção do conhecimento científico, tecnológico e de inovação gerada no UNIFESO, além de promover o intercâmbio entre instituições parceiras por meio de revistas eletrônicas publicadas periodicamente.
          </p>
          <section style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 320px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px' }}>
              <img src="https://www.unifeso.edu.br/editora/images/periodicos.jpg" alt="Periódicos" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
              <h2 style={{ color: '#006b64', fontWeight: 'bold', fontSize: '1.5rem' }}>Periódicos</h2>
              <p style={{ marginBottom: '8px' }}>Revistas eletrônicas publicadas periodicamente.</p>
              <a href="https://www.unifeso.edu.br/editora/conteudo.php?c=periodicos" target="_blank" rel="noopener noreferrer" style={{ color: '#008F85', fontWeight: 'bold' }}>Saiba mais</a>
            </div>
            <div style={{ flex: '1 1 320px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px' }}>
              <img src="https://www.unifeso.edu.br/editora/images/ANAIS.jpg" alt="Anais" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
              <h2 style={{ color: '#006b64', fontWeight: 'bold', fontSize: '1.5rem' }}>Anais</h2>
              <p style={{ marginBottom: '8px' }}>Difusão dos trabalhos apresentados em eventos acadêmicos-científicos.</p>
              <a href="https://www.unifeso.edu.br/editora/conteudo.php?c=anais" target="_blank" rel="noopener noreferrer" style={{ color: '#008F85', fontWeight: 'bold' }}>Saiba mais</a>
            </div>
            <div style={{ flex: '1 1 320px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px' }}>
              <img src="https://www.unifeso.edu.br/editora/images/SERIES.jpg" alt="Séries" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
              <h2 style={{ color: '#006b64', fontWeight: 'bold', fontSize: '1.5rem' }}>Séries</h2>
              <p style={{ marginBottom: '8px' }}>Difusão da produção acadêmica dos cursos de graduação e pós-graduação.</p>
              <a href="https://www.unifeso.edu.br/editora/categorias.php" target="_blank" rel="noopener noreferrer" style={{ color: '#008F85', fontWeight: 'bold' }}>Saiba mais</a>
            </div>
          </section>
          <h2 style={{ color: '#006b64', fontWeight: 'bold', fontSize: '2rem', marginBottom: '24px' }}>Lançamentos</h2>
          <section style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 320px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px' }}>
              <img src="https://www.unifeso.edu.br/editora/images/revistas/b901f9c5198dfe51432e142f04379887.png" alt="AdmirAves II" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
              <h3 style={{ color: '#008F85', fontWeight: 'bold', fontSize: '1.2rem' }}>AdmirAves II</h3>
              <p>Organizador(es): Flávio Luiz de Castro Jesus e Verônica Santos Albuquerque<br />ISBN: 978-65-01-08749-8</p>
              <a href="https://unifeso.edu.br/editora/pdf/24f7a10776fb52fe878912796162915a.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#008F85', fontWeight: 'bold' }}>Baixar</a>
            </div>
            <div style={{ flex: '1 1 320px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px' }}>
              <img src="https://www.unifeso.edu.br/editora/images/revistas/premio_unifeso_2025.png" alt="Prêmio de Produção Acadêmica 2025" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
              <h3 style={{ color: '#008F85', fontWeight: 'bold', fontSize: '1.2rem' }}>Prêmio de Produção Acadêmica 2025</h3>
              <p>Editora UNIFESO<br />ISBN: 978-65-87357-70-6<br />N° de páginas: 108</p>
              <a href="https://www.unifeso.edu.br/editora/pdf/96329500b2ecdaa0e1982a8ed8680d62.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#008F85', fontWeight: 'bold' }}>Baixar</a>
            </div>
            <div style={{ flex: '1 1 320px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px' }}>
              <img src="https://www.unifeso.edu.br/editora/images/revistas/d47384caf6c084c8de50740b2f0eaf58.png" alt="Introdução à Economia e Economia Política" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
              <h3 style={{ color: '#008F85', fontWeight: 'bold', fontSize: '1.2rem' }}>Introdução à Economia e Economia Política</h3>
              <p>Autor: Jucimar André Secchin<br />ISBN: 978-65-87357-68-3<br />N° de páginas: 79</p>
              <a href="https://www.unifeso.edu.br/editora/pdf/a6385147b28da8838f41824451dffb3c.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#008F85', fontWeight: 'bold' }}>Acessar</a>
            </div>
          </section>
          <h2 style={{ color: '#006b64', fontWeight: 'bold', fontSize: '2rem', marginBottom: '24px' }}>Publicações Populares</h2>
          <section style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 320px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '24px' }}>
              <img src="https://www.unifeso.edu.br/editora/images/revistas/63ea5ff797bdf3b18911d62b6d232fc4.png" alt="Publicação Popular" style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
              <h3 style={{ color: '#008F85', fontWeight: 'bold', fontSize: '1.2rem' }}>Parque Municipal Natural Montanhas de Teresópolis</h3>
              <p>Organizador(es): Flávio Luiz de Castro Jesus e Verônica Santos Albuquerque<br />ISBN: 978-85-93361-36-4</p>
              <a href="http://unifeso.edu.br/uploads/Livro-Parque_Municipal_Natural_Montanhas_de_Teresopolis_13-08-19.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#008F85', fontWeight: 'bold' }}>Detalhes</a>
            </div>
          </section>
          <div style={{ background: '#e0f7f5', borderRadius: '8px', padding: '24px', marginBottom: '32px', textAlign: 'center' }}>
            <h3 style={{ color: '#006b64', fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '8px' }}>Cadastre-se e receba novidades</h3>
            <input type="email" placeholder="Seu e-mail" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '8px', fontSize: '1rem' }} />
            <button style={{ background: '#006b64', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '4px', padding: '10px 24px', cursor: 'pointer' }}>Assinar</button>
          </div>
          <footer style={{ textAlign: 'center', color: '#888', fontSize: '0.95rem', marginTop: '32px' }}>
            UNIFESO © 2025 - Todos os direitos reservados<br />
            Desenvolvido por Blue Inteligência
          </footer>
        </div>
      </div>
    </>
  );
}
