import {  Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ImageCarousel = () => {

  const images = [
   {item: {
      url: 'https://picsum.photos/id/235/500/600',
      caption: 'Resim 1',
    }},
    {item: {
        url: 'https://picsum.photos/id/265/500/600',
        caption: 'Resim 1',
      }},
      {item: {
        url: 'https://picsum.photos/id/215/500/600',
        caption: 'Resim 1',
      }},
    // Diğer resimler...
  ];
  return (
    <Carousel
    animation="slide"
    stopAutoPlayOnHover={false}
    sx={{height:"500px",width:"100%",zIndex:0}}
  >
    {images.map((item, index) => (
      <Paper key={index} elevation={3} sx={{ borderRadius: '10px' }}>
        {/*TODO: When event page done path added here.... */}
        {/* <Link to={item.item.caption}> */}

        <div
          style={{
            backgroundImage: `url(${item.item.url})`,
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
          {/* </Link> */}
      </Paper>
    ))}
  </Carousel>
  );
};

export default ImageCarousel;
