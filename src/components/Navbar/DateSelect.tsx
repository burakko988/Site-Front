import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from '@mui/material/Typography';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Tarih yok maalesef'];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export default function DateSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ alignItems: 'center' }}>
        <CalendarMonthIcon
          sx={{
            fontSize: '1.5rem',
            marginLeft: '10px',
            marginTop: '10px',
            [theme.breakpoints.down('lg')]: {
              display: 'none',
            },
          }}
        />
        <Typography
          variant="body1"
          sx={{
            fontSize: '13px',
            [theme.breakpoints.down('lg')]: {
              display: 'none',
            },
          }}
        >
          HISTORY
        </Typography>
      </div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>All Dates</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            background: 'white',
            borderRadius: '30px',
            height: '40px',
            marginBottom: '2%',
            [theme.breakpoints.down('lg')]: {
              display: 'flex',
              marginLeft: '20%',
              height: '40px',
              width: '50%',
              marginBottom: '2%',
            },
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              marginLeft: '20%',
              height: '40px',
              width: '50%',
              marginBottom: '2%',
            },
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              marginLeft: '30%',
              height: '40px',
              width: '30%',
              marginBottom: '2%',
            },
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
