import EventList from '@/components/EventList';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';

export default function HomePage({ events }) {
  console.log(events);

  return (
    <Layout>
      <h2 className='text-center mt-5'>Upcoming Events</h2>
      {events.length === 0 && <h3>No events to show at the moment</h3>}

      {events.map((evt) => (
        <EventList key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link className='text-center' href='/events'>
          <a className='btn btn-danger'>View All</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  // console.log(events);

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}
