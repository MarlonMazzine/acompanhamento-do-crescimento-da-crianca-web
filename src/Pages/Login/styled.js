import styled from 'styled-components'

export const Container = styled.div`
    background: #DEF7F3;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

export const FormContent = styled.form`
    background: gray;
    color: white;
    width: 350px;
    padding: 40px;
    border-radius: 15px;
    resize: both;
    overflow: auto;
    text-align: center;
    background: rgb(33,147,176);
    background: -moz-linear-gradient(45deg, rgba(33,147,176,1) 0%, rgba(109,213,237,1) 100%);
    background: -webkit-linear-gradient(45deg, rgba(33,147,176,1) 0%, rgba(109,213,237,1) 100%);
    background: linear-gradient(45deg, rgba(33,147,176,1) 0%, rgba(109,213,237,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2193b0",endColorstr="#6dd5ed",GradientType=1);
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    outline: none;
    border-color: transparent;
`;

export const InputSubmit = styled.input`
    width: 50%;
    padding: 10px;
    border-color: transparent;
    border-radius: 10px;
    margin-bottom: 15px;
    color: white;
    font-weight: bolder;
    outline: none;
    cursor: pointer;
    background: rgb(252,74,26);
    background: linear-gradient(45deg, rgba(252,74,26,1) 0%, rgba(247,183,51,1) 100%);
`;