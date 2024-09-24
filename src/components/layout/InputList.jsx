import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Chip from '@mui/material/Chip';
import CitySelect from '../CitySelect'
import TextField from '@mui/material/TextField';


const InputList = ({ children }) => {
  return (
    <>
      <Box sx={{ width: '95%', p: 1 }}>
        <Stack spacing={2} justifyContent="center">
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button ><RemoveCircleIcon /></Button>
            <Chip label="1." variant="outlined" />
            <TextField
              variant="standard"
              type="number"
              style={{ width: 100 }}
              InputProps={{
                endAdornment: <InputAdornment position="end">км</InputAdornment>,
              }}
            />
            <CitySelect />
          </Stack>

          <Stack spacing={2} direction="row" justifyContent="center">
            <Button ><RemoveCircleIcon /></Button>
            <Chip label="2." variant="outlined" />
            <TextField
              variant="standard"
              type="number"
              style={{ width: 100 }}
              InputProps={{
                endAdornment: <InputAdornment position="end">км</InputAdornment>,
              }}
            />
            <CitySelect />
          </Stack>

        </Stack>
      </Box>
    </>
  );
}

export default InputList;