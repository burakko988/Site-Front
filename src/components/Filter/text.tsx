import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function BasicTextFields() {
  return (
    <Box>
      <TextField
      sx={{width:"400px",backgroundColor:"white",borderRadius:2 }}
        id="outlined-basic"
        label="Enter Musician or Event Name or Place"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                // Butona tıklama işlemini burada tanımlayabilirsiniz.
                console.log('Button clicked');
              }}
            >
              <SearchIcon />
            </Button>
          ),
        }}
      />
    </Box>
  );
}
