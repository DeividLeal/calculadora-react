import styled from "styled-components"; 

export const Container = styled.div`
    height: 100vh;
   background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    background-color: #fff;
    width: 25%;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(9,9,121,1);
    display: flex;
    flex-direction: column;

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`