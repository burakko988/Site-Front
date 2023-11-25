import { useParams } from 'react-router-dom';
import { fetchEventByPlace } from '../../services/eventService';
import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';
import DynamicEventCard from '../../components/Event/EventCard';
import { Helmet } from 'react-helmet';
import Loading from '../../components/Loading/Loading';

const index = () => {
  const { place } = useParams();

  const { data, isLoading, isError } = useQuery(['place', place], () => fetchEventByPlace(place!), {
    staleTime: 3000,
  });

  if (isLoading) {
    return <Loading />;
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
        <title>{data[0].place}</title>
      </Helmet>

      <h1>{data[0].place} Events</h1>
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

export default index;
