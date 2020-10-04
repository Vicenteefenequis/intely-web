import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    html , body , #root{
        height:100%;
    }

    *,button,input{
        border:0;
        outline:0;
        font-family: 'Roboto',sans-serif;
    }

    :root{
       --color-yelow: #F8B919;
       --primary-color: #275E2E;
       --secondary-color: #F8F8F8;
       --color-border:#c4c4c4;
       --text-color:#6A6A6A;
    }



`;