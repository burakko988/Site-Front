import React from 'react';
import Festival from '@mui/icons-material/Festival';
import Favorite from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import Share from './ShareButton';
import slugify from 'slugify';

interface Props {
  event: any;
}

const EventDetailContent: React.FC<Props> = ({ event }) => {
  return (
    <>
      <section className="eventContent">
        <div>
          <h1>{event?.title}</h1>

          <div className="eventContentIcon">
            <div style={{ display: 'flex' }}>
              <Festival sx={{ color: '#331D2C' }} />
              <p>{event?.title}</p>
              <Festival sx={{ color: '#331D2C', marginLeft: '20px' }} />
              <Link to={`/place/${slugify(event.place, { lower: true })}`}>{event?.place}</Link>
            </div>
            <Share {...event} />
          </div>
        </div>
        <div className="eventContentDetail">
          <h3>Etkinlik Detayı</h3>
          <p>
            <strong>{event?.title}</strong> {event?.place} Büyükşehir Belediyesi Sponsorluğunda şehrinize eğlence getiren yapım {event?.description} alanında sizlerle buluşuyor.
          </p>
          <p>
            {event?.title}, maksimum eğlence için {event?.description} sahnesinde sizlerle olacak...
          </p>
        </div>
        <div className="eventContentList">
          <div>
            <h4>
              Biletler <span>7</span>
            </h4>
          </div>
          <span className="hr"></span>
          <div>
            <h4>Sanatçı {event?.title}</h4>
          </div>
          <span className="hr"></span>
          <div>
            <h4>Kurallar</h4>
          </div>
          <div className="btn">
            <button>
              Favorime Ekle <Favorite sx={{ paddingLeft: '5px' }} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailContent;
