import styles from './styles.module.css';

function Dashboard() {
    return(
        <div className={styles.conteiner}>
            <iframe title="analise1" 
            width="100%" 
            height="100%" 
            src="https://app.powerbi.com/reportEmbed?reportId=7cfe7985-151c-421a-a16f-b6b7c1b17062&autoAuth=true&ctid=7082e3af-16f5-4123-b05c-004a809f99e2" 
            frameborder="0" 
            allowFullScreen="true">
            </iframe>
        </div>
    )
}

export default Dashboard