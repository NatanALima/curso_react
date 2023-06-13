import Button from "./evento/Button";
export default function Evento() {

    function meuEvento() {
        console.log(`Ativando o Primeiro evento`);

    }

    function segundoEvento() {
        console.log("Ativando o segundo Evento");
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>

        </div>
    )
}