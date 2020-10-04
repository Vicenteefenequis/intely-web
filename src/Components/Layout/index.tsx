import React from 'react';

import { Grid } from './styles';
import ServerName from '../ServerName'
import RightContent from '../RightContent'
import MainHeader from '../MainHeader'
import ServerOptions from '../ServerOptions'

const Layout: React.FC = () => {
  return (
    <Grid>
        <ServerName/>
        <MainHeader/>   
        <RightContent/>
        <ServerOptions/>
    </Grid>
  )
}

export default Layout;