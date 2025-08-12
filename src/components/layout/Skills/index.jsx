import { FaReact, FaCss3Alt, FaJsSquare, FaHtml5, FaGitSquare, FaGithubSquare, FaChartLine  } from 'react-icons/fa';
import { CodeXml } from 'lucide-react';
import { SiPython, SiMicrosoftexcel } from 'react-icons/si';
import styles from './styles.module.css';


function Skills ( { scrollRef }) {
    return (
        <div ref={scrollRef} className={styles.conteiner}>
            <div className={styles.conteiner_atuacao}>
                <h1>Professional Action</h1>
                <p>Graduado em Análise e Desenvolvimento de Sistemas<br/>conhecimento em desenvolvimento web utilizando HTML, CSS, JavaScript e React<br/>além de domínio em Excel Avançado para analise de dados.</p>
                <div className={styles.conteiner_item}><CodeXml className={styles.icon} /><h2></h2></div>
            </div>
            <div className={styles.conteiner_icons}>
                <div className={styles.conteiner_item}><FaHtml5 className={styles.icon} /><h2>HTML</h2></div>
                <div className={styles.conteiner_item}><FaCss3Alt className={styles.icon} /><h2>CSS</h2></div>
                <div className={styles.conteiner_item}><FaJsSquare className={styles.icon} /><h2>JS</h2></div>
                <div className={styles.conteiner_item}><FaGithubSquare className={styles.icon} /><h2>GitHub</h2></div>
                <div className={styles.conteiner_item}><FaGitSquare className={styles.icon} /><h2>Git</h2></div>
                <div className={styles.conteiner_item}><FaReact className={styles.icon} /><h2>React</h2></div>
                <div className={styles.conteiner_item}><SiPython className={styles.icon} /><h2>Python</h2></div>
                <div className={styles.conteiner_item}><SiMicrosoftexcel className={styles.icon} /><h2>Excel</h2></div>
                <div className={styles.conteiner_item}><FaChartLine className={styles.icon} /><h2>Analise de dados</h2></div>
            </div>
        </div>
    )
}

export default Skills