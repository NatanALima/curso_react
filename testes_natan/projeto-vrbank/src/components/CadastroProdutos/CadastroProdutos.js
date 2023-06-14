import { useState } from "react"
import SelectSala from "./SelectSala"

export default function CadastroProdutos() {
    //Informações do Comprador;
    const [userName, setUserName] = useState();
    const [userSala, setUserSala] = useState();


    //Informações do produto;
    const [prodName, setProdName] = useState();
    const [prodValue, setProdValue] = useState();
    const [prodQuant, setProdQuant] = useState();
    const [prodTotVal, setProdTotVal] = useState();

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
        console.log('INFORMAÇÕES DA COMPRA')
        console.log(`ALUNO: ${userName}`)
        console.log(`SALA: PENDENTE`)

    }

    return(
        <div>
            <SelectSala salas={salas}/>
        </div>
    )
}