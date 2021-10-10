import React from 'react';
import { Card, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

import HomeIMG from '../assets/HomeSVG.svg';
import CustomCard from './card';
export default function About() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: matchesSM ? '2em' : '3em' }}
      >
        <Grid item xs={10}>
          <CustomCard>
            {/* Main row */}
            <Grid
              container
              justifyContent="center"
              wrap={matchesSM ? 'wrap' : 'nowrap'}
            >
              {/* For image */}
              <Grid item>
                <img src={HomeIMG} 
                style={{
                  width: '460px',
                  height: '312px',
                }}
              />
              </Grid>
              {/* for Text */}
              <Grid item>
                <Grid container direction="column" spacing={4}>
                  <Grid item className="animate__animated animate__zoomIn">
                    <Typography variant="body1">Hello, I'm Edmond</Typography>
                  </Grid>
                  <Grid item style={{ marginLeft: '4.5em' }} className="animate__animated animate__fadeIn animate__zoomIn">
                    <Typography variant="h4">Welcome to my World!</Typography>
                  </Grid>
                  <Grid item container justifyContent="center" className="animate__animated  animate__fadeInUp">
                    <Typography
                      variant="body2"
                      color="#2978B5"
                      style={{
                        width: matchesSM ? '80%' : '50%',
                        marginTop: '2em',
                      }}
                    >
                      I am student who is soon going to graduate in Full Stack Deveolper program at Roberoton College.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
