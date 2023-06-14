import logoVr from './../../assets/media/logoVRBankFigma.svg';
import LinksMenu from './LinksMenu';
import styles from './../../assets/css/BoxLinks.module.css'

export default function BoxLinks() {
    const links = [{refLink: "oi",
                    refName: "Cadastrar Produtos"},
                    {refLink: "oi",
                    refName: "Adicionar Fundos"},
                    {refLink: "oi",
                    refName: "Mostrar Extrato"}]
    return(
        <div className={styles.boxContainer}>
            <div className={`${styles.container} ${styles.index}`}>
                <div>
                    <img src={logoVr} alt="FigmaLogo"/>
                </div>
                <LinksMenu linksInfo={links} linkStyle={styles}/>
                
            </div>
        </div>
    )
    
}