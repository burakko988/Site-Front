import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FilterComponent from '../Filter/filter';

interface ButtonAppBarProps {
  showOnHome: boolean;
}

export const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ showOnHome }) => {


  // const [showHome, setShowHome] = React.useState(true)


  return (
    <>
      {showOnHome && (
        <FilterComponent />
      )}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#331D2C", padding: '15px' }}>
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              EVENT PROJECT
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
