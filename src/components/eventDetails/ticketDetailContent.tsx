import React from 'react';
import { EventCardProps } from '../Event/eventCard';

interface Props {
  event: EventCardProps | undefined;
}

const TicketDetailContent: React.FC<Props> = ({ event }) => {
  if (!event) {
    return null; // veya hata mesajı veya boş bir şey dönebilirsiniz
  }

  const momentDateDay = Number(event?.etkinlikTarihi.split(' ')[0]);
  const momentDateMonth = event?.etkinlikTarihi.split(' ')[1];
  const momentDateYear = event?.etkinlikTarihi.split(' ')[2];

  const setEtkinlikTarihi = [
    event?.etkinlikTarihi,
    String(momentDateDay + 7) + ' ' + momentDateMonth + ' ' + momentDateYear,
    String(momentDateDay + 14) + ' ' + momentDateMonth + ' ' + momentDateYear,
    String(momentDateDay + 21) + ' ' + momentDateMonth + ' ' + momentDateYear,
  ];

  return (
    <>
      <section className="ticketDetail eventContent">
        <div className="listHead">
          <h2>Bilet Satın Al</h2>
          <h2>Tarih Seçiniz</h2>
        </div>
        {setEtkinlikTarihi.map((e, index) => {
          return (
            <li key={index}>
              <div className="listDetail">
                <section>
                  <h3>{e}</h3>
                  <p>{event?.etkinlikYeri}</p>
                  <p>Kredi Kartlarına İndirim Avantajıyla</p>
                </section>
                <section>
                  <h3>{event?.etkinlikUcreti}</h3>
                  <span>
                    <small>Başlayan Fiyatlar</small>
                  </span>
                </section>
                <section className='buyTicket'>
                  SATIN AL
                </section>
              </div>
            </li>
          );
        })}
      </section>
    </>
  );
};

export default TicketDetailContent;
