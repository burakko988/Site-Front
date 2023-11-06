import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchEventById } from '../../services/eventService';
import GoogleMapComponent from './GoogleMapComponent';
import SliderEventDetail from './detailSlider';
import EventDetailImage from './eventDetailImage';
import EventDetailContent from './eventDetailContent';
import TicketDetailContent from './ticketDetailContent';
import EventRules from './eventRules';
import './eventDetails.css';

const DynamicEventDetailsComp = () => {
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
            {
              event.coords && (
                <div className="eventContent">
                  <div className="map">
                    <h1>Location</h1>
                    <GoogleMapComponent coords={event.coords} />
                  </div>
                </div>
              )
            }
          </section>
        </div>
      </main>
    </main>
  );
};

export default DynamicEventDetailsComp;