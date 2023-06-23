export default function Saudacao({nome}) {

    const gerarSaudacao = (algumNome) => {
        return `Bem Vindo(a) ${algumNome}`;
    }

    return nome ? (<><p>{gerarSaudacao(nome)}</p></>) : null
}