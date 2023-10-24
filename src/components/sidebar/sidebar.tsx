import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import HomeIcon from '@mui/icons-material/Home';
import EventBusyIcon from '@mui/icons-material/EventBusy';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface TemporaryDrawerProps {
  state: Record<Anchor, boolean>;
  setState: React.Dispatch<React.SetStateAction<Record<Anchor, boolean>>>;
  toggleDrawer: (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}


export default function TemporaryDrawer({ state, setState, toggleDrawer }:  TemporaryDrawerProps) {
  
  const list = (anchor: any) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, bgcolor: '#331D2C', color: '#fff' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      height={'100%'}
    >
      <List>
        {['/', 'last-events'].map((text) => (
          <ListItem sx={{ padding: '10px' }} key={text} disablePadding>
            <ListItemButton href={`/${text == '/' ? '' : 'last-events'}`}>
              <ListItemIcon sx={{ color: '#fff' }}>
                {text == '/' && <HomeIcon />}
                {text == 'last-events' && <EventBusyIcon />}
              </ListItemIcon>
              <ListItemText primary={text == '/' ? 'Home' : 'Last Events'} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}