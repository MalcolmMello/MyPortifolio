import styled from "styled-components";

export const HeaderArea = styled.header`
    .container {
        display: flex;
        width: 1024px;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        color: #FFF;

        ul {
            display: flex;
            list-style-type: none;

            li {
                margin-right: 20px;
                cursor: pointer
            }
        }
    }
`