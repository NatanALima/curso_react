export default function Form() {
    function cadastrarUser(e) {
        e.preventDefault();
        alert("Usuário Cadastrado com sucesso!");
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" name="nome" id="nome" placholder="Digite o seu nome" autoComplete="off"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}