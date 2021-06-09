import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useQuery } from "@apollo/client";
import { Divider, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { GET_USERINFO_QUERY, GET_USERDATA_QUERY } from "../../graphql/Queries";
import Cards from "../cards/cards";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data, loading } = useQuery(GET_USERDATA_QUERY);
  let userData;
  if (!loading && data) {
    userData = data.getAllUsersWithData.data;
  }
  console.log("userData", userData);

  const { data: userInfo, loading: isLoading } = useQuery(GET_USERINFO_QUERY);
  let userInfoData;
  if (!isLoading && userInfo) {
    userInfoData = userInfo.getAllUserSvc.data;
  }
  console.log("Data", userInfo);

  if (!userInfo) {
    return (
      <Snackbar open autoHideDuration={3000}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
          style={{ vertical: "top", horizontal: "right" }}
        >
          Network Error
        </MuiAlert>
      </Snackbar>
    );
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary"
      >
        <Tab label="Listing Normal" {...a11yProps(0)} />
        <Tab label="Listing service to service" {...a11yProps(1)} />
        <Divider orientation="vertical" fullwidth />
      </Tabs>

      {/* LISTING NORMAL */}

      <TabPanel value={value} index={0}>
        {userData?.map((item, index) => (
          <Cards name={item.name} index={index} city={item.city} />
        ))}
      </TabPanel>

      {/* LISTING SERVICE TO SERVICE */}

      <TabPanel value={value} index={1}>
        {userInfoData?.map((item, index) => (
          <Cards name={item.name} index={index} city={item.city} />
        ))}
      </TabPanel>
    </div>
  );
}

export { VerticalTabs };
