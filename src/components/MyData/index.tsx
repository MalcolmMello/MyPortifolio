import * as C from './styles'
import meuportifolioimg from '../../assets/meuportifolioimg.png'

export const MyData = () => {
    return (
        <C.MyName>
            <div className='container'>
                <div className='data--area'>
                    <h1>Olá, eu sou o <br />
                        Malcolm Lima 
                    </h1>
                    <p>Desenvolvedor Front-End</p>
                    <div className='button--area'>
                        <button className='green--button'>Download CV</button>
                        <button className='black--button'>Entrar em contato</button>
                    </div>
                </div>
                <div className='img--area'>
                    <img src={meuportifolioimg} alt="myportfolio" />
                </div>
            </div>
        </C.MyName>
    )
}