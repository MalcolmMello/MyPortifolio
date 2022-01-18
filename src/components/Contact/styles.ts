import styled from "styled-components";

export const ContactArea = styled.section`
    padding: 80px 0px;
    .container {
        width: 1024px;
        margin: auto;
        h1, p {
            color: #FFF
        }

        .contact--area {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            .contact--item {
                display: flex;
                align-items: center;
                p {
                    color: #FFF;
                    margin-left: 10px;
                }

                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
`