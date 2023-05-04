import '../../styles/css-login-mk/BoxLoginMk.module.css'
import boschLogo from '../../../public/img/Meu projeto 1.png'
import userImg from '../../../public/img/user.svg'
import passImg from '../../../public/img/lock-closed.svg'

const BoxLoginMk = () => {
    return (
        <div className="box-login-mk-div" >

            <span className="box-login-mk-login">
                <img src={boschLogo} style={{width:'100px'}} alt="" />
                <form action={`/cadastro-manual`} className="box-login-mk-form">
                    <span className="box-login-mk-input-span">
                        <div className="box-login-mk-input-user">
                            <img src={userImg} style={{width:'30px'}} alt="" />
                            <input className="box-login-mk-input" type="text" name="nome" required />
                        </div>
                        <div className="box-login-mk-input-fake"></div>
                    </span>
                    <span className="box-login-mk-input-span">
                        <div className="box-login-mk-input-user">
                            <img src={passImg} style={{width:'30px'}} alt="" />
                            <input className="box-login-mk-input" type="password" name="password1" required maxlength="10" min="8" />
                        </div>
                        <div className="box-login-mk-input-fake"></div>
                    </span>
                    <button type='submit' className='box-login-mk-button'>ENTRAR</button>
                </form>
            </span>
        </div>
    )
}
export default BoxLoginMk