import { useState } from "react"
import SelectSala from "./SelectSala"
import BoxCompra from "./BoxCompra";
import ButtonsCadastro from "./ButtonsCadastro";
import styles from "../../assets/css/CadastroProdutos.module.css";
import logoVr from './../../assets/media/logoVRBankFigma.svg';

export default function CadastroProdutos() {
    

    //Informações do Comprador;
    const [userName, setUserName] = useState();
    const [userSala, setUserSala] = useState();


    //Informações do produto;
    const [prodName, setProdName] = useState();
    const [prodValue, setProdValue] = useState();
    const [prodQuant, setProdQuant] = useState();
    const [prodTotVal, setProdTotVal] = useState();

    const [produtos, setProdutos] = useState([]);


    const salas = [{nome: "CAROLINA DE JESUS",
                    curso: "ADM",
                    ano: 3},
                    {nome: "MARIA VALÉRIA REZENDE",
                    curso: "DS",
                    ano: 3},
                    {nome: "MARTHA MEDEIROS",
                    curso: "RH",
                    ano: 3},
                    {nome: "ARIANO SUASSUNA",
                    curso: "ADM",
                    ano: 2},
                    {nome: "MIA COUTO",
                    curso: "DS",
                    ano: 2},
                    {nome: "PEPETELA",
                    curso: "RH",
                    ano: 2},
                    {nome: "CONCEIÇÃO EVARISTO",
                    curso: "ADM",
                    ano: 1},
                    {nome: "ANA MARIA GONÇALVES",
                    curso: "DS",
                    ano: 1},
                    {nome: "MARIA FIRMINA DOS REIS",
                    curso: "RH",
                    ano: 1}

                ]

    

    const setTotalProd = (e) => {
        e.preventDefault();
        setProdTotVal(prodValue * prodQuant);
        console.log('*****************************************');
        console.log('INFORMAÇÕES DA COMPRA');
        console.log(`ALUNO: ${userName}`);
        console.log(`SALA: ${userSala}`);
        console.log(`INFO PRODUTO: ${prodName} ${prodQuant}x ${prodValue}`);
        console.log('*****************************************');;
        console.log(produtos)
    }

    //Incompleto
    const ProdSend = (e) => {
        let prod = e.target;

        // setProdutos(produtos => ({...produtos, [e.target.name]: e.target.value}));
        console.log(prod);
        // if(prod.getAttribute("name").includes("prodName")) {
        //     setProdName(prod.value);

        // } else if(prod.getAttribute("name").includes("prodVal")) {
        //     setProdValue(prod.value);

        // } else if(prod.getAttribute("name").includes("prodQtd")) {
        //     setProdQuant(prod.value);

        // }

        
    }

    //Armazena n componentes BoxCompra;
    const [BoxCompraList, setBoxCompraList] = useState([<BoxCompra event={ProdSend} boxStyle={styles} key={0}/>]);


    const addBoxCompra = () => {
        if(BoxCompraList.length <= 10) {
            setBoxCompraList(BoxCompraList.concat([<BoxCompra event={ProdSend} boxStyle={styles} key={BoxCompraList.length}/>]));
        }

    }

    const delBoxCompra = () => {
        if(BoxCompraList.length > 1) {
            setBoxCompraList(prevBoxCompraList => (prevBoxCompraList.slice(0, -1)));
        }
        
    }

    

    return(
        <div className={`${styles.container} ${styles.addProduto}`}>
            <div>
                <img src={logoVr} alt="LogoVr" />
            </div>
            <div className={styles.boxAddProduto}>
                <form onSubmit={setTotalProd}>
                    <div className={`${styles.infoAlu} ${styles.nome}`}>
                        <input type="text" name="nome" className="userName" required="required" autoComplete="off" onChange={e => setUserName(e.target.value)}/>
                        <span>NOME</span>
                    </div>
                    <SelectSala salas={salas} selectStyle={styles} sendUserSala={setUserSala}/>
                    <div className={styles.produtosBox}>
                        {BoxCompraList.map(BoxCompra => BoxCompra)}
                    </div>
                    <ButtonsCadastro btnStyles={styles} handleDelbox={delBoxCompra} handleAddbox={addBoxCompra}/>
                </form>
            </div>
            



        </div>
    )
}