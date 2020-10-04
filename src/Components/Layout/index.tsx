import React from 'react';

import { Grid } from './styles';
import ServerName from '../ServerName'
import RightContent from '../RightContent'
import MainHeader from '../MainHeader'

const Layout: React.FC = () => {
  return (
    <Grid>
          <ServerName/>
          <RightContent/>
          <MainHeader/>
    </Grid>
  )
}

export default Layout;