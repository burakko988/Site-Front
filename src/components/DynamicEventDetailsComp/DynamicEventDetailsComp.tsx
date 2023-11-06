import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchEventById } from '../../services/eventService';
import GoogleMapComponent from './GoogleMapComponent';
// import SliderEventDetail from './detailSlider';
// import EventDetailImage from './eventDetailImage';
// import EventDetailContent from './eventDetailContent';
// import TicketDetailContent from './ticketDetailContent';
// import EventRules from './eventRules';
// import DetailNav from './detailNav';
import './eventDetails.css'

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

  console.log('memo', event)

  if (error instanceof Error) return <div>An error has occurred: {error.message}</div>;

  return (
    <main>
      <h1>Event Details</h1>
      {event ? (
        <div>
          {event.coords && <GoogleMapComponent coords={event.coords} />}

          <h1>{id}</h1>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Location: {event.location}</p>
        </div>
      ) : (
        <p>No event found</p>
      )}
      {/* Input and Select */}
      {/* <DetailNav /> */}

      {/* Slider Img */}
      {/* <SliderEventDetail /> */}

      {/* Event Details */}
      <main id='eventDetailsMain'>
        <div className="eventDetailsContainer">
          {/* Event Detail Image */}
          {/* <EventDetailImage event={event} /> */}

          {/* Event Content */}
          <section id='ticket-event-detail'>

            {/* Event Detail */}
            {/* <EventDetailContent event={event} /> */}
            
            {/* Ticket Detail */}
            {/* <TicketDetailContent key={event?.id} event={event} /> */}

            {/* Event Rules  */}
            {/* <EventRules /> */}
          </section>
        </div>
      </main>
    </main>
  );
};

export default DynamicEventDetailsComp;
