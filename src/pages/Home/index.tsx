import { Helmet } from 'react-helmet';
import EventList from '../../components/Event/EventList';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page - Events</title>
        <meta name="description" content="Discover our events and get information about the latest activities." />
      </Helmet>
      <EventList />
    </div>
  );
};

export default Home;
