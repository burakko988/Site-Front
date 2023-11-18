import React, { useEffect } from 'react';
import EventCard from './TempEventCard';
import { fetchEvents } from '../../services/eventService';
import { fetchEventByCategory } from '../../services/eventService';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';

const EventList: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { category } = useParams();

  useEffect(() => {
    console.log('pathname', pathname, 'category', category);
  });

  const queryKey = pathname === '/' ? ['events'] : ['events', category];
  const queryFn = pathname === '/' ? fetchEvents : () => fetchEventByCategory(category!);

  const { data, isLoading, isError } = useQuery(queryKey, queryFn, {
    staleTime: 3000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading events</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>{category}</h1>
      <div>
        <Grid sx={{ mt: 4, mx: 'auto' }} container spacing={0}>
          {data.map((event: any) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={event._id} sx={{ padding: 2 }}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default EventList;
