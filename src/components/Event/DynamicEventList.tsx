import React from 'react';
import DynamicEventCard from './DynamicEventCard';
import { fetchEvents } from '../../services/eventService';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const DynamicEventList: React.FC = () => {
  const { category } = useParams();
  const { data, isLoading, isError } = useQuery('events', fetchEvents, {
    staleTime: 0,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading events</div>;
  }

  if (!data) {
    return null; // veya başka bir placeholder gösterebilirsiniz
  }

  return (
    <>
      <h1>{category}</h1>
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
