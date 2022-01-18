import * as C from './styles'

export const Contact = () => {
    return(
        <C.ContactArea>
            <div className='container'>
                <h1>Contato</h1>
                <p>Minhas informações para entrar em contato comigo. Será um prazer atendê-lo
                </p>
                <div className='contact--area'>
                    <div className='contact--item'>
                        <img src="https://img.icons8.com/material-outlined/24/26e07f/whatsapp--v1.png"/>
                        <p>{`(11) 97535-4237`}</p>
                    </div>
                    <div className='contact--item'>
                        <img src="https://img.icons8.com/ios-filled/24/26e07f/email-open.png"/>
                        <p>malcolmmellolima@gmail.com</p>
                    </div>
                    <div className='contact--item'>
                        <img src="https://img.icons8.com/material-outlined/24/26e07f/github.png"/>
                        <p>https://github.com/MalcolmMello</p>
                    </div>
                    <div className='contact--item'>
                        <img src="https://img.icons8.com/ios-glyphs/24/26e07f/linkedin.png"/>
                        <p>https://www.linkedin.com/in/malcolm-de-mello-a8208a224/</p>
                    </div>
                </div>
            </div>
        </C.ContactArea>
    )
}