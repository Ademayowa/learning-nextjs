import EventList from '@/components/EventList';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';

export default function HomePage({ events }) {
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
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
