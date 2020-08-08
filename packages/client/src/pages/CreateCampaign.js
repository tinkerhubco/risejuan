import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  styled,
} from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ReactFilestack from 'filestack-react';
import { useFormik } from 'formik';

import { Main } from '../components/Main';
import { FixedHeader } from '../components';

function getSteps() {
  return ['Campaign details', 'Campaign documents', 'Tell your story'];
}

function getStepContent({
  step,
  formik: { handleChange, setFieldValue, values },
}) {
  const campaignProofDocument = values['campaignProofDocument'];
  const coverMedia = values['coverMedia'];

  switch (step) {
    case 0:
      return (
        <Box px={8}>
          <TextField
            fullWidth
            name="targetAmount"
            label="Target amount"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            type="number"
            value={values['targetAmount']}
            variant="filled"
            onChange={handleChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              name="campaignDate"
              variant="filled"
              margin="normal"
              label="Campaign date"
              format="MM/dd/yyyy"
              value={values['campaignDate']}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              onChange={(date) => setFieldValue('campaignDate', date)}
            />
          </MuiPickersUtilsProvider>
          <TextField
            fullWidth
            label="Campaign title"
            margin="normal"
            name="campaignTitle"
            value={values['campaignTitle']}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Address"
            margin="normal"
            name="address"
            value={values['address']}
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
      );
    case 1:
      return campaignProofDocument ? (
        <S.UploadSuccessText>
          Upload campaign proof document success!
        </S.UploadSuccessText>
      ) : (
        <ReactFilestack
          apikey={process.env.REACT_APP_FILESTACK_API_KEY}
          customRender={({ onPick }) => (
            <Box>
              <S.UploadButton color="primary" size="large" onClick={onPick}>
                Upload campaign proof document
              </S.UploadButton>
            </Box>
          )}
          onSuccess={({ filesUploaded }) => {
            const fileUploaded = filesUploaded[0];

            setFieldValue('campaignProofDocument', fileUploaded);
          }}
        />
      );
    case 2:
      return (
        <Box px={8}>
          {coverMedia ? (
            <S.UploadSuccessText>
              Upload cover media success!
            </S.UploadSuccessText>
          ) : (
            <ReactFilestack
              apikey={process.env.REACT_APP_FILESTACK_API_KEY}
              customRender={({ onPick }) => (
                <S.UploadButton color="primary" size="large" onClick={onPick}>
                  Add a cover photo or video
                </S.UploadButton>
              )}
              onSuccess={({ filesUploaded }) => {
                const fileUploaded = filesUploaded[0];

                setFieldValue('coverMedia', fileUploaded);
              }}
            />
          )}
          <TextField
            fullWidth
            multiline
            label="Campaign description"
            margin="normal"
            placeholder="Tell your story"
            rows={6}
            variant="filled"
            onChange={handleChange}
          />
        </Box>
      );
    default:
      return 'Unknown step';
  }
}

export function CreateCampaign() {
  const [activeStep, setActiveStep] = React.useState(0);
  const formik = useFormik({
    initialValues: {},
  });

  const steps = getSteps();

  const [createCampaignSuccess, setCreateCampaignSuccess] = React.useState(
    true,
  );

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // TODO: implement submit
      setCreateCampaignSuccess(true);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <FixedHeader />
      <Main component="main">
        <S.Container>
          <S.Paper elevation={3}>
            {createCampaignSuccess ? (
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={10}
              >
                <S.CheckCircleIcon color="primary" fontSize="large" />
                <S.SuccessText>
                  Your campaign has been posted. Congratulations!
                </S.SuccessText>
                {/* TODO: go to my campaigns */}
              </Box>
            ) : (
              <>
                <Stepper activeStep={activeStep}>
                  {steps.map((label) => {
                    const stepProps = {};

                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                <Box p={3} pt={2}>
                  {getStepContent({ step: activeStep, formik })}
                  <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth="320px"
                    mt={3}
                    mx="auto"
                    textAlign="center"
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1
                        ? 'Submit campaign'
                        : 'Next'}
                    </Button>
                    <S.BackButton
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </S.BackButton>
                  </Box>
                </Box>
              </>
            )}
          </S.Paper>
        </S.Container>
      </Main>
    </>
  );
}

const S = {
  BackButton: styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
  })),
  Container: styled(Container)({
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  }),
  Paper: styled(Paper)({
    width: 656,
  }),
  StepTitle: styled(Typography)({
    textAlign: 'center',
  }),
  UploadButton: styled(Button)(({ theme }) => ({
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(5),
  })),
  UploadSuccessText: styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(5),
    textAlign: 'center',
  })),
  CheckCircleIcon: styled(CheckCircle)({
    fontSize: '48px',
  }),
  SuccessText: styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
  })),
};
