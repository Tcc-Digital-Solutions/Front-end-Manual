import '../../assets/css/css_universal/ButtonYoutube.css'
import fecharImg from '../../assets/img/close.svg'
import { useState } from 'react'
import { BoxYoutube } from './BoxYoutube'

export const ButtonYoutube = (props) => {
    const [visible, setVisible] = useState("button-youtube-box-fechar")
    const [pressed, setPressed] = useState(false)
    // const [videos, setVideos] = useState('')

    const setMenuVisible = () => {
        pressed ? setVisible("button-youtube-box-fechar") : setVisible("button-youtube-box")
        setPressed(!pressed)
    }

    // useEffect(() => {
    //     let videosInfo = localStorage.getItem('videos')
    //     if (videosInfo != undefined && videosInfo != null ){
    //         let videosInfoJSON = JSON.parse(videosInfo)
    //         setVideos(videosInfoJSON)
    //     }
    // }, [localStorage.getItem('videos')])

    return (
        <div className="button-youtube-div" >
            <button className='button-youtube-button' onClick={() => setMenuVisible()}>Bosch Youtube</button>
            <span className={visible}>
                <span className='box-youtube-name'>

                </span>
                <button className="button-youtube-button-x" id='button-lado' onClick={() => setMenuVisible()}><img className="button-youtube-button-x-img" src={fecharImg} alt="" /></button>
                <div className="button-youtube-button-scroll">
                    {/* // quando não tiver video dizer que não há vídeos cadastrados */}
                    {props.video && props.video.map((v, index) => (
                        <BoxYoutube youtube={v.codLink} key={index}/>
                    ))}
                </div>
            </span>
        </div>
    )
}
