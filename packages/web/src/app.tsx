import React, { FunctionComponent } from "react";
import { Lights } from "./lights";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { createClient, ClientContextProvider } from "react-fetching-library";
import { getApiUrl } from "./get-api-url";
import { requestHostInterceptor } from "./request-host.interceptor";

const useStyles = makeStyles(theme => ({
  header: theme.mixins.toolbar
}));

const restClient = createClient({
  requestInterceptors: [requestHostInterceptor(getApiUrl())]
});

export const App: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <>
      <ClientContextProvider client={restClient}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Lichter</Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.header} />
        <Lights />
      </ClientContextProvider>
    </>
  );
};
