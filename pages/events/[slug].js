import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventPage({ evt }) {
  return (
    <Layout>
      <h2>{evt.name}</h2>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  // console.log(slug);

  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  // console.log(events);

  return {
    props: {
      evt: events[0],
    },
  };
}
