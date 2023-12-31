import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchEventByTitle } from '../../services/eventService';
import GoogleMapComponent from './GoogleMapComponent';
import SliderEventDetail from './EventDetailSlider';
import EventDetailImage from './EventDetailImage';
import EventDetailContent from './EventDetailContent';
import TicketDetailContent from './TicketDetailContent';
import EventRules from './EventRules';
import './eventDetails.css';
import { Helmet } from 'react-helmet';
import Loading from '../Loading/Loading';

const EventDetailsComp = () => {
  const { title } = useParams();

  const {
    data: event,
    isLoading,
    error,
  } = useQuery(['events', title], () => fetchEventByTitle(title!), {
    staleTime: 3000,
  });

  if (isLoading) {
    return <Loading />;
  }

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
                  <div className="googleMap">
                    <GoogleMapComponent coords={event.coords} />
                  </div>
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
