import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import mockData from '../../../mock/mockData';
import { EventCardProps } from '../../Event/eventCard';
import { Link } from 'react-router-dom';

const ImageCarousel = () => {


  let four: EventCardProps[] = []
  for (let i = 0; i < 4; i++) {
    four.push(mockData[i])
  }
  return (
    <Carousel
      animation="slide"
      stopAutoPlayOnHover={false}
      sx={{ height: "500px", width: "100%", zIndex: 0 }}
    >
      {four.map((item, index) => (
        <Paper key={index} elevation={3} sx={{ borderRadius: '10px' }}>
          {/*TODO: When event page done path added here.... */}
          <Link to={item.etkinlikAdi}>
            <div
              style={{
                backgroundImage: `url(${item.resimUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }
              }
            >
            </div>
          </Link>
        </Paper>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
