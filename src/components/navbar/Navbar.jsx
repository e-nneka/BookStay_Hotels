import { useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  });

  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* Metamask is insatalled*/ 
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch(err) {
        console.error(err.message);
      }
    }else{
      /*MetaMask is not installed*/ 
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if(accounts.length > 0){
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        }else{
          console.log("Connect to MetaMask using the Connect Wallet button")
        }         
      } catch(err) {
        console.error(err.message);
      }
    }else{
      /*MetaMask is not installed*/ 
      console.log("Please install MetaMask");
    }
  }; 

  const addWalletListener = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    }else{
      /*MetaMask is not installed*/ 
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  return (
    <div className='navbar'>
        <div className="navContainer">
           { /*<span className='logo'><h1>BookStay Hotels</h1></span>*/}
           <Link to={'/'} className='logo'><h1>BookStay Hotels</h1></Link>
            <div className="navItems">
                <button className='navButton' onClick={connectWallet}>
                  {walletAddress.length > 0
                  ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` 
                  : "Connect Wallet"}
                  </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar