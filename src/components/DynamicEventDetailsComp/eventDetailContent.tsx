import React from 'react'
import Festival from '@mui/icons-material/Festival'
import Favorite from '@mui/icons-material/Favorite'
import { EventCardProps } from '../Event/eventCard';

interface Props {
  event: EventCardProps | undefined;
}

const EventDetailContent: React.FC<Props> = ({ event }) => {
  if (!event) {
    return null; // veya hata mesajı veya boş bir şey dönebilirsiniz
  }

  return (
    <>
      <section className="eventContent">
        <div>
          <h1>{event?.etkinlikAdi}</h1>
          <div className='eventContentIcon'>
            <Festival sx={{color: '#331D2C'}} /><p>{event?.etkinlikAdi}</p>
            <Festival sx={{color: '#331D2C'}} /><p>{event?.etkinlikYeri}</p>
          </div>
        </div>
        <div className='eventContentDetail'>
          <h3>Etkinlik Detayı</h3>
          <h3 style={{color: '#555'}}>{event?.etkinlikAdi} / {event?.etkinlikYeri}</h3>
          <p><strong>{event?.etkinlikAdi}</strong> {event?.etkinlikYeri.split(" ")[0]} Büyükşehir Belediyesi Sponsorluğunda şehrinize eğlence getiren yapım {event?.etkinlikYeri} alanında sizlerle buluşuyor.</p>
          <p>{event?.etkinlikAdi}, maksimum eğlence için {event?.etkinlikYeri} sahnesinde sizlerle olacak...</p>
        </div>
        <div className="eventContentList">
          <div>
            <h4>Biletler <span>7</span></h4>
          </div>
          <span className="hr"></span>
          <div>
            <h4>Sanatçı {event?.etkinlikAdi.split(" ")[0]}</h4>
          </div>
          <span className="hr"></span>
          <div>
            <h4>Kurallar</h4>
          </div>
          <div className='btn'>
            <button>Favorime Ekle <Favorite sx={{ paddingLeft: '5px' }} /></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventDetailContent