
import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
export interface EventCardProps {
  id: number;
  resimUrl: string;
  etkinlikAdi: string;
  etkinlikYeri: string;
  etkinlikTarihi: string;
  etkinlikUcreti: string;
}

function EventCard({ id, resimUrl, etkinlikAdi, etkinlikYeri, etkinlikTarihi, etkinlikUcreti }: EventCardProps) {
  return (
    <div className="card-component">
      <Link to={`event-details/${etkinlikAdi}`} state={id}>
        <Card style={{ maxWidth: 300, borderRadius: '20px' }}>
          <CardMedia component="img" height="200" image={resimUrl} alt="Etkinlik Resmi" />
          <CardContent>
            <Typography variant="h5" component="div">
              {etkinlikAdi}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon color="primary" style={{ marginRight: 8 }} />
                  <Typography variant="body2" color="textSecondary" component="span">
                    {etkinlikYeri}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <EventIcon color="primary" style={{ marginRight: 8 }} />
                  <Typography variant="body2" color="textSecondary" component="span">
                    {etkinlikTarihi}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                background: 'lightgray',
                borderRadius: '8px',
                padding: '8px',
                display: 'inline-block',
                width: '260px',
                marginTop: '16px',
                backgroundColor: '#56C596'
              }}
            >
              Bilet Fiyatı: <span>{etkinlikUcreti}</span>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default EventCard;
