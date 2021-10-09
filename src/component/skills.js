import { Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import CustomCard from './card';
import './skill.css';
export default function Skills() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  let skillsArr = [
    'Java',
    'C#',
    '.NET',
    'JavaScript',
    'TypeScript',
    'HTML & CSS',
    'ReactJS',
    'AngularJS',
    'ASP.NET',
    'MUI',
    'Azure',
    'Github & Git',
    'SQL => MSSQL',
    'Busness Communication',

   
    
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
          <CustomCard>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  style={{
                    textTransform: 'uppercase',
                    color: '#444444',
                    lineHeight: 1.2,
                  }}
                >
                  SKILLS
                </Typography>
              </Grid>
              <Grid item container justifyContent="center">
                <Grid item xs={5}>
                  <ul
                    className="skills__list"
                    style={{ padding: matchesSM ? 0 : '0.4em 1.4em' }}
                  >
                    {skillsArr.map((s) => (
                      <li className="skills__list-item btn btn--plain" key={s}>
                        <Typography
                          variant="h9"
                          style={{
                            textTransform: 'none',
                            color: '#555',
                          }}
                        >
                          {s}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
