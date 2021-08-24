import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Find the latest DJ Events',
  description: 'Get the latest music in town',
};
