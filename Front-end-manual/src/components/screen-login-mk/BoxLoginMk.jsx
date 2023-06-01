import { useSignIn } from 'react-auth-kit'
import '../../assets/css/css-login-mk/BoxLoginMk.css'
import boschLogo from '../../assets/img/Meu projeto 1.png'
import passImg from '../../assets/img/lock-closed.svg'
import userImg from '../../assets/img/user.svg'

export const BoxLoginMk = () => {
    const signIn = useSignIn()

    async function fetchLoginApi() {
        let data = JSON.stringify({})
        var headers = new Headers();
        headers = {
            "Content-Type": "application/json",
        }
        let config = {
            method: 'POST',
            headers: headers,
            mode: cors,
            cache: 'default',
            data: data
        }
    }

    function login() {
        fetchLoginApi();
    }

    return (
        <div className="box-login-mk-div" >

            <span className="box-login-mk-login">
                <img src={boschLogo} style={{ width: '100px' }} alt="" />
                <form action={`/cadastro-manual`} className="box-login-mk-form">
                    <span className="box-login-mk-input-span">
                        <div className="box-login-mk-input-user">
                            <img src={userImg} style={{ width: '30px' }} alt="" />
                            <input className="box-login-mk-input" type="text" name="nome" required />
                        </div>
                        <div className="box-login-mk-input-fake"></div>
                    </span>
                    <span className="box-login-mk-input-span">
                        <div className="box-login-mk-input-user">
                            <img src={passImg} style={{ width: '30px' }} alt="" />
                            <input className="box-login-mk-input" type="password" name="password1" required maxlength="10" min="8" />
                        </div>
                        <div className="box-login-mk-input-fake"></div>
                    </span>
                    <button type='button' onClick={login} className='box-login-mk-button'>ENTRAR</button>
                </form>
            </span>
        </div>
    )
}