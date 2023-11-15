import { Card, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';

import { toKebabCase } from '../../helpers/toKebabCase';
import slugify from 'slugify';

export interface DynamicEventCardProps {
  event: {
    _id: string;
    imageUrl: string;
    title: string;
    images: string;
    place: string;
    startDate: Date;
    endDate: Date;
    ticketPrice: string;
  };
}

function DynamicEventCard({ event }: DynamicEventCardProps) {
  const { _id, title } = event;

  const kebabTitle = slugify(title);

  dayjs.locale('tr');

  const formattedDate = event.startDate && dayjs(event.startDate).isValid() ? dayjs(event.startDate).format('DD MMMM dddd / HH:mm') : '';
  const formattedEndDate = event.endDate && dayjs(event.endDate).isValid() ? dayjs(event.endDate).format('DD.MM.YYYY HH:mm') : '';

  return (
    <div className="card-component">
      <Link to={`/event-details/${kebabTitle}`} state={{ id: _id }}>
        <Card className="card-component">
          <CardMedia component="img" height="200" image={event.images[0]} alt="Event Image" />
          <CardContent>
            <Typography className="truncate-2" variant="h5" component="div">
              {event.title}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon color="primary" style={{ marginRight: 8 }} />
                  <Typography className="truncate-1" variant="body2" color="textSecondary" component="span">
                    {event.place}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <EventIcon color="primary" style={{ marginRight: 8 }} />
                  <Typography className="truncate-1" variant="body2" color="textSecondary" component="span">
                    <h4>{formattedDate}</h4>
                  </Typography>

                  {formattedEndDate && <EventIcon color="primary" style={{ marginRight: 8 }} />}
                  <Typography className="truncate-1" variant="body2" color="textSecondary" component="span">
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
