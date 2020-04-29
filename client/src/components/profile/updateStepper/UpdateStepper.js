// IMPORTS
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

// MATERIAL UI
// -1- Styles
import { makeStyles } from '@material-ui/core/styles';
// -2- Components
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// COMPONENTS
import UpdateReview from './UpdateReview.js'
import UpdateRank from './UpdateRank.js'
import CheckUpdates from './CheckUpdates.js'

// ACTION CREATORS

// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
  UpdateStepper__root: {
        width: '100%',

        padding: '10px'
      },
      backButton: {
        marginRight: theme.spacing(1),
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
}))

// HELPER FUNCTIONS
function getSteps() {
    return ['Update Review', 'Update Rank', 'Check Updates'];
}

const steps = getSteps();

// -B- COMPONENT
function UpdatedStepper(props) {
    // Styles
    const classes = useStyles({})

    // State
    const [activeStep, setActiveStep] = React.useState(0);

    // Return
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
    
      return (
        <Paper className={classes.UpdateStepper__root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>All steps completed</Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                {activeStep === 0 &&
                    <UpdateReview />
                }
                {activeStep === 1 &&
                    <UpdateRank />
                }
                {activeStep === 2 &&
                    <CheckUpdates />
                }
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Paper>
      );
}

// MAP STATE TO PROPS
const mstp = state => {
    return {

    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {

    }
)(UpdatedStepper)