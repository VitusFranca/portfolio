import { FaReact, FaCss3Alt, FaJsSquare, FaHtml5, FaGitSquare, FaGithubSquare  } from 'react-icons/fa';

import styles from './styles.module.css';


function Skills ( { scrollRef }) {
    return (
        <div ref={scrollRef} className={styles.conteiner}>
            <div className={styles.conteiner_atuacao}>
                <h1>Professional Action</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Qui suscipit similique quo corrupti esse dolores ab ea labore aut ex laudantium cum id,<br/> accusamus molestias cupiditate delectus placeat corporis provident.</p>
                <div className={styles.conteiner_item}><FaCss3Alt className={styles.icon} /><h2></h2></div>
            </div>
            <div className={styles.conteiner_icons}>
                <div className={styles.conteiner_item}><FaHtml5 className={styles.icon} /><h2>HTML</h2></div>
                <div className={styles.conteiner_item}><FaCss3Alt className={styles.icon} /><h2>CSS</h2></div>
                <div className={styles.conteiner_item}><FaJsSquare className={styles.icon} /><h2>JS</h2></div>
                <div className={styles.conteiner_item}><FaGithubSquare className={styles.icon} /><h2>GitHub</h2></div>
                <div className={styles.conteiner_item}><FaGitSquare className={styles.icon} /><h2>Git</h2></div>
                <div className={styles.conteiner_item}><FaReact className={styles.icon} /><h2>React</h2></div>
            </div>
        </div>
    )
}

export default Skills