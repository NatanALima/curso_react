import { useState } from 'react';
import styles from './Produtos.module.css';

export default function Produtos({setProdutos, insertClickRef, indexValue}) {
    const [prodName, setProdName] = useState();
    const [prodValue, setProdValue] = useState();
    const [prodQtd, setProdQtd] = useState();
    const [prodVal, setProdVal] = useState();

    const calcQtd = (e) => {
        setProdQtd({[e.target.className]: Number(e.target.value)});
        setProdVal(Number(prodValue.prodValue * e.target.value));
    }

    const insertProd = () => {
        if(prodName !== undefined && prodValue !== undefined && prodQtd !== undefined) {
            //Passo todos os objetos que possuem as informações do produto diretamente para o usestate do componente pai
            return setProdutos(prevProds => ([...prevProds, {...prodName, ...prodValue, ...prodQtd, ...prodVal}]));
        
        } else {
            alert('Preencha todos os campos!');
        }

    }


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
                <button onClick={insertProd} ref={(e) => insertClickRef.current[indexValue] = e}>Cadastrar Produto</button>
            </div>
            
        </div>
    )
}