import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px',
  backgroundColor: '#fff',
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  display: 'flex',
  marginLeft: 0,
  left: '25%',
  width: '50px',

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '20%',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(4),
    width: '25%',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing(5),
    width: '30%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const theme = createTheme();

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '90px', backgroundColor: '#205072' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              marginBottom: '-20px',

              display: {
                xs: 'block',
                sm: 'inline',
              },
              marginTop: {
                xs: '10px',
                sm: '0',
              },
            }}
          >
            EVENT PROJECT
          </Typography>
          <Search
            sx={{
              marginTop: '20px',
              marginLeft: '0',
              [theme.breakpoints.up('sm')]: {
                marginLeft: '-50px',
              },
              [theme.breakpoints.up('md')]: {
                marginLeft: '-100px',
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" sx={{ width: '500px', display: 'flex', justifyContent: 'center' }} inputProps={{ 'aria-label': 'search' }} />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: {
                xs: 'flex',
              },
            }}
          >
            <IconButton edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit">
              <AccountCircle sx={{ fontSize: '2rem', marginTop: '20px' }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
