import styled from "styled-components";

export const Container = styled.div`
display : flex;
width :100%;
height : 100%;
align-items : center;
justify-Content : center;
`
export const InnerContainer = styled.div`

width : 500px;
height : 450px;
border : 0px solid gray;
color : black;
 p,div{
    font-size : 14px;
 }
 
 
`

export const ButtonWrapper = styled.div`
 display : flex;
 width : 150px;
 justify-content: space-between;
 align-items : center;
 button {
    width : 70px;
    height : 30px;
 }
 
 `
export const SelectWrapper = styled.div`
 display : flex;
 width : 200px;
 justify-content: space-between;
 align-items : center;
 
 select{
    width : 70px;
    height : 25px;
 }

`
 export const TitleDiv = styled.div `
 background: #404040;
 display : flex !important;
 height : 35px;
 align-items: center;
 justify-content: space-between;
 div{
    font-size : 18px;
    padding-left: 20px;
 }
 img{
    padding-right: 20px;
 }
 color : white;
 `
 export const QuestionDiv = styled.div`
    height: 80px;
    background: rgb(227, 227, 227);
    color: black;
    display: flex;
    justify-content: space-between;
    align-items : center;    
    padding-left: 20px;
    padding-right: 20px;
 `
 export const CreateDiv = styled.div`
    height: 50px;
     
    color: black;
    display: flex;
     justify-content: space-between;
    align-items : center;    
    padding-left: 20px;
    padding-right: 20px;
 `
  export const SelectDiv = styled.div`
    height: 50px;
    background : #ededed; 
    border-top: 1px solid  #d9d9d9;
    border-bottom: 1px solid  #d9d9d9;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items : center;    
    padding-left: 20px;
    padding-right: 20px;
 `
 export const FooterDiv = styled.div`
 
   display: flex;
   justify-content: flex-start;
   align-items : center;    
   padding-left : 20px;
   border-top:1px solid #cdcdcd;
   p{
      margin-right : 20px;     
   }
 `