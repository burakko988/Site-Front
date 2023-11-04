import { useEffect, useState } from 'react'
import mockData from '../../mock/mockData'
import { useLocation } from 'react-router-dom'
import { EventCardProps } from '../Event/eventCard'
import DetailNav from './detailNav'
import SliderEventDetail from './detailSlider'
import './eventDetails.css'
import EventDetailImage from './eventDetailImage'
import EventDetailContent from './eventDetailContent'
import TicketDetailContent from './ticketDetailContent'
import EventRules from './eventRules'

const EventDetailsComp = () => {

  const { state } = useLocation()
  const [event, setevent] = useState<EventCardProps>()

  useEffect(() => {
    getSingleEvent()
  }, [])


  const getSingleEvent = () => {
    const resp = mockData.find((q) => state === q.id)
    setevent(resp)
  }


  return (
    <main>
      {/* Input and Select */}
      <DetailNav />

      {/* Slider Img */}
      <SliderEventDetail />

      {/* Event Details */}
      <main id='eventDetailsMain'>
        <div className="eventDetailsContainer">
          {/* Event Detail Image */}
          <EventDetailImage event={event} />

          {/* Event Content */}
          <section id='ticket-event-detail'>

            {/* Event Detail */}
            <EventDetailContent event={event} />
            
            {/* Ticket Detail */}
            <TicketDetailContent key={event?.id} event={event} />

            {/* Event Rules  */}
            <EventRules />
          </section>
        </div>
      </main>
    </main>
  )
}

export default EventDetailsComp;