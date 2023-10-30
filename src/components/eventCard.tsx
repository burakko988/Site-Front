import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

interface EventCardProps {
  resimUrl: string;
  etkinlikAdi: string;
  etkinlikYeri: string;
  etkinlikTarihi: string;
  etkinlikUcreti: string;
}

function EventCard({ resimUrl, etkinlikAdi, etkinlikYeri, etkinlikTarihi, etkinlikUcreti }: EventCardProps) {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={resimUrl} alt="Etkinlik Resmi" />
      <CardContent>
        <Typography variant="h5" component="div">
          {etkinlikAdi}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {etkinlikYeri}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {etkinlikTarihi}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {etkinlikUcreti}
        </Typography>
        <Button variant="contained" color="secondary" style={{ marginTop: 16 }}>
          Bilet Al
        </Button>
      </CardContent>
    </Card>
  );
}

export default EventCard;
