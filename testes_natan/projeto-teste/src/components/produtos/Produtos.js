import { useState, useEffect } from 'react';
import styles from './Produtos.module.css';

export default function Produtos({insertProdutos, sendRequest, setSendRequest}) {
    const [prodName, setProdName] = useState();
    const [prodValue, setProdValue] = useState();
    const [prodQtd, setProdQtd] = useState();
    const [prodVal, setProdVal] = useState();

    const calcQtd = (e) => {
        setProdQtd({[e.target.className]: Number(e.target.value)});
        setProdVal(Number(prodValue.prodValue * e.target.value));
    }


    // Tentar passar esta função para o componente pai e enviar os dados do produto para ela???
    const insertProd = () => {
        if(prodName !== undefined && prodValue !== undefined && prodQtd !== undefined) {
            //Passo todos os objetos que possuem as informações do produto diretamente para o usestate do componente pai
            return insertProdutos(prevProds => ([...prevProds, {...prodName, ...prodValue, ...prodQtd, ...prodVal}]));
        
        } else {
            alert('Preencha todos os campos!');
        }

    }

    //Ainda pendente
    (function SendInsert () {
        if(sendRequest) {
            insertProd();
            setSendRequest(false);
        }
    })();


    return(
        <div className={styles.boxProd}>
            <h1>Cadastro de Produtos</h1>
            <div className={styles.boxProd__input}>
                <p className={styles.boxProd__inputName}>Nome Produto: </p>
                <input type="text" placeholder="ex.('Maçã')" className="prodName" autoComplete='off' onChange={e => setProdName({[e.target.className]: e.target.value})}/>
            </div>
            <div className={styles.boxProd__input}>
                <p className={styles.boxProd__inputName}>Valor do Produto: </p>
                <input type="number" placeholder="Valor do Produto" className="prodValue" autoComplete='off' onChange={e => setProdValue({[e.target.className]: Number(e.target.value)})}/>
            </div>
            <div className={styles.boxProd__input}>
                <p className={styles.boxProd__inputName}>Quantidade do Produto: </p>
                <input type="number" placeholder="Quantidade do Produto" className="prodQtd" autoComplete='off' onChange={calcQtd}/>
            </div>
            <div className={styles.boxProd__btn}>
                <button onClick={insertProd}>Cadastrar Produto</button>
            </div>
            
        </div>
    )
}