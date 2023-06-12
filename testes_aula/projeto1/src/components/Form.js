import {useState} from 'react';

export default function Form() {
    function cadastrarUser(e) {
        e.preventDefault();
        alert("Usuário Cadastrado com sucesso!");
        console.log(`O Usuário ${name} foi cadastrado com a senha: ${pass}`);
    }

    const [name, setName] = useState('');
    const [pass, setPass] = useState();

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" placholder="Digite o seu nome" autoComplete="off" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="pass">Senha: </label>
                    <input type="password" name="pass" id="pass" placholder="Digite a sua senha" autoComplete="off" onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}