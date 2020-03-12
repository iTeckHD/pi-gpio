import React, { FunctionComponent } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { useQuery, useMutation } from "react-fetching-library";
import { orange, grey } from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  bulb: {
    "-webkit-transition": "color 0.75s",
    "-moz-transition": "color 0.75s",
    "-o-transition": "color 0.75s",
    transition: "color 0.75s"
  },
  on: {
    color: orange[500]
  },
  off: {
    color: grey[500]
  }
}));

interface Props {
  id: number;
  name: string;
}

export const Light: FunctionComponent<Props> = props => {
  const [checked, setChecked] = React.useState(false);
  const { payload, query, loading } = useQuery<boolean>({
    method: "GET",
    endpoint: "/api/lights/" + props.id
  });
  const { mutate } = useMutation(() => ({
    method: "POST",
    endpoint: "/api/lights/" + props.id + "/_toggle"
  }));
  const classes = useStyles();

  React.useEffect(() => {
    if (!loading && payload !== void 0 && payload !== null) {
      setChecked(payload);
    }
  }, [loading]);

  const handleClick = async () => {
    const result = await mutate({});
    if (result.status && result.status < 500) {
      query();
    }
  };

  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <EmojiObjectsIcon
          className={clsx(classes.bulb, {
            [classes.on]: checked,
            [classes.off]: !checked
          })}
        />
      </ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItem>
  );
};
