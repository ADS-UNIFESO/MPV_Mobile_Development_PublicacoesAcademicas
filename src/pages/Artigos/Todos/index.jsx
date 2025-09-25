import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


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

  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <button className={styles.cadastroBtn} onClick={() => navigate("/artigos/cadastro")}>Cadastrar Novo Artigo</button>
          <h2 className={styles.title}>TODOS OS ARTIGOS</h2>
          <ul className={styles.listaArtigos}>
            {periodicos.map((periodico, idx) => (
              <li key={idx} className={styles.artigoCard}>
                <h3>{periodico.titulo}</h3>
                <p>{periodico.descricao}</p>
                <a href={periodico.link} target="_blank" rel="noopener noreferrer">Acessar periódico</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
