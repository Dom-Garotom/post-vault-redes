import styled from "styled-components";

const main = styled.div`
    background-color: #FFF;
    width: 100%;
    height: 100vh;
`

const header = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 20px ;
    border-bottom: 1px solid #DCDEE0;
`

const body = styled.div`
    height: 100%;
    min-block-size: 40vh;
    justify-content: center;
    align-items: center;
`

export const Wrapper = {
    main : main,
    header: header,
    body: body
}