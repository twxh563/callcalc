import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';

const InputBar = ({ children }) => {
    return (
      <>
        <Box sx={{ width: '95%', p: 1 }}>
        <Stack spacing={2} direction="row" justifyContent="center">
          <TextField 
            id="fuel" 
            label="Бензин" 
            variant="outlined" 
            size="small" 
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">л</InputAdornment>,
            }}
          />
          <TextField 
            id="odometr" 
            label="Одометр" 
            variant="outlined" 
            size="small"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">км</InputAdornment>,
            }}
          />
        </Stack>
      </Box>
      </>
    );
  }
  
  export default InputBar;