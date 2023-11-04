
// import SearchBar from '../../components/Home/Search/search';
import ImageCarousel from '../../components/Home/Slider/slider';
import DynamicEventList from '../../components/Event/DynamicEventList';
import EventList from '../../components/Event/eventList';
import EventCategory from '../../components/Home/EventCategory/EventCategory';

const Home = () => {
  return (
    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <ImageCarousel />
      <EventCategory />
      <EventList />
      {/* <DynamicEventList /> */}
    </div>
  );
};

export default Home;
