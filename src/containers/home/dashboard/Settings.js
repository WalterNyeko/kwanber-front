import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { styles } from "../../../styles/Settings";
import { withStyles } from "@material-ui/core/styles";
import { getLanguages } from "../../languages/GrabLanguage";
import GET_ALL_DISTRICTS from "../../../graphql/queries/districts/districts";
import { graphql } from "react-apollo";

const Settings = props => {
  const categories = getLanguages();
  const classes = styles();
  const {
    districts: { title, primary, secondary }
  } = categories;

  const { allDistricts } = props.data;
  return (
    <Paper
      className={classes.dashboardMenu}
      elevation={1}
      style={{ padding: "35px" }}
    >
      <Typography variant="h5" component="h3" style={{ padding: "0px" }}>
        {title}
      </Typography>
      <Divider />
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <List
              component="nav"
              subheader={
                <ListSubheader component="div">
                  <strong>{primary.value}</strong>
                </ListSubheader>
              }
              className={classes.root}
              style={{ float: "left" }}
            >
              {allDistricts &&
                allDistricts.length &&
                allDistricts.map(({ id, name }) => (
                  <NavLink
                    key={id}
                    to={`/analytics/primary/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText inset primary={`${name} District`} />
                    </ListItem>
                  </NavLink>
                ))}
            </List>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <List
              component="nav"
              subheader={
                <ListSubheader component="div">
                  <strong>{secondary.value}</strong>
                </ListSubheader>
              }
              className={classes.root}
              style={{ float: "left" }}
            >
              {allDistricts &&
                allDistricts.length &&
                allDistricts.map(({ id, name, description }) => (
                  <NavLink
                    key={id}
                    to={`/analytics/secondary/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText inset primary={`${name} District`} />
                    </ListItem>
                  </NavLink>
                ))}
            </List>
          </div>
        </div>
      </div>
    </Paper>
  );
};
export default graphql(GET_ALL_DISTRICTS)(Settings);
