import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

// --- PASTE YOUR CONTRACT DETAILS HERE ---
// You get these from Remix after deploying your contract.
const GREETING_CONTRACT_ADDRESS = "0xcc07a69a7a5d93fdf073946387a487ef70a637d1";
import GREETING_CONTRACT_ABI from './abi';


function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [greeting, setGreeting] = useState('');
  const [newGreeting, setNewGreeting] = useState('');
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(GREETING_CONTRACT_ADDRESS, GREETING_CONTRACT_ABI, signer);
        
        setWalletAddress(accounts[0]);
        setContract(contractInstance);
        setProvider(provider);
        
        fetchGreeting(contractInstance);

      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const fetchGreeting = async (contractInstance) => {
    try {
      const currentGreeting = await contractInstance.getGreeting();
      setGreeting(currentGreeting);
    } catch (error) {
      console.error("Error fetching greeting:", error);
    }
  };

  const handleSetGreeting = async (e) => {
    e.preventDefault();
    if (!contract || newGreeting.trim() === '') return;

    try {
      const tx = await contract.setGreeting(newGreeting);
      
      alert("Setting new greeting... please wait.");
      await tx.wait();
      
      fetchGreeting(contract);
      setNewGreeting(''); 
      alert("Greeting updated successfully!");

    } catch (error) {
      console.error("Error setting greeting:", error);
      alert("Failed to set greeting.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Intro to Web3: The Demo!</h1>
        
        {walletAddress ? (
          <div>
            <p><strong>Connected Wallet:</strong> {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</p>
            
            <div className="card">
              <h2>Blockchain Message:</h2>
              <p className="greeting-text">"{greeting}"</p>
            </div>

            <form onSubmit={handleSetGreeting} className="card">
              <h3>Update the Message (Write Quest):</h3>
              <input 
                type="text" 
                value={newGreeting}
                onChange={(e) => setNewGreeting(e.target.value)}
                placeholder="Enter new greeting"
              />
              <button type="submit">Set Greeting</button>
            </form>
          </div>
        ) : (
          <button onClick={connectWallet}>Connect Your Wallet</button>
        )}
      </header>
    </div>
  );
}

export default App;