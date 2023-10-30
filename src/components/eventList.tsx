import React from 'react';
import EventCard from './eventCard';
import mockData from '../mock/mockData';

const EventList = () => {
  return (
    <div>
      {mockData.map((event, index) => (
        <EventCard
          key={index} // React listelerde her öğenin benzersiz bir anahtara sahip olmasını ister. Genellikle ID kullanılır ama mock datanızda ID yoksa indeks kullanabilirsiniz.
          resimUrl={event.resimUrl}
          etkinlikAdi={event.etkinlikAdi}
          etkinlikYeri={event.etkinlikYeri}
          etkinlikTarihi={event.etkinlikTarihi}
          etkinlikUcreti={event.etkinlikUcreti}
        />
      ))}
    </div>
  );
};

export default EventList;
