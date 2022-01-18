import styled from "styled-components";

export const ProjectsArea = styled.section`
    padding: 80px 0px;
    .container {
        width: 1024px;
        margin: auto;
        h1 {
            color: #FFF;
            text-align: center
        }

        .projects--area {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;

            .project--item {
                width: 100%;
                margin: auto;
                color: #FFF;
                
                img {
                    height: 150px;
                    width: 100%
                }
                p {
                    color: #828282
                }
            }
        }
    }
`