import React from "react";

import { Grid } from "./styles";
import {
  MainContent,
  MainHeader,
  RightContent,
  ServerName,
  ServerOptions,
  ServerData,
} from "../index";

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerName />
      <MainHeader />
      <RightContent />
      <ServerOptions />
      <MainContent />
      <ServerData />
    </Grid>
  );
};

export default Layout;
