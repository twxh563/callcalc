import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';
const ToolBar = ({ children }) => {
  return (
    <>
      <Box sx={{ width: '95%', p: 1 }}>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button variant="contained">Новая смена</Button>
          <Button variant="contained" startIcon={<SettingsIcon />}>Настройки</Button>
        </Stack>
      </Box>
    </>
  );
}

export default ToolBar;