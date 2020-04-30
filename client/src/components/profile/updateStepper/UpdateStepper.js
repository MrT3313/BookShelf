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
import { a_getSelectedLog } from '../../../redux/actions/GET/a_getSelectedLog.js'

import { a_updateRank } from '../../../redux/actions/PUT/a_updateRank.js'
import { a_updateReview } from '../../../redux/actions/PUT/a_updateReview.js'

import { a_addReview } from '../../../redux/actions/POST/a_addReview'
import { a_addRank } from '../../../redux/actions/POST/a_addRank'


// === === === === === === === === === === === === //
// === === === === === === === === === === === === //

// __MAIN__
// -A- STYLES
const useStyles = makeStyles(theme => ({
  UpdateStepper__root: {
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
  const {
    selected_logID,             // Passed Props 
    setIsEditing,               // Passed Props

    a_getSelectedLog,           // Action Creator
    a_updateRank,               // Action Creator
    a_updateReview,             // Action Creator
    a_addReview,                // Action Creator
    a_addRank,                  // Action Creator

    selectedLogData,            // Redux
} = props
// -- //
    // Styles
    const classes = useStyles({})

    // State
    const [activeStep, setActiveStep] = useState(0);
    const [updatedReview, setUpdatedReview] = useState(undefined)
    const [updatedRank, setUpdatedRank] = useState(undefined)


    // UseEffect 
    useEffect(() => {
      if (selected_logID) {
          // console.log('EXPLORE SELECTED LOG_ID')
          a_getSelectedLog(selected_logID)
      }
    }, [selected_logID])

    // Methods
    const update = async () => {
      // console.log(updatedReview)
      // console.log(updatedRank)

      // REVIEW
      if (updatedReview !== undefined){
        if (selectedLogData.reviewID) {
          await a_updateReview(updatedReview, selectedLogData)
        } else {
          await a_addReview(
            {
              review: updatedReview, 
              logID: selectedLogData.logID
            },
            selectedLogData
          )
        }
      }

      // RANK
      if (updatedRank !== undefined){
        if (selectedLogData.rankID && updatedRank !== undefined) {
          await a_updateRank(updatedRank, selectedLogData)
        } else {
          await a_addRank(
            {
              rank: updatedRank,
              logID: selectedLogData.logID 
            },
            selectedLogData
          )
        }
      }

      // Update Selected Log
      a_getSelectedLog(selected_logID)
      
      // Clear State
      setUpdatedReview(false)
      setUpdatedRank(false)

      // Close Edit Pannel
      setIsEditing(false)
    }

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
                    <UpdateReview 
                      selectedData={selectedLogData}
                      setUpdatedReview={setUpdatedReview}
                    />
                }
                {activeStep === 1 &&
                    <UpdateRank 
                      selectedData={selectedLogData}
                      setUpdatedRank={setUpdatedRank}
                    />
                }
                {activeStep === 2 &&
                    <CheckUpdates 
                      selectedData={selectedLogData}
                      updatedReview={updatedReview}
                      updatedRank={updatedRank}
                    />
                }
                <div>
                  <Button 
                    onClick={() => setIsEditing(false)}
                    style={{color: 'red'}}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={activeStep === steps.length - 1 ? update : handleNext}
                  >
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
      selectedLogData: state.r_selectedLog.selectedLog,
    }
}
        
// CONNECT & EXPORT
export default connect(
    mstp,
    {
      a_getSelectedLog,

      a_addReview, a_addRank,
      a_updateRank, a_updateReview
    }
)(UpdatedStepper)