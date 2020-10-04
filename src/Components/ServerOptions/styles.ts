import styled from 'styled-components';
import { FiSettings,FiBell} from 'react-icons/fi'

export const Container = styled.div`
    grid-area:SO;

    display:flex;
    align-items:center;
    justify-content:flex-end;
    margin-right:24px;

    >button{
        margin-right:12px;
    }

    button{
        background:transparent;
    }
`;



export const IconSettings = styled(FiSettings)`
    color:var(--color-border);
    transition: color .2s;
    &:hover{
        color:#F8B919;
    }

`;
export const IconsBell = styled(FiBell)`
    color:var(--color-border);
    transition: color .2s;
    &:hover{
        color:#F8B919;
    }

`;
