import { useWallet } from '../contexts/WalletContext';
import Banner from '../components/Banner';

export default function ConnectWallet() {
  const { account, network, connectWallet } = useWallet();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Banner />
      <div className="flex flex-col items-center justify-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Connect Your Wallet</h2>
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded shadow-lg hover:bg-blue-600 transition-colors"
        >
          Connect Wallet
        </button>
        {account && (
          <div className="mt-6 bg-white p-4 rounded shadow-md w-full max-w-md text-center">
            <p className="text-lg font-medium mb-2">Connected Address:</p>
            <p className="text-gray-700">{account}</p>
            <p className="text-lg font-medium mt-4 mb-2">Network:</p>
            <p className="text-gray-700">{network}</p>
          </div>
        )}
      </div>
    </div>
  );
}
