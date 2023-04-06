import '../../assets/css/css-crud/CadastroUser.css'
import { ChangeEvent, useState } from 'react';
import Select from 'react-select'
import MultipleValueTextInput from 'react-multivalue-text-input';

export const CadastroUser = (props) => {
    const [file, setFile] = useState({})

    const handleFileChange = (e) => {
        console.log(e)
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
    

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    
    const options2 = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }

      ]

    return (
        <div className="components-cadastro-div" >
            <span className='true'>
                <p>{props.name}</p>
                <span  className="components-cadastro-true">
                    <span className="components-cadastro-span">
                        <form action="/" className='cadastro-user-form'>
                            <span>
                            <p>Nome do Usuario</p>
                            <input type="text" className='inputMult' name="nome" required />
                            </span>
                            <span>
                            <p>Senha do Usuario</p>
                            <input type="password" className='inputMult' name="password" required />
                            </span>
                            <span>
                            <p>Reapt Senha do Usuario</p>
                            <input type="password" className='inputMult'  name="reaptpassword" required/>
                            </span> 
                            <button type='submit' className='cadastro-user-form-button'>Cadastrar</button> 
                        </form>

                    </span>                  
                </span>
            </span>
        </div>
    )
}