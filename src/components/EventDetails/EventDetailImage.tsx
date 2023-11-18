import React from 'react'

interface Props {
  event: any;
}

const EventDetailImage: React.FC<Props> = ({ event }) => {

  return (
    <section className="imgEvent">
      <img src={event.images[0]} alt={event?.title + ' ' + event?.description} />
    </section>
  );
};

export default EventDetailImage;