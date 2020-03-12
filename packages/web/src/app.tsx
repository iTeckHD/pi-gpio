import React, { FunctionComponent } from "react";
import { Lights } from "./lights";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: theme.mixins.toolbar
}));

export const App: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Lichter</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.header} />
      <Lights />
    </>
  );
};
