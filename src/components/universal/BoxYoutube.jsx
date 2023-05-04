import '../../styles/css_universal/BoxYoutube.module.css'
import YouTube from 'react-youtube';

const BoxYoutube = (props) => {
    return (
        <div className="box-youtube-div" >
            <YouTube className='box-youtube-button-youtube' videoId={props.youtube} host='https://www.youtube.com'/>
        </div>
    )
}
export default BoxYoutube
