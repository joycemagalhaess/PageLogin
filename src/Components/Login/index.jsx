import Link from "next/link";
import Styles from "./Login.module.css"


const Login= () => {
    return(
        <div className={Styles.Container}>
            <div className={Styles.titulo}>
                <h2>Bem vindo de volta</h2>
                <h1>Faça login na sua conta</h1>
            </div>
            <div className={Styles.email}>
                <p>E-mail</p>
                <input type="email" />
            </div>
            <div className={Styles.senha}>
                <p>Senha</p>
                <input type="password" />
            </div>
            <div className={Styles.EsqueciSenha}>
                <Link href={"/"}>Esqueceu sua senha?</Link> 
            </div>
            <div className={Styles.ContainerButton}>
                <button className="entra">Entrar</button>
                <button className="google"> <img src="../../google.png"/>Ou faça login com o Google </button>
            </div>

        </div>

    )
}

export default Login;