import React from 'react';

import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  styled,
  Divider,
  Paper,
  Button,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';
import {
  Report as ReportIcon,
  PersonOutline as PersonOutlineIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';
import { format, formatDistanceToNow } from 'date-fns';
import { useParams } from 'react-router-dom';
import useSWR, { mutate } from 'swr';
import { useFormik } from 'formik';

import {
  createGetCampaignEndpoint,
  ATTACHMENT_COVER_PHOTO_TYPE,
  createDonateEndpoint,
} from '../constants';
import { FixedHeader, Main } from '../components';
import {
  getProgressValue,
  formatNumberToAmountString,
  tryCatch,
  fetcher,
} from '../utils';

export const CampaignDetails = () => {
  const params = useParams();

  const campaignId = params['campaignId'];

  const getCampaignKey = createGetCampaignEndpoint({ campaignId });

  const { data: campaign, error } = useSWR(getCampaignKey);

  const isLoading = !campaign && !error;

  const [open, setOpen] = React.useState(false);
  const [donateSuccess, setDonateSuccess] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDonateSuccess(false);
  };

  const { handleChange, values, resetForm } = useFormik({
    initialValues: {
      isAnonymous: false,
    },
  });

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  const campaignTitle = campaign.name;
  const campaignMedia = campaign.attachments.find(
    (attachment) => attachment.type === ATTACHMENT_COVER_PHOTO_TYPE,
  ).url;

  const organizerName = campaign.organizer.nickname;

  const organizerAvatar =
    'https://s.gravatar.com/avatar/f7f024ed82aa0b143a3e07fc32d4b9bd?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png';

  const campaignCreatedDate = format(
    new Date(campaign.targetDate),
    'MMMM d,yyyy',
  );

  const campaignStory = campaign.description;

  const targetFund = campaign.targetFund;
  const currentFund = campaign.currentFund;

  const targetFundString = formatNumberToAmountString(targetFund);
  const currentFundString = formatNumberToAmountString(currentFund);

  const fundProgressValue = getProgressValue({
    current: currentFund,
    target: targetFund,
  });

  const donors = campaign.donors;

  const donorsCount = donors.length;

  const handleDonateButtonClick = async () => {
    await tryCatch(() =>
      fetcher(createDonateEndpoint({ campaignId }), {
        method: 'POST',
        body: JSON.stringify({
          amount: values['donationAmount'],
          name: values['donorName'],
          isAnonymous: values['isAnonymous'],
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );

    mutate(getCampaignKey);

    resetForm();

    setDonateSuccess(true);
  };

  return (
    <>
      <FixedHeader />
      <Main height="auto" pt={12} mb={5}>
        <Container>
          <S.CampaignTitle variant="h3">{campaignTitle}</S.CampaignTitle>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <S.ImageWrapper>
                <S.Image
                  component="img"
                  height="auto"
                  width="100%"
                  src={campaignMedia}
                />
              </S.ImageWrapper>
              <Box mt={3}>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item>
                        <Avatar src={organizerAvatar}></Avatar>
                      </Grid>
                      <Grid item>
                        <Typography>
                          <Typography color="primary" component="span">
                            {organizerName}
                          </Typography>
                          &nbsp;is organizing this fundraiser.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Button startIcon={<ReportIcon />}>Report campaign</Button>
                </Box>
                <S.OrganizerSummaryBlockDivider />
                <Typography>Created {campaignCreatedDate}</Typography>
                <S.OrganizerSummaryBlockDivider />
                <Typography variant="h5">Campaign story</Typography>
                <S.CampaignStory mt={3}>{campaignStory}</S.CampaignStory>
              </Box>
              <Box mt={4}>
                <Typography variant="h5">Updates (3)</Typography>
                <Timeline align="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <S.TimelineConnector color="primary" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <S.TimelineContentPaper elevation={2}>
                        <Typography gutterBottom variant="subtitle2">
                          August 5, 2020
                        </Typography>
                        <Typography variant="body2">
                          While we are already working on the next batch of care
                          packages, we also increased our campaign goal in order
                          to help even more affected families. So all of your
                          future donations will be used and forwarded right
                          away! :)
                        </Typography>
                      </S.TimelineContentPaper>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      <S.TimelineConnector color="primary" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <S.TimelineContentPaper elevation={2}>
                        <Typography gutterBottom variant="subtitle2">
                          May 30, 2020
                        </Typography>
                        <Typography variant="body2">
                          Thank you again to everyone who is helping us to
                          support our local communities! So far we were already
                          able to support over 250 families in need :)
                        </Typography>
                      </S.TimelineContentPaper>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <S.TimelineContentPaper elevation={2}>
                        <Typography gutterBottom variant="subtitle2">
                          May 24, 2020
                        </Typography>
                        <Typography variant="body2">
                          Thank you very much to all our first donors! We highly
                          appreciate it.
                        </Typography>
                      </S.TimelineContentPaper>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <S.StickySidebar elevation={2}>
                <Typography variant="h6">
                  ₱{currentFundString}
                  &nbsp;
                  <Typography component="span" variant="body2">
                    raised of ₱{targetFundString} goal
                  </Typography>
                </Typography>
                <S.FundProgress
                  value={fundProgressValue}
                  variant="determinate"
                />
                <S.DonorsText variant="subtitle2">
                  {donorsCount}
                  <Typography component="span">&nbsp;donors</Typography>
                </S.DonorsText>
                <Box mt={2}>
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={handleClickOpen}
                  >
                    Donate now
                  </Button>
                  <S.ShareButton
                    fullWidth
                    color="primary"
                    variant="outlined"
                    size="large"
                    onClick={() => alert('WIP')}
                  >
                    Share
                  </S.ShareButton>
                </Box>
                <Box mt={3}>
                  {donors.length ? (
                    donors.map((donor, index) => {
                      const isFirstItem = index === 0;
                      const isLastItem = index === donors.length - 1;

                      return (
                        <Box key={donor._id} mt={isFirstItem ? undefined : 2}>
                          <Box display="flex">
                            <S.PersonOutlineIcon fontSize="large" />
                            <Box display="flex" flexDirection="column">
                              <Typography variant="subtitle1">
                                {donor.isAnonymous ? 'Anonymous' : donor.name}
                              </Typography>
                              <Box display="flex">
                                <Typography variant="subtitle2">
                                  ₱{formatNumberToAmountString(donor.amount)}
                                  &nbsp;
                                  <S.DonationDateDistance
                                    component="span"
                                    variant="subtitle2"
                                  >
                                    -&nbsp;
                                    {formatDistanceToNow(
                                      new Date(donor.createdDate),
                                    )}
                                    &nbsp;
                                  </S.DonationDateDistance>
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          {!isLastItem && <S.DonorsDivider />}
                        </Box>
                      );
                    })
                  ) : (
                    <Typography>
                      Become the first supporter, your donation matters.
                    </Typography>
                  )}
                </Box>
              </S.StickySidebar>
            </Grid>
          </Grid>
        </Container>
      </Main>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">
          {donateSuccess ? 'Success' : 'Donate'}
        </DialogTitle>
        <DialogContent>
          {donateSuccess ? (
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              p={10}
            >
              <S.CheckCircleIcon color="primary" fontSize="large" />
              <S.SuccessText>
                Success! Thank you for your donation.
              </S.SuccessText>
              {/* TODO: go to my campaigns */}
            </Box>
          ) : (
            <>
              <TextField
                fullWidth
                name="donationAmount"
                label="Donation amount"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₱</InputAdornment>
                  ),
                }}
                type="number"
                value={values['donationAmount']}
                variant="filled"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                name="donorName"
                label="Your name"
                values={values['donorName']}
                onChange={handleChange}
              />
              <S.CheckboxFormControl
                margin="normal"
                control={
                  <Checkbox
                    checked={values['isAnonymous']}
                    onChange={handleChange}
                    name="isAnonymous"
                    color="primary"
                  />
                }
                label="Donate anonymously"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          {!donateSuccess && (
            <Button
              onClick={handleDonateButtonClick}
              color="primary"
              variant="contained"
            >
              Donate now
            </Button>
          )}
          <Button onClick={handleClose} color="primary">
            {donateSuccess ? 'Close' : 'Cancel'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const S = {
  CampaignStory: styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
  })),
  CampaignTitle: styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(6),
  })),
  OrganizerSummaryBlockDivider: styled(Divider)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  })),
  TimelineConnector: styled(TimelineConnector)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  })),
  TimelineContentPaper: styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
  })),
  StickySidebar: styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    position: 'sticky',
    top: theme.spacing(15),
  })),
  FundProgress: styled(LinearProgress)(({ theme }) => ({
    marginTop: theme.spacing(1),
  })),
  DonorsText: styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
  })),
  ShareButton: styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
  })),
  PersonOutlineIcon: styled(PersonOutlineIcon)(({ theme }) => ({
    marginRight: theme.spacing(2),
  })),
  DonationDateDistance: styled(Typography)(({ theme }) => ({
    color: theme.palette.grey['600'],
  })),
  DonorsDivider: styled(Divider)(({ theme }) => ({
    marginTop: theme.spacing(1),
  })),
  ImageWrapper: styled(Box)({
    position: 'relative',
    paddingBottom: '56.25%',
  }),
  Image: styled(Box)({
    position: 'absolute',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  }),
  CheckboxFormControl: styled(FormControlLabel)(({ theme }) => ({
    marginTop: theme.spacing(2),
  })),
  CheckCircleIcon: styled(CheckCircleIcon)({
    fontSize: '48px',
  }),
  SuccessText: styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
  })),
};
