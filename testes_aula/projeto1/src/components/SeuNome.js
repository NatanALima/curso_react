export default function SeuNome({setNome}) {
    return(
        <div>
            <p>Digite o seu Nome:</p>
            <input type="text" placeholder="Digite seu Nome..." onChange={e => setNome(e.target.value)}/>
        </div>
    )
}