import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import image1 from '../image/1.jpg';
import image2 from '../image/2.jpg';
import image3 from '../image/3.jpg';
import image4 from '../image/4.jpg';
import image5 from '../image/5.jpg';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    title:'CAR SERVICING',
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:image1,
  },
  {
    title:'QYICK CAR WASH',
    label: 'Bird',
    imgPath:image2,
  },
  { 
    title:'CAR SERVICING',
    label: 'Bali, Indonesia',
    imgPath:image3,
  },
  {
    title:'QUICK CAR WASH',
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:image4,
  },
  {
    title:'CAR SERVICING',
    label: 'Goč, Serbia',
    imgPath:image5,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
     maxWidth: '100%',
    flexGrow: 1,
    
  },
  img: {
    height:630,
    
    width: '100%',
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step:any) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
                <div>
              <img className={classes.img} src={step.imgPath} alt={step.label} />
              <h1 style={{color:"white", position:"absolute" ,top:"55%",left:"43%"}}>QUICK CAR WASH</h1>
              </div> 
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default Home;
