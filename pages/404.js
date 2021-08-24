import Layout from '@/components/Layout';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='text-center mt-5'>
        <h2 className='display-4'>
          <FaExclamationTriangle />
          404
        </h2>
        <h4>Sorry, there is nothing here</h4>
        <Link href='/'>Go back</Link>
      </div>
    </Layout>
  );
}
