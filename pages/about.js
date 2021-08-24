import Link from 'next/link';

import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout title='About DJ Events'>
      <h2>About</h2>

      <p>This is an app to find the latest musical events</p>
      <p>version 1.0.0</p>
      <Link href='/'>Home </Link>
    </Layout>
  );
}
