"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TransactionScreen = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [balance, setBalance] = useState(100); // Start with a mock balance
  const [notification, setNotification] = useState('');
  const router = useRouter();

  const handleTransaction = (e) => {
    e.preventDefault();

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid amount!');
      return;
    }

    if (parsedAmount > balance) {
      alert('Insufficient balance!');
      return;
    }

    // Simulate transaction success
    setNotification(`Transaction of ${parsedAmount} TON to ${recipient} was successful!`);
    setBalance(balance - parsedAmount); // Deduct the amount from the balance
    setAmount('');
    setRecipient('');
  };

  return (
    <div className="p-4 mt-[100px] max-w-sm mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => router.back()} className="text-blue-500">Back</button>
        <p className="font-bold">Balance: {balance} TON</p>
      </div>
      {notification && <p className="text-green-500">{notification}</p>}
      <form onSubmit={handleTransaction}>
        <input
          type="number"
          placeholder="Amount of TON"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border rounded mt-4"
        />
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full px-4 py-2 border rounded mt-4"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded mt-4"
        >
          Send TON
        </button>
      </form>
    </div>
  );
};

export default TransactionScreen;
