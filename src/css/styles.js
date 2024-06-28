import styled from 'styled-components';
export const ProductsArea = styled.div`
display: flex;
gap: 50px;
flex-wrap: wrap;
justify-content: center;
allign-items: center;

div{
    width: 230px;
    height 320px;
    border: 1px solid rgb(120,120,120); 
    display: flex
    justify-content: space-betwen;
    flex-direction: column;
    allign-items: center;
    padding: 20px;
    background: rgb(59,59,59);
    margin-botton: 70px;
    button{
        font-size: 25px;
        background: transparent;
        border: none;
        color: crimson;
    }
}
`
;