"use client";

import { useEffect, useState } from 'react';
import { TonConnect } from '@tonconnect/sdk';

const WalletScreen = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(100);
  const [error, setError] = useState(null);

  const tonConnect = new TonConnect({
    manifestUrl: 'http://localhost:3000/tonconnect-manifest.json',
    network: 'testnet'  // Ensure you're on TestNet
  });

  useEffect(() => {
    const walletListener = (wallet) => {
      console.log('Wallet:', wallet); // Log the wallet object

      if (wallet && wallet.account && wallet.account.address) {
        setWalletAddress(wallet.account.address);
        setBalance(100); // Mock balance
      } else {
        console.error("Wallet or account is undefined");
      }
    };

    try {
      const unsubscribe = tonConnect.onStatusChange(walletListener);
      return () => {
        unsubscribe();
      };
    } catch (err) {
      setError("Failed to setup wallet listener");
      console.error(err);
    }
  }, []);

  const connectWallet = async () => {
    try {
      await tonConnect.connect({
        bridge: true // Enable bridge for mobile wallet connection
      });
    } catch (err) {
      setError("Error connecting to wallet");
      console.error(err);
    }
  };

  return (
    <div className="p-4 mt-[100px] max-w-sm mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
        <p className="font-bold">Balance: {balance} TON</p>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {walletAddress && (
        <>
          <p className="mt-4">Wallet Address: {walletAddress}</p>
        </>
      )}
    </div>
  );
};

export default WalletScreen;
