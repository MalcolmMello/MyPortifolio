import * as C from './styles'
import mypic from '../../assets/mypic.png'

export const About = () => {
    return (
        <C.AboutItem>
            <div className='container'>
                <div className='pic--area'>
                    <div className='pic--item'>
                        <img className='perfil--img' src={mypic} alt="" />
                        <h3>Malcolm Lima</h3>
                        <div className='social--media'>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"/>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"/>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube-play.png"/>
                        </div>
                    </div>
                </div>
                <div className='about--area'>
                    <h1>Sobre</h1>
                    <div className='about--item'>
                        <h3>Conheça um pouco sobre mim</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare, enim et fringilla eleifend, ipsum turpis iaculis velit, sit amet placerat ligula est ut justo. Morbi consequat ligula ac molestie fermentum. Suspendisse eget placerat erat, a aliquam nunc. Nunc mollis tellus dignissim justo egestas, a egestas dui ultricies. Phasellus consectetur nunc diam, ut ullamcorper eros vehicula eget. Cras sagittis et quam quis aliquet. Nam rutrum laoreet est, at vehicula lacus porttitor vel. Nunc rhoncus, quam id eleifend pharetra, ex quam tincidunt arcu, eget convallis libero ex sed neque. Nam nec rhoncus purus. Ut ac magna dictum, egestas augue eu, semper lacus. Mauris sed odio id orci sodales rhoncus. Sed sagittis, erat volutpat egestas ultrices, urna ex consectetur nisl, ac tempus justo libero eu lacus. Nam vel vehicula elit.
                        </p>
                    </div>
                </div>
            </div>
        </C.AboutItem>
    )
}