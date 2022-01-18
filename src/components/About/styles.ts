import styled from "styled-components";

export const AboutItem = styled.section`
    .container {
        width: 1024px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .pic--area {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0px 10px;

            .pic--item {
                display: flex;
                flex-direction:column;
                align-items: center;
                width: max-content;
                
                .perfil--img {
                    height: 200px;
                    width: 200px;
                    border: 3px solid #00DF5E;
                    border-radius: 50%
                }

                h3 {
                    color: #FFF
                }    
            }
            
            .social--media {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 20px;

                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }

        .about--area {
            h1, h3 {
                color: #FFF;
            }
            h3 {
                margin-bottom: 50px;
            }
            .about--item {
                color: #828282
            }
        }
    }
    padding: 80px 0px;
`