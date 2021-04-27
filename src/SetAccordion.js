import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SetAccordion = ({ question }) => {
  const classes = useStyles();

  return (
    <div key={question.id} className={classes.root}>
      <Accordion elevation={6}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={question.id}
        >
          <Typography className={classes.heading}>
            <Box fontWeight="fontWeightBold">{question.title}</Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{question.info}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SetAccordion;
