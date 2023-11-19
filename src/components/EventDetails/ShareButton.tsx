import * as React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
  FacebookIcon
} from 'react-share';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import slugify from 'slugify';

export default function Share(props: any) {
  const { title } = props

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const slugTitle = slugify(title, { lower: true });
  console.log('slugTitle', slugTitle);;

  const shareUrl = `https://eventoria-front.vercel.app/event-details/${slugTitle}`;
  // const shareUrl = window.location.href;
  // const shareUrl = 'https://www.github.com';


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
          <WhatsappShareButton url={shareUrl} title={title} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <WhatsappIcon size={24} round />
            Whatsapp'da Paylaş
          </WhatsappShareButton>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <div>
            <TwitterShareButton url={shareUrl} title={title} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <XIcon size={24} round />
              Twitter'da Paylaş
            </TwitterShareButton>
          </div>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <div>
            <FacebookShareButton hashtag="#event" url={shareUrl} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FacebookIcon size={24} round />
              Facebook'ta Paylaş
            </FacebookShareButton>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
