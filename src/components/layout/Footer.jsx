import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CalculateIcon from '@mui/icons-material/Calculate';


const Footer = ({ children }) => {
  return (
    <>
      <Box sx={{ width: '95%', p: 1 }}>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained" ><AddCircleOutlineIcon fontSize="large" /></Button>
          <Button variant="contained" ><CalculateIcon fontSize="large" /></Button>
        </Stack>
        <div>{window.innerWidth} x {window.innerHeight}</div>
      </Box>
    </>
  );
}

export default Footer;