export default function BoxCompra({event, boxStyle}) {

    return(
        <div className={boxStyle.produto}>
            <div className={boxStyle.nomeProduto}>
                <input type="text" className="prodNome" required="required" autoComplete="off" onChange={event}/>
                <span>PRODUTO</span>
            </div>
            <div className={boxStyle.valorProduto}>
                <input type="number" className="prodVal" required="required" autoComplete="off" onChange={event}/>
                <span>VALOR</span>
            </div>
            <div className={boxStyle.quantProduto}>
                <input type="number" className="prodQtd" required="required" autoComplete="off" onChange={event}/>
                <span>QUANTIDADE</span>
            </div>
        </div>  
    )
}