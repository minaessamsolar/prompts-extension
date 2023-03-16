import styled from "styled-components";

export const Container = styled.div `

    display : flex !important;
    height : 50px;
    align-items: center;
    justify-content: space-between;
    color : black;
    border-bottom : 1px solid #cdcdcd;
    p{
        font-size : 18px;
        margin-left : 20px;
    }
`

export const ToolDiv = styled.div`

display : flex !important;
align-items: center;
justify-content: space-between;
margin-right : 20px;
width : 150px;
select{
    border : 0px solid gray;
}
`