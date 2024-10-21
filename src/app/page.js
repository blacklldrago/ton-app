// app/page.js

import Link from 'next/link';
import './globals.css';

const HomePage = () => {
  return (
    <div className="p-4 mt-[100px] max-w-sm mx-auto bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the TON App</h1>
      <p className="mb-6">Please choose one of the options below:</p>

      <div className="space-y-4">
        {/* Link to Wallet Page */}
        <Link href="/wallet" legacyBehavior>
          <a className="block px-4 py-2 bg-blue-500 text-white rounded-lg">Go to Wallet</a>
        </Link>

        {/* Link to Transaction Page */}
        <Link href="/transaction" legacyBehavior>
          <a className="block px-4 py-2 bg-green-500 text-white rounded-lg">Make a Transaction</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
