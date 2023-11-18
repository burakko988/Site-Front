import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchEventById } from '../../services/eventService';
import GoogleMapComponent from './TempGoogleMapComponent';
import SliderEventDetail from './TempEventDetailSlider';
import EventDetailImage from './TempeventDetailImage';
import EventDetailContent from './TempEventDetailContent';
import TicketDetailContent from './TempTicketDetailContent';
import EventRules from './TempEventRules';
import './eventDetails.css';
import { Helmet } from 'react-helmet';

const EventDetailsComp = () => {
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
    <main>
      <Helmet>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Helmet>
      {/* Slider Img */}
      <SliderEventDetail />

      {/* Event Details */}
      <main id="eventDetailsMain">
        <div className="eventDetailsContainer">
          {/* Event Detail Image */}
          <EventDetailImage event={event} />

          {/* Event Content */}
          <section id="ticket-event-detail">
            {/* Event Detail */}
            <EventDetailContent event={event} />

            {/* Ticket Detail */}
            <TicketDetailContent event={event} />

            {/* Event Rules  */}
            <EventRules />

            {/* MAPS */}
            {event.coords && (
              <div className="eventContent">
                <div className="map">
                  <h1>Location</h1>
                  <GoogleMapComponent coords={event.coords} />
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </main>
  );
};

export default EventDetailsComp;
