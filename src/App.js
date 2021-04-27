import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import data from "./data";
import SetAccordion from "./SetAccordion";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#4b145b",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  container: {
    backgroundColor: "#4b145b",
  },
  title: {
    fontWeight: "fontWeightBold",
  },
  aligncenter: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const App = () => {
  const classes = useStyles();
  const [questions, setQuesions] = useState(data);

  const renderQuestion = questions.map((question) => {
    return <SetAccordion question={question} />;
  });

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Box component="div" className={classes.aligncenter}>
          <Container className={classes.container} maxWidth="md">
            <Paper elevation={3}>
              <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item xs={12} container spacing={2}>
                    <Grid item sm={12} md={4}>
                      <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h5">
                          <Box fontWeight="fontWeightBold">
                            Questions And Answers About Login
                          </Box>
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item sm={12} md={8}>
                      {renderQuestion}
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Container>
        </Box>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default App;
