import dayjs from 'dayjs';
import React from 'react';

interface Props {
  event: any;
}

const TicketDetailContent: React.FC<Props> = ({ event }) => {
  const formattedDate = event.startDate && dayjs(event.startDate).isValid() ? dayjs(event.startDate).format('DD MMMM dddd ') : '';
  return (
    <>
      <section className="ticketDetail eventContent">
        <div className="listHead">
          <h2>Bilet Satın Al</h2>
          <h2>Tarih Seçiniz</h2>
        </div>
        <div className="listDetail">
          <section>
            <h3>{formattedDate}</h3>
            <p>{event?.place}</p>
            <p>Kredi Kartlarına İndirim Avantajıyla</p>
          </section>
          <section>
            <h3>
              {event?.ticketPrice}
              <span style={{ fontSize: '18px' }}>.00 ₺</span>
            </h3>
            <span>
              <small>Başlayan Fiyatlar</small>
            </span>
          </section>
          <section className="buyTicket">SATIN AL</section>
        </div>
      </section>
    </>
  );
};

export default TicketDetailContent;
