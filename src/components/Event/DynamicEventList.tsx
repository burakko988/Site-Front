import React from 'react';
import DynamicEventCard from './DynamicEventCard';
import { fetchEvents } from '../../services/eventService';
import { useQuery } from 'react-query';

const DynamicEventList: React.FC = () => {
  const { data, isLoading, isError } = useQuery('events', fetchEvents, {
    staleTime: 3000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading events</div>;
  }

  if (!data) {
    return null; // veya başka bir placeholder gösterebilirsiniz
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '130px' }}>
      {data.map((event: any) => (
        <DynamicEventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default DynamicEventList;
