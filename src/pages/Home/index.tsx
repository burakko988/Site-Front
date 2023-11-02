import Events from '../../components/Home/events/events';
// import SearchBar from '../../components/Home/Search/search';
import ImageCarousel from '../../components/Home/Slider/slider';

import DynamicEventList from '../../components/Event/DynamicEventList';
import EventList from '../../components/Event/eventList';

const Home = () => {
  return (
    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <ImageCarousel />
      <Events />
      <EventList />
      {/* <DynamicEventList /> */}
    </div>
  );
};

export default Home;
