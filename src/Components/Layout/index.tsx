import React from 'react';

import { Grid } from './styles';
import {
  MainContent,
  MainHeader,
  RightContent,
  ServerName,
  ServerOptions
} from '../index';


const Layout: React.FC = () => {
  return (
    <Grid>
        <ServerName/>
        <MainHeader/>   
        <RightContent/>
        <ServerOptions/>
        <MainContent/>
    </Grid>
  )
}

export default Layout;