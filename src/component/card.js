import React from 'react';
import { useMediaQuery, useTheme, Card } from '@mui/material';

export default function CustomCard(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      style={{
        boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px',
        //boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: matchesSM ? '3em 1em' : '5em 4em',
        backgroundColor: '#F6F5FA',
        borderRadius: 20,
        minHeight: '520px',
        height: '520px',
        ...props.style,
      }}
    >
      {props.children}
    </Card>
  );
}
