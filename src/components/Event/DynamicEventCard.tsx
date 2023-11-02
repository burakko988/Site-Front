import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export interface DynamicEventCardProps {
  event: {
    _id: string;
    imageUrl: string;
    title: string;
    location: string;
    startDate: Date;
    endDate: Date;
    ticketPrice: string;
  };
}

function DynamicEventCard({ event }: DynamicEventCardProps) {
  const { _id, title } = event;

  const formattedDate = event.startDate && dayjs(event.startDate).isValid() ? dayjs(event.startDate).format('DD.MM.YYYY HH:mm') : '';
  const formattedEndDate = event.endDate && dayjs(event.endDate).isValid() ? dayjs(event.endDate).format('DD.MM.YYYY HH:mm') : '';

  return (
    <div className="card-component">
      <Link to={`event-details/${title}`} state={_id}>
        <Card style={{ maxWidth: 300, borderRadius: '20px' }}>
          <CardMedia component="img" height="200" image={event.imageUrl} alt="Event Image" />
          <CardContent>
            <Typography variant="h5" component="div">
              {event.title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon color="primary" style={{ marginRight: 8 }} />
                  <Typography variant="body2" color="textSecondary" component="span">
                    {event.location}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <EventIcon color="primary" style={{ marginRight: 8 }} />
                  <Typography variant="body2" color="textSecondary" component="span">
                    <h4>{formattedDate}</h4>
                  </Typography>

                  {formattedEndDate && <EventIcon color="primary" style={{ marginRight: 8 }} />}
                  <Typography variant="body2" color="textSecondary" component="span">
                    <h4>{formattedEndDate}</h4>
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
                backgroundColor: '#56C596',
              }}
            >
              Ticket Price: <span>{event.ticketPrice}</span>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default DynamicEventCard;
