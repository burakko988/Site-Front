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
          borderRadius: '35px',
          backgroundColor: '#205072',
          color: '#fff',
          marginTop: '14px !important',
          height: '70%',
          [theme.breakpoints.down('md')]: {
            display: 'flex',
            right: '20%',
            height: '70%',
            marginTop: '14px !important',
          },
        }}
        variant="contained"
      >
        GO
      </Button>
    </Stack>
  );
}
