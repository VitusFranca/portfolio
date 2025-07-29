import styles from './styles.module.css';
import img from '../../../assets/imgsobre.webp';


function About( { scrollRef }) {
    return ( 
    <div ref={scrollRef} className={styles.conteiner}>
            <h1><span>Introdução Sobre Mim</span></h1>
            <p>Olá! Sou Vitor França, um entusiasta da tecnologia 
                <br/><br/>
                desenvolvedor com experiência em <span>FrontEnd.</span> Fluente em <span>javascript</span> 
                <br/><br/>
                Valorizo a colaboração, busco aprendizado contínuo e estou comprometido em causar impacto positivo. 
                <br/><br/> 
                Aberto para colaborações e discussões sobre tecnologia.
            </p>
        <div className={styles.conteiner_img}><img src={img} alt="" /></div>
    </div>
)
}

export default About;