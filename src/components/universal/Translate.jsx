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
            <div className='dropdown'>
                <form id="app-cover">
                    <div id="select-box">
                        <input type="checkbox" id="options-view-button" />
                        <div id="select-button" class="brd">
                            <div id="selected-value">
                                <span className="translate-div-span">
                                     <img src={translateImg} className="translate-div-img"  alt="" /> 
                                     Select a platform
                                </span>
                            </div>
                            <div id="chevrons">
                                <i class="fas fa-chevron-up"></i>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div id="options">
                            <div class="option" onClick={() => puxarIdioma("pt-BR")} >
                                <input class="s-c top" type="radio" name="platform" value="codepen" />
                                <input class="s-c bottom" type="radio" name="platform" value="codepen" />
                                <i class="fab fa-codepen"></i>
                                <span class="label" type='submit'>pt-BR</span>
                                <span class="opt-val">CodePen</span>
                            </div>
                            <div class="option" onClick={() => puxarIdioma("pt-BR")}>
                                <input class="s-c top" type="radio" name="platform" value="dribbble" />
                                <input class="s-c bottom" type="radio" name="platform" value="dribbble" />
                                <i class="fab fa-dribbble"></i>
                                <span class="label">Dribbble</span>
                                <span class="opt-val">Dribbble</span>
                            </div>
                            <div class="option" onClick={() => puxarIdioma("pt-BR")}>
                                <input class="s-c top" type="radio" name="platform" value="behance" />
                                <input class="s-c bottom" type="radio" name="platform" value="behance" />
                                <i class="fab fa-behance"></i>
                                <span class="label">Behance</span>
                                <span class="opt-val">Behance</span>
                            </div>
                            <div class="option" onClick={() => puxarIdioma("pt-BR")}>
                                <input class="s-c top" type="radio" name="platform" value="hackerrank" />
                                <input class="s-c bottom" type="radio" name="platform" value="hackerrank" />
                                <i class="fab fa-hackerrank"></i>
                                <span class="label">HackerRank</span>
                                <span class="opt-val">HackerRank</span>
                            </div>
                            <div class="option" onClick={() => puxarIdioma("pt-BR")}>
                                <input class="s-c top" type="radio" name="platform" value="stackoverflow" />
                                <input class="s-c bottom" type="radio" name="platform" value="stackoverflow" />
                                <i class="fab fa-stack-overflow"></i>
                                <span class="label">StackOverflow</span>
                                <span class="opt-val">StackOverflow</span>
                            </div>
                            <div class="option" onClick={() => puxarIdioma("pt-BR")}>
                                <input class="s-c top" type="radio" name="platform" value="freecodecamp" />
                                <input class="s-c bottom" type="radio" name="platform" value="freecodecamp" />
                                <i class="fab fa-free-code-camp"></i>
                                <span class="label">FreeCodeCamp</span>
                                <span class="opt-val">FreeCodeCamp</span>
                            </div>
                            <div id="option-bg"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}