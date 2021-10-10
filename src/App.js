import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import About from './component/about';
import {
  Grid,
  Paper,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import Skills from './component/skills';
import Project from './component/project';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppBar from './component/AppBar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Resume from './component/resume';

import profile from './assets/Edmond.png';
import logo from './assets/Logo.svg';
import map from './assets/Maps.png';
import hi from './assets/hi.gif';
import location from './assets/locationpin.png';
import book from './assets/book.png';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';

export default function App() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Grid container style={{ backgroundColor: '#F6F5FA', minHeight: '100vh' }} >
      {/* left bar */}
      <Grid item lg={3} xs={12}>
        <Grid
          container
          direction={'column'}
          alignItems={matchesSM ? 'center' : undefined}
          className="animate__animated animate__fadeInLeft"
        >
          {/* logo */}
          <Grid
            style={{ width: matchesSM ? '90%' : '100%', marginTop: '0.5em' }}
            item
            container
            justifyContent={matchesSM ? 'space-between' : 'center'}
            alignItems="center"
          >
            <img src={logo} style={{ width: '3em', height: '2.5em' }} />
            {matchesSM && (
              <IconButton onClick={() => setOpenDrawer(true)}>
                <LegendToggleIcon />
              </IconButton>
            )}
          </Grid>

          {/* left div */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Grid
              container
              direction={'column'}
              justifyContent="center"
              alignItems="center"
              spacing={8}
              elevation={0}
              style={{
                borderRadius: 20,
                paddingBottom: '1em',
                boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
                //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: matchesSM ? '90%' : '80%',
                marginTop: '2em',
                backgroundColor: '#F6F5FA',
              }}
            >
              <Grid
                item
                style={{
                  // display: 'flex',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // margin: '1em 0px',
                  // overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {' '}
                {/* first image div */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    // position: "relative"
                  }}
                >
                  <span>
                    <img
                      src={hi}
                      style={{
                        position: 'absolute',
                        left: '-10px',
                        top: '40px',
                        color: 'red',
                        zIndex: 9999,
                        // border: "3px solid white",
                        // borderRadius: 20,
                        width: '60px',
                        height: '60px',
                      }}
                    />
                  </span>
                  <img
                    src={profile}
                    style={{
                      border: '3px solid white',
                      borderRadius: 15,
                      width: '130px',
                      height: '130px',
                    }}
                  />
                </div>
              </Grid>
              <Grid
                item
                style={{
                  // display: 'flex',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // margin: '1em 0px',
                  // overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {' '}
                {/* second image div */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    // position: "relative"
                  }}
                >
                  <span>
                    <img
                      src={location}
                      style={{
                        position: 'absolute',
                        left: '3px',
                        top: '20px',
                        color: 'red',
                        zIndex: 9999,

                        // transform: "translateX",
                        // border: "3px solid white",
                        // borderRadius: 20,
                        // transform: 'rotate(-55deg)',
                        width: '35px',
                        height: '35px',
                      }}
                    />
                  </span>
                  <img
                    src={map}
                    style={{
                      border: '3px solid white',
                      borderRadius: 15,
                      width: '130px',
                      height: '95px',
                    }}
                  />
                </div>
              </Grid>
              <Grid item>
                {' '}
                {/* third image div */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    position: 'relative',
                  }}
                >
                  <span>
                    <img
                      src={book}
                      style={{
                        position: 'absolute',
                        left: '-30px',
                        top: '30px',
                        color: 'red',
                        zIndex: 9999,

                        // transform: "translateX",
                        // border: "3px solid white",
                        // borderRadius: 20,
                        // transform: 'rotate(-55deg)',
                        width: '25px',
                        height: '25px',
                      }}
                    />
                  </span>

                  <div
                    style={{
                      // border: "3px solid white",
                      backgroundColor: '#EDF2F8',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 20,
                      flexDirection: 'column',
                      width: '140px',
                      height: '105px',
                    }}
                  >
                    <Typography variant="body1" style={{ fontSize: '0.7em' }}>
                      Robertson College
                    </Typography>

                    <span
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      <ArrowRightAltIcon />
                      <Typography variant="body1" style={{ fontSize: '0.6em' }}>
                        Full-Stack Dev
                      </Typography>
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid item>
                {/* fourth image div */}
                <div
                  style={{
                    borderRadius: 20,
                    overflow: 'hidden',
                    // border: "3px solid white",
                    backgroundColor: '#EDF2F8',
                    width: '140px',
                    height: '105px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ paddingLeft: '0.5em', paddingTop: '0.5em' }}>
                    <a
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      href="https://github.com/EdmondnNi"
                    >
                      <GitHubIcon
                        style={{ fontSize: '2em', color: '#DADEE1' }}
                      />
                    </a>
                  </div>
                  <div
                    style={{
                      paddingRight: '0.5em',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                    }}
                  >
                    <a
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      href="https://www.linkedin.com/in/edmond-niyubu-432905216/"
                    >
                      <LinkedInIcon
                        style={{ fontSize: '2em', color: '#DADEE1' }}
                      />
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item>
                {' '}
                {/* bottom button */}
                <div
                  style={
                    {
                      // borderRadius: 20,
                      // overflow: "hidden",
                      // border: "3px solid white"
                    }
                  }
                >
                  <Button
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid gray',
                    }}
                  >
                    <Link to="/resume" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="body1"
                        style={{
                          fontSize: '0.8em',
                          color: 'black',
                          textTransform: 'capitalize',
                        }}
                      >
                        View Resume
                      </Typography>
                    </Link>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* right bar */}
      <Grid item lg={9} xs={12}>
        <AppBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

        <div style={{ width: '100%' }}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Redirect
                to={{
                  pathname: '/about',
                  // state: { from: location }
                }}
              />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/project">
              <Project />
            </Route>

            <Route path="/skills">
              <Skills />
            </Route>

            <Route path="/resume">
              <Resume />
            </Route>

            <Route path="*">
              <h1>not found</h1>
            </Route>
          </Switch>
        </div>
      </Grid>
    </Grid>
  );
}
