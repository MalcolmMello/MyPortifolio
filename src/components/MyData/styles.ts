import styled from "styled-components";

export const MyName = styled.section`
    display: flex;
    height: calc(100vh - 90px);
    align-items: center;

    .container {
        display: flex;
        width: 1024px;
        margin: auto;
        justify-content: space-between
    }

    .data--area {
        h1 {
            color: #FFF;
        }
        p {
            color: #828282
        }
    }
    
    .button--area {
        margin-top: 30px;

        button {
            cursor: pointer;
            height: 42px;
            width: 143px;
            border: none;
            margin-right: 15px
        }
        .green--button {
            background-color: #00DF5E;
        }
        .black--button {
            color: #FFF;
            background: none;
            border: 1px solid #212121
        }
    }
`