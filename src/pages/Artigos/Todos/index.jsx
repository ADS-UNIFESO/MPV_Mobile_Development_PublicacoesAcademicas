import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import MainBanner from "components/banners/Main";
import InfosBanner from "components/banners/Infos";
import MenuSuperior from "components/MenuSuperior";

// Lista dos periódicos reais
const periodicos = [
  {
    titulo: "Revista de Medicina Veterinária do Unifeso",
    descricao: "Divulga trabalhos importantes para o desenvolvimento de novos conhecimentos em Medicina Veterinária e áreas afins.",
    link: "https://revista.unifeso.edu.br/index.php/revistaveterinaria/issue/view/80"
  },
  {
    titulo: "Revista Pluralidades",
    descricao: "Publica estudos científicos sobre Direitos Humanos e áreas correlatas.",
    link: "https://revista.unifeso.edu.br/index.php/pluralidades/issue/archive"
  },
  {
    titulo: "UNIFESO - Humanas e Sociais",
    descricao: "Discussões e reflexões sobre o homem em sua atuação social e suas relações com a sociedade.",
    link: "https://revista.unifeso.edu.br/index.php/revistaunifesohumanasesociais/"
  },
  {
    titulo: "Revista da Faculdade de Medicina de Teresópolis",
    descricao: "Divulga trabalhos relevantes para o desenvolvimento de novos conhecimentos em Saúde e áreas afins.",
    link: "https://revista.unifeso.edu.br/index.php/faculdadedemedicinadeteresopolis/issue/current"
  },
  {
    titulo: "Cadernos da Medicina - UNIFESO",
    descricao: "Divulga trabalhos desenvolvidos pelos alunos do curso de Medicina do UNIFESO.",
    link: "https://revista.unifeso.edu.br/index.php/cadernosdemedicinaunifeso"
  },
  {
    titulo: "Revista Formação e Prática Docente",
    descricao: "Divulga pesquisas e experiências teórico-práticas dos Cursos de Licenciatura e PIBID.",
    link: "https://revista.unifeso.edu.br/index.php/revistaformacaoepraticaunifeso"
  },
  {
    titulo: "Cadernos de Direito - UNIFESO",
    descricao: "Publica trabalhos científicos dos docentes, discentes e colaboradores do Curso de Direito do UNIFESO.",
    link: "https://revista.unifeso.edu.br/index.php/cadernosdedireitounifeso"
  },
  {
    titulo: "Revista de Ciência, Tecnologia e Inovação",
    descricao: "Difunde conhecimento na área das Ciências Tecnológicas e Inovação.",
    link: "https://revista.unifeso.edu.br/index.php/revistacienciatecnologiainovacao"
  },
  {
    titulo: "Revista JOPIC UNIFESO",
    descricao: "Divulga pesquisas desenvolvidas por docentes, estudantes e técnicos administrativos do UNIFESO.",
    link: "https://revista.unifeso.edu.br/index.php/jopic/issue/current"
  },
  {
    titulo: "Revista de Medicina da Família e Saúde Mental",
    descricao: "Divulga trabalhos dos alunos do Nono Período de Medicina do UNIFESO em unidades básicas de saúde e saúde mental.",
    link: "https://revista.unifeso.edu.br/index.php/medicinafamiliasaudemental"
  },
  {
    titulo: "Cadernos de Odontologia",
    descricao: "Publica pesquisas de docentes, pesquisadores externos e alunos do curso de Odontologia do Unifeso.",
    link: "https://revista.unifeso.edu.br/index.php/cadernosodontologiaunifeso/issue/current"
  },
  {
    titulo: "Caderno de Negócios",
    descricao: "Divulga trabalhos científicos nas áreas de administração, ciências contábeis e negócios.",
    link: "https://revista.unifeso.edu.br/index.php/cadernosdenegocios/issue/current"
  },
  {
    titulo: "Caderno Unifesotec",
    descricao: "Promove a disseminação científica e pesquisas inovadoras em Ciências Exatas e Tecnológicas.",
    link: "https://revista.unifeso.edu.br/index.php/unifesotec/issue/archive"
  }
];

export default function TodosArtigos() {
  const navigate = useNavigate();

  let bannersData = null;
  try {
    // eslint-disable-next-line
    bannersData = require("assets/json/unifesoData.json").find((data) => data.id === "homePage");
  } catch (e) {
    bannersData = null;
  }
  const filteredBanner = (type, background, revertPosition, anchor) =>
    bannersData
      ? [
          bannersData,
          bannersData.banners.filter((banner) => banner.type === type),
          background,
          revertPosition,
          anchor,
        ]
      : null;

  return (
    <>
      <MenuSuperior />
      {bannersData && (
        <>
          <MainBanner type={filteredBanner("Main", true, false, "anchorHome")} />
          <InfosBanner type={filteredBanner("Infos", false, true, "anchorHome")} />
        </>
      )}
      <div className={styles.container}>
        <button className={styles.cadastroBtn} onClick={() => navigate("/cadastro-artigo")}>Cadastrar Novo Artigo</button>
        <h2 style={{textAlign: 'center', color: '#006b64', fontWeight: 'bold', marginBottom: '24px'}}>TODOS OS ARTIGOS</h2>
        <ul className={styles.listaArtigos}>
          {periodicos.map((periodico, idx) => (
            <li key={idx} className={styles.artigoCard} style={{background: '#f6f6f6', borderRadius: '8px', padding: '18px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              <h3 style={{color: '#006b64', fontWeight: 'bold', fontSize: '2rem', margin: '0 0 8px 0'}}>{periodico.titulo}</h3>
              <p style={{fontSize: '1.1rem', margin: '0 0 8px 0'}}>{periodico.descricao}</p>
              <a href={periodico.link} target="_blank" rel="noopener noreferrer" style={{color: '#008F85', fontWeight: 'bold', fontSize: '1rem'}}>Acessar periódico</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
