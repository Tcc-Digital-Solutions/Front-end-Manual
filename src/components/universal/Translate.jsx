import '../../assets/css/css_universal/Translate.css'
import '../../assets/css/css_universal/dropdown.css'
import translateImg from '../../assets/img/translate.png'

export const Translate = () => {
    const userLocale = navigator?.languages?.length ? navigator.languages[0] : navigator.language;
    console.log(userLocale);
    console.log(navigator.languages);


    const puxarIdioma = (idioma) => {
        // window.location.reload(false);
        console.log(idioma);
    }
    return (
        <div className="translate-div">
            <button></button>
            <span></span>
        </div>
    )
}