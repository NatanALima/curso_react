import {useState} from 'react'

export default function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();


    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
        console.log(email);
    }

    function limparEmail() {
        setUserEmail();
    }

    return(
        <div>
            <h2>Cadstre o seu e-mail:</h2>
            {/* onSubmit funcionaria melhor do que onClick */}
            <form>
                <input type="email" name="email" id="email" autoComplete='off' onChange={e => setEmail(e.target.value)}/> 
                <button onClick={enviarEmail}>Enviar Email</button>
            </form>
            {userEmail ? (
                <div>
                    <p>O e-mail do usuário é: <strong>{userEmail}</strong></p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>
            ) : null}
        </div>
    )
}