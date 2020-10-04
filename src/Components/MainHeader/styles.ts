import styled  from 'styled-components'
import {shade} from 'polished';


export const Container = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`;


export const Input = styled.input`
    width:340px;
    height:48px;
    background: #F8F8F8;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 50px;
    color: var( --color-yelow);
    padding:24px;



    &::placeholder{
        color: var(--color-border);
    }
`;


export const Button = styled.button` 
    width: 101px;
    height: 48px;
    background: #F8B919;
    border-radius: 50px;
    transition: background .2s;
    >p{
        color:var(--secondary-color);
    }
    &:hover{
        background: ${shade(0.2,'#F8B919')}
    }
`;