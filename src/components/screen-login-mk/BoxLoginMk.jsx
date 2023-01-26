import '../../assets/css/css-login-mk/BoxLoginMk.css'
import boschLogo from '../../assets/img/Bosch-logo.png'

export const BoxLoginMk = () => {
    return (
        <div className="box-login-mk-div" >
            <span className="box-login-mk-login">
                <img src={boschLogo} alt="" />
                <form action={`/cadastro-manual`} className="box-login-mk-form">
                    <span className="box-login-mk-input-user">
                        <input className="caixa" type="text" name="nome" placeholder="Nome completo*" required />
                    </span>
                    <span className="box-login-mk-input-user">
                        <input className="caixa" type="password" name="password1" placeholder="Password*" required maxlength="10" min="8" />
                    </span>
                    <button type='submit' className='continuar'>CONTINUAR</button>
                </form>
            </span>
        </div>
    )
}