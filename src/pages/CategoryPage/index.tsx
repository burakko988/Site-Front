import { useEffect } from 'react';
import EventCard from '../../components/Event/EventCard';
import { fetchEventByCategory } from '../../services/eventService';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loading from '../../components/Loading/Loading';

const CategoryPage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { category } = useParams();

  useEffect(() => {
    console.log('pathname', pathname, 'category', category);
  });

  const { data, isLoading, isError } = useQuery(['events', category], () => fetchEventByCategory(category!), {
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
    <div>
      <Helmet>
        <title>{category!.charAt(0).toUpperCase() + category!.slice(1)}</title>
        <meta name="description" content="Discover our events and get information about the latest activities." />
      </Helmet>
      <h1 className="category-title">{category!.charAt(0).toUpperCase() + category!.slice(1)} Events</h1>
      <div>
        <Grid sx={{ mt: 4, mx: 'auto' }} container spacing={0}>
          {data.map((event: any) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={event._id} sx={{ padding: 2 }}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CategoryPage;
