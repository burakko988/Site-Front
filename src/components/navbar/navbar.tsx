import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FilterComponent from '../Filter/filter';

interface ButtonAppBarProps {
  showOnHome: boolean;
}

export const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ showOnHome }) => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // const [showHome, setShowHome] = React.useState(true)
  const toggleDrawer = (anchor: any, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      {showOnHome && (
        <FilterComponent />
      )}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#331D2C", padding: '15px' }}>
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BERKAN VE BUSRA CALISIYORRR
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
