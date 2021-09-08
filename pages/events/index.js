import EventList from '@/components/EventList';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h2 className='text-center mt-5'>Events</h2>
      {events.length === 0 && <h3>No events to show at the moment</h3>}

      {events.map((evt) => (
        <EventList key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
