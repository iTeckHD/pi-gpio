import React, { FunctionComponent } from "react";
import { List, Paper } from "@material-ui/core";
import { Light } from "./light";

export const Lights: FunctionComponent = () => {
  return (
    <Paper elevation={6}>
      <List>
        <Light id={1} name="Licht 1" />
        <Light id={2} name="Licht 1" />
        <Light id={3} name="Licht 1" />
      </List>
    </Paper>
  );
};
