# **Your Next Web3 Quest\!**

Congratulations on completing the "Intro to Web3" demo\! You've successfully connected a React app to the blockchain, which is a huge first step.

Now it's time to level up your skills. These challenges are designed to help you explore more Web3 concepts by building on top of the code from the workshop.

### **🔥 Level 1 (Easy Quest): Polish the User Interface**

Your first quest is to make the dApp experience smoother. This focuses on frontend skills.

**Your Tasks:**

1. **Add a Loading State:** When a user clicks "Set Greeting," the transaction takes a few seconds to be confirmed by the blockchain. During this time, the UI doesn't give any feedback. Your task is to disable the button and show a loading indicator (e.g., "Updating greeting on the blockchain...") while the transaction is pending (await tx.wait()).  
2. **Display Transaction Hash:** After a successful transaction, the tx object contains the transaction hash. Display this hash to the user as a confirmation, ideally with a link to view it on a block explorer like [https://amoy.polygonscan.com/tx/YOUR\_TX\_HASH](https://amoy.polygonscan.com/tx/YOUR_TX_HASH).

### **🔥🔥 Level 2 (Medium Quest): The Town Crier's Proclamation**

A core feature of smart contracts is emitting **events**. Events are like logs that are permanently stored on the blockchain, which frontends can listen to.

**Your Tasks:**

1. **Modify the Smart Contract (Greeter.sol):**  
   * Define a new event called GreetingChanged that logs the address of the person who changed the greeting (changer) and the newGreeting string.  
   * In your setGreeting function, emit this new event after the greeting has been updated.  
2. **Update the React App (App.jsx):**  
   * Use ethers.js to listen for the GreetingChanged event from your contract.  
   * When a new event is received, console.log it for now.  
   * **Bonus:** Create a "Recent Changes" list in your UI that displays a history of the greetings that have been set.

### **🔥🔥🔥 Level 3 (Hard Quest): The Royal Guestbook**

Let's add a new feature\! Turn the dApp into a guestbook where anyone can sign a message for a small fee.

**Your Tasks:**

1. **Modify the Smart Contract (Greeter.sol):**  
   * Create a struct called Signature that contains a signer (address) and a message (string).  
   * Create an array of Signature structs to store all the messages.  
   * Create a new payable function called signGuestbook(string memory \_message). This function should require the user to send a small amount of MATIC (e.g., 0.001 MATIC) to call it. Use require(msg.value \>= 0.001 ether).  
   * Inside the function, add the new signature (msg.sender, \_message) to the array.  
   * Create a view function to get all the signatures.  
2. **Update the React App (App.jsx):**  
   * Add a new UI section for the Guestbook.  
   * Include a form that allows a user to type a message and click "Sign Guestbook".  
   * When the form is submitted, call the signGuestbook function, making sure to send the required amount of MATIC with the transaction.  
   * Display the list of all signatures retrieved from the blockchain.

### **Submission**

There's no formal submission, but I'd love to see your work\! Fork the original repository, complete the challenges, and share a link to your repo on Twitter/X.

**Don't forget to tag me \[@adityas1309\] and \[@ReactKolkata\]\!**

Happy building\!