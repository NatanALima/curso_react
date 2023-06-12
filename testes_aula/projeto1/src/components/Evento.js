export default function Evento({numero}) {

    function meuEvento() {
        console.log(`O componente de número ${numero} foi clicado`);

    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}