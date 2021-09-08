import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
// import styles from '@/styles/Event.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

export default function EventPage({ evt }) {
  const deleteEvent = (e) => {
    console.log('delete');
  };

  return (
    <Layout>
      <div className='d-flex justify-content-end mt-5 mb-3'>
        <Link href={`/events/edit/${evt.id}`}>
          <a>
            <FaPencilAlt /> Edit Event
          </a>
        </Link>

        <a className='ms-3' href='#' onClick={deleteEvent}>
          <FaTimes /> Delete Event
        </a>
      </div>

      <span>
        {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        <h1 className='fw-bold fs-3'>{evt.name}</h1>
        {evt.image && (
          <div>
            <Image
              src={evt.image.formats.small.url}
              width={1500}
              height={600}
              objectFit='cover'
              className='mt-2'
            />
          </div>
        )}
        <h3 className='mt-3'>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
      </span>

      <Link href='/events'>
        <a>{'<'} Go Back</a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    // This looks for the paths(which is the slug)
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // console.log(slug);

  const res = await fetch(`${API_URL}/events/?slug=${slug}`);
  const events = await res.json();
  // console.log(events);

  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}
