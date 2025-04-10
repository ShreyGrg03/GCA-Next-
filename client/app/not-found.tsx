import { Home } from 'lucide-react';
import Link from 'next/link';

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
      
      <div className="flex flex-col items-center h-96 w-full">
        <img src="/images/dd.gif" alt="404 illustration" className="mb-6 max-h-72 object-contain" />
        <h1 className="text-8xl text-center text-gray-800">404</h1>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-4xl mb-4">Looks like you&apos;re lost</h2>
        <p className="text-lg mb-6">The page you are looking for is not available!</p>
        
        <Link
          href="/"
          className={cn(
            'flex items-center justify-center text-white bg-blue-600 px-5 py-3 rounded-md hover:bg-blue-700 transition'
          )}
        >
          <Home className="mr-2" />
          Go to Home
        </Link>
      </div>
      
    </div>
  );
};

export default NotFoundPage;
