import logoVr from './../../assets/media/logoVRBankFigma.svg';
import LinksMenu from './LinksMenu';

export default function InitialMenu() {
    const links = [{refLink: "oi",
                    refName: "Cadastrar Produtos"},
                    {refLink: "oi",
                    refName: "Adicionar Fundos"},
                    {refLink: "oi",
                    refName: "Mostrar Extrato"}]
    return(
        <div class="boxContainer">
            <div class="container index">
                <div>
                    <img src={logoVr} alt="FigmaLogo"/>
                </div>
                <LinksMenu linksInfo={links}/>
                
            </div>
        </div>
    )
    
}