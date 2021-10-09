import React from 'react';
import ReactWOW from 'react-wow'
import {
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Card,
  Button,
  Divider,
} from '@mui/material';
import CustomCard from './card';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './project.css';
export default function Project() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const projectsArr = [
    {
      name: ' Course Registration',
      tech: ['C#', 'HTML', 'ASP.NET'],
      gitUrl: 'https://github.com/EdmondnNi/Course_regis',
      delay : 'one'
    },
    {
      name: 'Curremcy Converter',
      tech: ['TypeScript', 'HTML & CSS' ,'Angular'],
      gitUrl: "https://github.com/EdmondnNi/Currency-converter-app",
      delay : 'two'
    },
    {
      name: 'Counter WebApp',
      tech: ['Javascript', 'HTML', 'React'],
      gitUrl: "https://github.com/EdmondnNi/Currency-converter-app",
      delay : 'three'
    },
  ];
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
          <CustomCard style={{ padding: matchesSM ? '1em' : '2em 4em' }}>
            <Grid container direction="column" spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="h4">Project!</Typography>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item xs={6}>
                  <Divider />
                </Grid>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item xs={10}>
                  <Typography
                    variant="body2"
                    color="#2978B5"
                    style={{
                      marginTop: '0.6em',
                      letterSpacing: '0.1em',
                    }}
                    align="center"
                  >
                    Explore my recent projects! By going to the github you will be able to veiw more projects
                  </Typography>
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                {projectsArr.map((pro) => (
                  <Grid item md={4} sm={6} xs={12} key={pro.name} className={`animate__animated animate__bounceInLeft ${pro.delay}`} >
                    <div >
                    <Card
                      elevation={0}
                      style={{
                        boxShadow: '0 3px 3px 0 rgb(0 0 0 / 15%)',
                        padding: '2em',
                        cursor: 'pointer',
                      }}
                      className="card"
                    >
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="space-between"
                        style={{ height: '10em' }}
                      >
                        <Grid item>
                          <Typography
                            variant="h6"
                            style={{
                              textTransform: 'none',
                              color: '#444444',
                              lineHeight: 1,
                            }}
                          >
                            {pro.name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Grid container direction="column" spacing={0}>
                            <Grid item>
                              <Grid
                                container
                                spacing={2}
                                justifyContent="center"
                              >
                                {pro.tech.map((t) => (
                                  <Grid item key={t}>
                                    <Typography
                                      variant="body"
                                      style={{ 
                                        fontFamily:'Poppins',
                                        fontSize: '10px',
                                    }}
                                      
                                    >
                                      {''}
                                      {t}
                                    </Typography>
                                  </Grid>
                                ))}
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Grid
                                container
                                justifyContent="center"
                                spacing={2}
                              >
                              {/*
                                <Grid item>
                                  <a
                                    href= "gitUrl"
                                    style={{
                                      textDecoration: 'none',
                                      color: 'inherit',
                                    }}
                                  >
                                    
                                    <GitHubIcon
                                      fontSize="large"
                                      sx={{
                                        transition:
                                          'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                        '&:hover': {
                                          color: '#42B9FC',
                                          borderBottom: '3px solid #42B9FC',
                                        },
                                      }}
                                    />
                                  </a>
                                </Grid>
                                    */}
                            <Grid item>
                                  <a
                                    href='https://github.com/EdmondnNi'
                                    style={{
                                      textDecoration: 'none',
                                      color: 'inherit',
                                    }}
                                  >
                                    <LaunchIcon
                                      fontSize="large"
                                      sx={{
                                        transition:
                                          'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                        '&:hover': {
                                          color: '#42B9FC',
                                          borderBottom: '3px solid #42B9FC',
                                        },
                                      }}
                                    />
                                  </a>
                                    </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                    </div>
                  </Grid>
                ))}
              </Grid>

              <Grid
                container
                justifyContent="center"
                style={{ marginTop: '2em' }}
              >
                <Button
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    width: 150,
                    height: 50,
                    boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
                  }}
                >
                  <a href="https://github.com/EdmondnNi"
                   style={{ textDecoration: 'none' }}>
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: '1em',
                        color: 'black',
                        textTransform: 'capitalize',
                      }}
                    >
                      Github
                    </Typography>
                  </a>
                </Button>
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
