import Events from '../../components/Home/events/events';
// import SearchBar from '../../components/Home/Search/search';
import ImageCarousel from '../../components/Home/Slider/slider';

import EventList from '../../components/Event/eventList';

const Home = () => {
  return (
    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <ImageCarousel />
      <Events />
      <EventList />
      
    </div>
  );
};

export default Home;
