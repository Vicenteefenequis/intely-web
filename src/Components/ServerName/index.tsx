import React from 'react';
import Logo from '../../assets/logo.png'


 import { Container } from './styles';

const ServerName: React.FC = () => {
  return (
    <Container>
         <img src={Logo} alt="Logo Intely"/>
        <h1>Intely</h1>
    </Container>


  );
}

export default ServerName;