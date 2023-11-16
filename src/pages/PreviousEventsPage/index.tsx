import React from 'react';
import DynamicEventCard from '../../components/Event/EventCard';
import { fetchPreviousEvents } from '../../services/eventService';
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';

const DynamicEventList: React.FC = () => {
  const { data, isLoading, isError } = useQuery('previousEvents', fetchPreviousEvents, {
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
      <Helmet>
        <title>Previos Events</title>
        <meta name="description" content="Discover our events and get information about the latest activities." />
      </Helmet>
      <h1>Previous Events</h1>
      <div>
        <Grid sx={{ mt: 4, mx: 'auto' }} container spacing={0}>
          {data.map((event: any) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={event._id} sx={{ padding: 2 }}>
              <DynamicEventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default DynamicEventList;
