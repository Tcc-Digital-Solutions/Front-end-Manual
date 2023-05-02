import '../../styles/css-crud/BoxManualCadastrados.module.css'
import { BoxPesquisaCadastro } from './BoxPesquisaCadastro';

export const BoxManualCadastrados = () => {

    return (
        <div className="box-manual-cadastrados-div" >
            <span className='box-manual-cadastrados-01'>
            </span>
            <span className='box-manual-cadastrados-02'>
                <BoxPesquisaCadastro/>
            </span>
        </div>
    )
}