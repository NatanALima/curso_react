export default function SelectSala({salas, selectStyle, sendUserSala}) {
    

    
    return(
        <div className={`${selectStyle.infoAlu} ${selectStyle.sala}`}>
            <select name="opsala" className={selectStyle.opsala} defaultValue={"DEFAULT"} required onChange={e => sendUserSala(e.target.value)}>
                <option value="DEFAULT" disabled>SELECIONE SUA SALA</option>
                {salas.map((sala, index) => {
                    //Removendo acentos
                    let NormaValueSala = sala.nome.normalize("NFD");
                    //Adicionando underline
                    let valueSala = NormaValueSala.replace(/ /g, "_");
                    return(
                        <option value={valueSala} key={index}>{sala.nome} - {sala.ano}º{sala.curso}</option>
                    )
                })}
            </select>
        </div> 
    )
}