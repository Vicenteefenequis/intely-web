import styled,{css} from 'styled-components';


type ColorVariantProps = { 
    variants?: "white" | "green";
}

const colorCardVariants = {
    green:  css`
        background-color:#275E2E;
        color:#FFF;
    `,
    white: css`
        background-color:#FFF;    
        color:#275E2E;
    `
}

const colorBadgeVariants = {
    green:  css`
        background-color:#638567;
        color:#FFF;
`,
white: css`
    background-color:#EFEFEF;
    color:#275E2E;  
`
} 


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    background: #F8F8F8;
    border: 1px solid #EFEFEF;
    border-radius: 50px 50px 0px 0px;
`;

export const CardsWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`;


export const ProgressBadge = styled.div<ColorVariantProps>`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 53px;
    height: 49px;    
    border-radius: 10px;
    ${(props) => colorBadgeVariants[props.variants || "white"]};
`;


export const Card = styled.div<ColorVariantProps>` 
    display:flex; 
    align-items:flex-end;
    justify-content:start;
    padding:12px;
    width: 261px;
    height: 273px;
    border-radius: 50px;
    border: 1px solid #EFEFEF;
    ${(props) => colorCardVariants[props.variants || "white"]}
    
    > div {
        width:200px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin: 0 0 20px 20px;
    }
    h4{
            line-height:25px;
            font-weight:400;
    }
    strong{
        font-weight:700;
    }

`;
