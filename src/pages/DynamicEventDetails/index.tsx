import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchEventById } from '../../services/eventService';
import GoogleMapComponent from '../../components/eventDetails/GoogleMapComponent';

const EventDetails = () => {
  const location = useLocation();
  const { id } = location.state || {};

  const {
    data: event,
    isLoading,
    error,
  } = useQuery(['event', id], () => fetchEventById(id), {
    // Eğer id undefined ise sorguyu pasif yapmak için
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <h1>Event Details</h1>
      {event ? (
        <div>
          <GoogleMapComponent coords={event.coords} />
          <h1>{id}</h1>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Location: {event.location}</p>
          <p>{event.coords.lat}</p>
          <p>{event.coords.lng}</p>
        </div>
      ) : (
        <p>No event found</p>
      )}
    </div>
  );
};

export default EventDetails;
