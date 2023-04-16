import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Tickets',
  'Payment',
  'Overview',
];

export default function HorizontalLabelPositionBelowStepper(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props.step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}