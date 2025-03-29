import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#212121",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    fontWeight: "bold",
  },
}));

export function NavBar() {
  const classes = useStyles();

  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Tabs
            value={algorithm}
            onChange={(event, id) => setAlgorithm(id)}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {sortingAlgorithms.map((algorithm) => (
              <Tab
                label={algorithm.title}
                {...a11yProps(0)}
                key={algorithm.title}
                className={classes.tab}
              />
            ))}
            <Tab label="Compare" {...a11yProps(11)} className={classes.tab} />
          </Tabs>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
