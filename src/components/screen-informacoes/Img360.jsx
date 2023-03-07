import '../../assets/css/css-informacoes/img360.css';

export const Img360 = () => {

    const basePath = "https://fastly-production.24c.in/webin/360";
    return (
        <div className="img360-div" >
            <span className="img360-produto-name">Parafusadeira GSR 120-LI</span>
            <iframe className='img360-iframe' src="https://360.boschimages.com/G0000BWXjvadoXHA/embed" width="100%" height="100%"></iframe>
        </div>
    )
}