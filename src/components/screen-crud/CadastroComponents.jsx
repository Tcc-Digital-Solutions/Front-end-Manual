import '../../assets/css/css-crud/componentsCadastro.css'
import { ChangeEvent, useState } from 'react';
import Select from 'react-select'
import MultipleValueTextInput from 'react-multivalue-text-input';

export const CadastroComponents= (props) => {
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
                        <span>
                        <p>Nome do produto</p>
                        <input type="text" className='inputMult' />
                        </span>
                        <span>
                            <p>Categoria do produto</p>
                            <Select
                            isClearable={true}
                            isSearchable={true}
                            options={options} /> 
                        </span>
                        <span>
                            <p>Sub categoria do produto</p>
                            <Select
                            isClearable={true}
                            isSearchable={true}
                            options={options} /> 
                        </span>
                        <span>
                        <p className='box-manual-text'>Links de vídos sobre o produto</p>
                        <MultipleValueTextInput className='inputMult'/> 
                        </span>
                    </span>
                    <div style={{width:'30px'}}></div>
                    <span className="components-cadastro-span">
                        <span>
                            <p>Imagens da montagem do produto</p>
                            <input className="button-65" id='imgUpload' type="file" onChange={handleFileChange}/>
                        </span>
                        <span>
                            <p>Linguagem</p>
                            <Select
                            isClearable={true}
                            isSearchable={true}
                            options={options2} /> 
                        </span>
                        <span>
                            <p>Imagem 360°</p>
                            <input type="text" className='inputMult' />
                        </span>
                        <span>
                            <p>PDF  do produto</p>
                            <button className="button-65" role="button" type="file">Clique e carregue seu arquivo </button> 
                        </span>
                    </span>                    
                </span>
            </span>
        </div>
    )
}