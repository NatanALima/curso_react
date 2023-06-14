export default function BoxCompra({nameFunction, nameProd}) {
    return(
        <div className="produto">
            <div className="nomeProduto">
                <input type="text" name="produto0" required="required"/>
                <span>PRODUTO</span> 
            </div>
            <div className="valorProduto">
                <input type="number" name="valor0" required="required"/>
                <span>VALOR</span> 
            </div>
            <div className="quantProduto">
                <input type="number" name="quant0" required="required"/>
                <span>QUANTIDADE</span>
            </div>
        </div>
    )
}