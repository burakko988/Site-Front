import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './eventDetails.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';

export default function Share() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: 'white',
            color: 'blue',
            '&:hover': {
              backgroundColor: 'white',
            },
          }}
        >
          <ShareIcon sx={{ marginRight: 1 }} />
          Paylaş
        </Button>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <WhatsAppIcon sx={{ marginRight: 1 }} />
            WhatsApp'ta Paylaş
          </a>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <InstagramIcon sx={{ marginRight: 1 }} />
            Instagram'da Paylaş
          </a>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <TwitterIcon sx={{ marginRight: 1 }} />
            Twitter'da Paylaş
          </a>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <FacebookIcon sx={{ marginRight: 1 }} />
            Facebook'ta Paylaş
          </a>
        </Typography>
      </Popover>
    </div>
  );
}
