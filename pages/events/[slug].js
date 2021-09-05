import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventPage({ evt }) {
  return (
    <Layout>
      <h2>{evt.name}</h2>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // console.log(slug);

  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  // console.log(events);

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}
