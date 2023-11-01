import React from 'react';
import EventCard from './eventCard';
import mockData from '../../mock/mockData';

const EventList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '130px' }}>
      {mockData.map((event, index) => (
        <EventCard
          key={index}
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
