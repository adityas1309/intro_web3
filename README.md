# **Intro to Web3: Bringing Blockchain to Your React App**

Welcome, adventurers\! This repository contains the complete source code for the live demo presented at **React Kolkata by ReactPlay**. This project is a simple yet functional decentralized application (dApp) designed to be a starting point for React developers venturing into the world of Web3.

The goal of this demo is to show how to:

* Connect a React app to the Ethereum blockchain.  
* Read data from a smart contract.  
* Write data to a smart contract by sending a transaction.  
* Interact with a user's MetaMask wallet.

## **🚀 Getting Started**

Follow these steps to get the project running on your local machine. This quest is divided into two parts: deploying the smart contract and running the React frontend.

### **Prerequisites**

1. **Node.js**: Make sure you have Node.js (v18 or higher) installed.  
2. **MetaMask**: Install the [MetaMask browser extension](https://metamask.io/).  
3. **Test MATIC**: Get some free Amoy Test MATIC from the official Polygon Faucet: [faucet.polygon.technology](https://faucet.polygon.technology/). You'll need to switch your MetaMask network to "Polygon Amoy".

### **Part 1: The Magic Scroll (Deploying the Smart Contract)**

We'll use the browser-based Remix IDE to deploy our Greeter.sol contract.

1. **Open Remix**: Go to [remix.ethereum.org](https://www.google.com/search?q=https://remix.ethereum.org).  
2. **Create File**: Create a new file named Greeter.sol and paste the code from the smart-contract/Greeter.sol file in this repository.  
3. **Compile**:  
   * Navigate to the "Solidity Compiler" tab.  
   * Ensure the compiler version matches the pragma line (e.g., 0.8.20).  
   * Click Compile Greeter.sol.  
4. **Deploy to Polygon Amoy Testnet**:  
   * Navigate to the "Deploy & Run Transactions" tab.  
   * Change the **ENVIRONMENT** to **"Injected Provider \- MetaMask"**. (Your wallet will pop up. Make sure you are on the "Polygon Amoy" network).  
   * In the text box next to the "Deploy" button, enter an initial greeting like "Hello from React Kolkata\!".  
   * Click Deploy and confirm the transaction in MetaMask.  
5. **Save Your Details**:  
   * **Contract Address**: After deployment, copy the contract address under "Deployed Contracts".  
   * **ABI**: Go back to the compiler tab and click the "ABI" button to copy the contract's ABI.

You'll need both the **Address** and the **ABI** for the next part\!

### **Part 2: The React Quest Camp (Running the Frontend)**

1. **Clone the Repository**:  
   git clone \[https://github.com/adityas1309/intro\_web3.git\](https://github.com/adityas1309/intro\_web3.git)  
   cd intro\_web3

2. **Install Dependencies**:  
   npm install

3. **Add Your Contract Details**:  
   * Open src/App.jsx.  
   * Paste your **Contract Address** into the GREETING\_CONTRACT\_ADDRESS variable.  
   * Paste your **ABI** into the GREETING\_CONTRACT\_ABI variable.  
4. **Run the App**:  
   npm run dev

   Your browser will open to http://localhost:5173/, and you can now interact with your dApp\!

### **🔗 Additional Resources**

* **Presentation Slides**:Linktoyourslideswillgohere  
* **Ethers.js Documentation**: [https://docs.ethers.org/](https://docs.ethers.org/)  
* **Solidity Documentation**: [https://docs.soliditylang.org/](https://docs.soliditylang.org/)

### **👋 Connect With Me**

Thanks for attending my talk\! Feel free to connect with me.

* **Twitter/X**: [@adityas1309](https://twitter.com/adityas1309)  
* **LinkedIn**: [/in/adityas1309](https://www.linkedin.com/in/adityas1309/)  
* **GitHub**: [@adityas1309](https://github.com/adityas1309)