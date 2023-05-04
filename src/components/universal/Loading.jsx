import '../../styles/css_universal/Loading.module.css'
import furadeiraImg from '../../../public/img/furadeira 1.png'

const Loading = (props) => {
    return (
        <div className="loading-div" >
            <div class="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <img src={furadeiraImg} alt="" />
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Loading