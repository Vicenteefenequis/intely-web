import styled from 'styled-components';

// SN - Server Name,
// RC - Right Content
//MH- Main Header 
//MC - Main Content
//SO - Server Options
//SD - Server Data

export const Grid = styled.div`
    display:grid;

    grid-template-columns: 310px auto 320px;
    grid-template-rows: 120px auto;

    grid-template-areas:
    'SN MH SO'
    'RC MC SD';
    height: 100vh;
`;
