import React from 'react'
import { EventCardProps } from '../Event/eventCard';

interface Props {
  event: EventCardProps | undefined;
}

const EventDetailImage: React.FC<Props> = ({ event }) => {
  if (!event) {
    return null; // veya hata mesajı veya boş bir şey dönebilirsiniz
  }

  return (
    <section className="imgEvent">
      <div>
        <img src={event.resimUrl} alt={event.etkinlikAdi} />
      </div>
    </section>
  );
};

export default EventDetailImage;