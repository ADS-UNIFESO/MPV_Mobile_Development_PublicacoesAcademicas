import styles from "./styles.module.css";
import MenuSuperior from "components/MenuSuperior";

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

// Últimos artigos fictícios
const artigos = [
  {
    titulo: "Um olhar sociológico sobre o conceito de trabalho",
    descricao: "No imaginário popular e em muitas áreas do conhecimento humano, é bastante comum a confusão entre o trabalho e o emprego. Na perspectiva sociológica, porém, tratam-se de conceitos distintos. No texto apresentado, o trabalho é deslocado da esfera exclusivamente econômica, e a clássica teorização sobre a sua centralidade como um dos eixos de organização da vid[...] Há 2 meses - Em Sociologia",
    imagem: "https://i.imgur.com/1Q9Z1Zl.png"
  },
  {
    titulo: "Educação Ambiental: práticas pedagógicas em sala de aula",
    descricao: "A escola tem no seu papel a responsabilidade de desenvolver nas crianças atitudes de cuidado com o ambiente em que vivem proporcionando-lhes a oportunidade de aquisição de conhecimentos, valores, atitudes que contribuam para melhorar a qualidade de vida. Este trabalho discute as práticas educacionais e o conhecimento que os alunos têm sobre os cuidados com o ambiente, em especial com o Rio Paquequer, em Teres&oc[...] Há 3 semanas - Em Gestão Ambiental",
    imagem: "https://i.imgur.com/2Q9Z2Zl.png"
  },
  {
    titulo: "Sistema de Informação saúde mental Após alterações",
    descricao: "...descrição do artigo...",
    imagem: "https://i.imgur.com/3Q9Z3Zl.png"
  }
];

const todosArtigos = [
  ...artigos,
  ...periodicos.map(p => ({
    titulo: p.titulo,
    descricao: p.descricao,
    link: p.link
  }))
];

export default function UltimosArtigos() {
  return (
    <>
      <MenuSuperior />
      <div className={styles.container}>
        <h2 style={{textAlign: 'center', color: '#006b64', fontWeight: 'bold', marginBottom: '24px'}}>ÚLTIMOS ARTIGOS</h2>
        <ul className={styles.listaArtigos} style={{listStyle: 'none', padding: 0}}>
          {todosArtigos.map((artigo, idx) => (
            <li key={idx} className={styles.artigoCard} style={{display: 'flex', alignItems: 'flex-start', background: '#f6f6f6', borderRadius: '8px', padding: '18px', marginBottom: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              {artigo.imagem && (
                <img src={artigo.imagem} alt={artigo.titulo} style={{width: '180px', height: 'auto', marginRight: '32px', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}} />
              )}
              <div>
                <h3 style={{color: '#008F85', fontWeight: 'bold', fontSize: '2rem', margin: '0 0 8px 0'}}>{artigo.titulo}</h3>
                <p style={{fontSize: '1.1rem', margin: '0'}}>{artigo.descricao}</p>
                {artigo.link && (
                  <a href={artigo.link} target="_blank" rel="noopener noreferrer" style={{color: '#008F85', fontWeight: 'bold', fontSize: '1rem'}}>Acessar periódico</a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
