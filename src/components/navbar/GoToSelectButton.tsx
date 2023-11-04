import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

export default function ButtonSelect() {
  const theme = useTheme();

  return (
    <Stack spacing={2} direction="row">
      <Button
        sx={{
          borderRadius: '30px',
          backgroundColor: '#205072',
          color: '#fff',
          [theme.breakpoints.down('md')]: {
            display: 'flex',
            right: '10%',
            height: '70%',
            width: '30%',
            marginTop: '8px !important',
          },
        }}
        variant="contained"
      >
        GO
      </Button>
    </Stack>
  );
}
