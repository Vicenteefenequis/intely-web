import styled , {css} from 'styled-components';
import  {shade} from 'polished'


interface PropsCard {
    width?: number;
    color:string;
}

export const Container = styled.div`
    grid-area: RC;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    max-height:100vh;
`;

export const Card = styled.div<PropsCard>`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:12px;
    border: 1px solid var(--color-border);
    box-sizing: border-box;
    border-radius: 10px;
    h1{
        font-size:19px;
        margin-right:12px;;
        color:var( --primary-color);
    }
    h3,p{
        color:white;
    }
    p {
        margin-top:35px;
    }
    ${props => props.color === 'yellow' && 
        css `
             background:var(--color-yelow);
             padding:25px;
        `
    }
    ${props => props.color === 'gray' && 
      css`background:var(--secondary-color)`
    }
   
`;

export const BollCard = styled.button`
    width: 67px;
    height:67px;
    background: var(--primary-color);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;

    &:hover{
        background: ${shade(0.2,'#275E2E')}
    }
`;


export const Menu = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:50px;
     div{
        display:flex;
        margin-top:12px;
        >p{
            font-size:15px;
            margin-left:12px;
            color:var(--text-color);
        }
    }

    + div {
        margin-top:60px;
    }

`;